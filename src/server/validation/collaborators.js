const Validator = require("validator");
const isEmpty = require("./is-empty");

// module.exports = function validateCollaboratorInputs(data) {
function validateCollaboratorInputs(data) {
  //array for the errors
  let errors = {};

  //Setting values

  data.clave = !isEmpty(data.clave) ? data.clave : "";
  data.names = !isEmpty(data.names) ? data.names : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";

  //validations
  if (Validator.isEmpty(data.clave.toString())) {
    errors.clave = "Campo Obligatorio";
  }
  if (Validator.isEmpty(data.names)) {
    errors.names = "Campo Obligatorio";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Campo Obligatorio";
  }
  //   if (!(parseInt(data.clave) >= 0 && parseInt(data.clave) <= 999999)) {
  //     errors.clave = "El valor del campo debe ser entre 0 y 999999";
  //   }
  // if (!Validator.isLength(data.clave, { min: 1, max: 6 })) {
  //     errors.clave = "El valor del campo debe ser entre 0 y 999999"
  // }
  if (!isEmpty(data.email) && !Validator.isEmail(data.email)) {
    errors.email = "Formato de correo inválido";
  }
  if (
    !isEmpty(data.password) &&
    !Validator.isLength(data.password, { min: 8, max: 50 })
  ) {
    errors.password = "La contraseña debe ser entre 8 y 50 caracteres";
  }
  return {
    errors,
    isValid: isEmpty(errors) //if the array is empty, means the required fields are not empty and it's ready to save
  };
}

exports.validateCollaboratorInputs = validateCollaboratorInputs;
