//#region Imports
const Validator = require("validator");
const isEmpty = require("./is-empty");
const lang = require("../src/translate/serverTranslate");
//#endregion

//Function to validate the input of the fields in
// the login
module.exports = function ValidateLoginInput(data) {
  let errors = {};
  //This validation check if the variable data.email
  //is  null, undefine, empty or object
  if (isEmpty(data.email)) {
    data.email = "";
  } else {
    data.email = data.email;
  }
  //This validation check if the variable data.password
  //is  null, undefine, empty or object
  if (isEmpty(data.password)) {
    data.password = "";
  } else {
    data.password = data.password;
  }

  //This validation chek if the input in the field  of email
  // its a valid email
  //If not a valid email return an Error
  if (!Validator.isEmail(data.email)) {
    errors.email = lang().emailFormat;
  }
  //This validation chek if the input in the field  of email
  // its empty
  //If it is empty value return an Error

  if (Validator.isEmpty(data.email)) {
    errors.email = lang().mailRequired;
  }
  //This validation chek if the input in the field  of password
  // its empty
  //If it is empty value return an Error
  if (Validator.isEmpty(data.password)) {
    errors.password = lang().passRequired;
  }
  // if (!Validator.isAlphanumeric(data.password)) {
  //   errors.password = "Contraseña no permite caractere especiales";
  // }
  //This validation chek if the value of object errors are empty
  //If it have an empty value return true  else return false
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
