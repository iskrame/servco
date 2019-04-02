// import Validator from "validator";
// import isEmpty from "./is-empty";
function isEmpty(data) {
  return (
    data === undefined ||
    data === null ||
    (typeof data === "object" && Object.keys(data).length === 0) ||
    (typeof data === "string" && data.trim().length === 0)
  );
}

export function ValidCollaboratorsInput(data, firstFields) {
  let errors = {};

  data.clave = !isEmpty(data.clave) ? data.clave : "";
  data.names = !isEmpty(data.names) ? data.names : "";
  data.lasName = !isEmpty(data.lasName) ? data.lasName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.secondLastName = !isEmpty(data.secondLastName)
    ? data.secondLastName
    : "";

  if (data.names === "") errors.names = "Campo Obligatorio";
  if (data.clave === "") errors.clave = "Campo Obligatorio";
  if (data.lastName === "") errors.lastName = "Campo Obligatorio";
  if (data.secondLastName === "") errors.secondLastName = "Campo Obligatorio";
  if (firstFields) {
    if (data.email === "") errors.email = "Campo Obligatorio";
    if (data.password === "") errors.password = "Campo Obligatorio";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export function ValidUserInput(data) {
  let errorsUser = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (data.email === "") errorsUser.email = "Campo Obligatorio";
  if (data.password === "") errorsUser.password = "Campo Obligatorio";

  return {
    errorsUser,
    isValid: isEmpty(errorsUser)
  };
}
