const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRecoverPasswordInput(data) {
  let errors = {};
  //take the value and get if is undefine,null,object or is empty value
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? data.passwordConfirm
    : "";

  //to check if the password field is not empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Conraseña Requerida";
  }
  //to check if the password lenght is between 6 and 30 characters
  if (
    !Validator.isLength(data.password, { min: 8, max: 25 }) &&
    !Validator.isEmpty(data.password)
  ) {
    errors.password = "La cotraseña debe contener entre 8 y 25 caracteres";
  }

  //to check if confirm password field is not empty
  console.log(data.passwordConfirm);
  if (Validator.isEmpty(data.passwordConfirm)) {
    console.log(data.passwordConfirm);
    errors.passwordConfirm = "Confirmar contraseña requerido";
  }

  //this is for check if the both passwords are equals
  if (
    !Validator.equals(data.password, data.passwordConfirm) &&
    !Validator.isEmpty(data.passwordConfirm)
  ) {
    console.log(1234);
    errors.passwordConfirm = "Las contraseñas deben de coincidir";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
