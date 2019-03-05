const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateUsersRegisterInput(data) {
  let errors = {};
  console.log(data.password);
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Correo requerido";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Formato de correo invalido";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Contraseña requerida";
  }

  if (Validator.isLength(data.password, { min: 8, max: 50 })) {
    errors.password = "Contraseña tiene que tener entre 8 y 50 caracteres";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
