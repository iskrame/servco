//#region Imports
const Validator = require("validator");
const isEmpty = require("./is-empty");
//#endregion

//Function to validate the input of the fields in
// the login
module.exports = function ValidateSendingMailInput(data) {
  let errorsEmail = {};
  //This validation check if the variable data.email
  //is  null, undefine, empty or object
  if (isEmpty(data.recoverEmail)) {
    data.recoverEmail = "";
  } else {
    data.recoverEmail = data.recoverEmail;
  }
  //This validation chek if the input in the field  of email
  // its a valid email
  //If not a valid email return an Error
  if (!Validator.isEmail(data.recoverEmail)) {
    errorsEmail.recoverEmail = "Formato de correo incorrecto";
  }
  //This validation chek if the input in the field  of email
  // its empty
  //If it is empty value return an Error

  if (Validator.isEmpty(data.recoverEmail)) {
    errorsEmail.recoverEmail = "Correo  requerido";
  }
  //This validation chek if the value of object errors are empty
  //If it have an empty value return true  else return false
  return {
    errorsEmail,
    isValid: isEmpty(errorsEmail)
  };
};
