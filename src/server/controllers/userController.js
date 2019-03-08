const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../config/keys");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
// Load Input Validation
const validateLoginInput = require("../validation/login");
const ValidateSendingMailInput = require("../validation/sendingE-Mail");
const validateUsersRegisterInput = require("../validation/userRegister");
const ValidateRecoverPassword = require("../validation/recoverPassword");
// Load User model
const Users = require("../models/users");

//Function to register an user
exports.usersRegister = function(req, res) {
  //To get the errors and if is valid the user,
  //if is not valid errors will have specific errors
  //else errors will be empty
  const { errors, isValid } = validateUsersRegisterInput(req.body);

  //Check if is valid the user fields
  if (!isValid) return res.status(400).json(errors);
  //find in the user by email
  Users.findOne({ email: req.body.email }).then(user => {
    // if the user is not empty throw an error
    if (user) {
      errors.email = "El correo ingresado ya se encuenta registrado";
      return res.status(400).json(errors);
    }
    //const to recibe the info of the new user
    const newUser = new Users({
      email: req.body.email,
      password: req.body.password,
      isActive: req.body.isActive
    });
    //Encrypt the password for security
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
};
//Function to get credentials to verify if the user is valid or not
exports.getUserLogin = function(req, res) {
  //variables to get if is valid the text in the imputs, and
  // get the errors throwed by the function
  const { errors, isValid } = validateLoginInput(req.body);

  //Check if the input value is valid
  if (!isValid) return res.status(400).json(errors);

  const email = req.body.email;
  const password = req.body.password;

  //here is finding an user by email
  Users.findOne({ email }).then(user => {
    //Check if the email is in the data base
    if (!user) {
      errors.emailnotFound = "Usuario no encontrado";
      return res.status(404).json(errors);
    }
    //Check if the password is the correct password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //if user match then fill the payload to create the token
        const payload = { id: user.id, email: email };

        //create the token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.wrongPassword = "Contraseña incorrecta";
        res.status(400).json(errors);
      }
    });
  });
};
//Function to send email to the user who forgeot the password
exports.sendingEMail = function(req, res) {
  let tokenEmail = {};
  //variables to get if is valid the text in the imputs, and
  // get the errors throwed by the function

  const { errorsEmail, isValid } = ValidateSendingMailInput(req.body);
  //Check if the input value is valid
  if (!isValid) return res.status(400).json(errorsEmail);

  const email = req.body.recoverEmail;
  //here is finding an user by email
  Users.findOne({ email }).then(user => {
    //Check if the email is in the data base
    if (!user) {
      errorsEmail.recoverEmail = "El correo no se encuentra registrado";
      return res.status(404).json(errorsEmail);
    }
    // empleados.findOne({ _id: user.employee}).then(empleado => {
    //if user match then fill the payload to create the token
    const payload = { id: user.id, email: email };

    //create the token
    var trasnporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "lmpadillar@gmail.com",
        pass: "luisrios04."
      }
    });
    const token = jwt.sign(
      payload,
      keys.secretOrKey,
      { expiresIn: 3600 },
      {
        succes: true,
        token: "Bearer " + tokenEmail
      }
    );
    var mailOptions = {
      from: "Servicios al Colaborador",
      to: user.email,
      subject: "Recuperar Contraseña",
      text: `Hola,
        Recibimos la solicitud de recuperacion de contraseña para su cuenta en 'SERVCO'
        \nPara concluir el proceso y cambiar su contraseña, diríjase a la siguiente dirección http:localhost:3000/recoverpassword/Bearer ${token}/${
        user._id
      }
        \nEn la mayoría de programas de correo electrónico el enlace anterior debería aparecer
        \nen azul y puede hacer clic sobre él. Si no funcionara, córtelo y péguelo en la ventana de direcciones de su navegador.
        \nSi necesita ayuda adicional, póngase en contacto con el administrador
        \nEnrique Perez Rul
        \ncorreoElectronicoAdministrador.`
    };
    trasnporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        res.send(500, err.message);
      } else {
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 120 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
        // console.log("email sent");
        // res.status(200).jsonp(req.body);
      }
    });
  });
};

exports.recoverPassword = function(req, res) {
  const { errors, isValid } = ValidateRecoverPassword(req.body);

  if (!isValid) return res.status(400).json(errors);
  // const idUser = mongoose.objectid(req.body._id);
  Users.findOne({ _id: req.body._id }).then(user => {
    //const to recibe the info of the new user
    const newPassword = new Users({
      password: req.body.password
    });
    //Encrypt the password for security
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPassword.password, salt, (err, hash) => {
        if (err) throw err;
        newPassword.password = hash;

        Users.update(
          { _id: req.body.userId },
          {
            $set: { password: newPassword.password }
          }
        )
          .then(user => {
            res.json(user);
          })
          .catch(err => console.log(err));
      });
    });
  });
};

exports.getUserInfo = function(req, res) {
  passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        email: req.user.email
      });
    };
};
