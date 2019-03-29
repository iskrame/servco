const Validator = require("validator");
const isEmpty = require("./is-empty");
const language = require("../src/translate/serverTranslate");

module.exports = function validateRecoverPasswordInput(data) {
  let errors = {};
  //take the value and get if is undefine,null,object or is empty value
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? data.passwordConfirm
    : "";

  // to check if the password field is not empty
  // if (Validator.isEmpty(data.password)) {
  //   errors.password = "Conraseña Requerida";
  // }
  //to check if the password lenght is between 6 and 30 characters
  if (
    !Validator.isLength(data.password, { min: 8, max: 25 }) ||
    !Validator.isLength(data.passwordConfirm, { min: 8, max: 25 })
  ) {
    errors.passwordConfirm =language().passLength;
  }

  //this is for check if the both passwords are equals
  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = language().passNotMatch;
  }
  //to check if confirm password field is not empty
  if (
    Validator.isEmpty(data.passwordConfirm) ||
    Validator.isEmpty(data.password)
  ) {
    errors.passwordConfirm = language().emptyFields;
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
