const Validator = require("validator");
const isEmpty = require("./is-empty");
const language = require("../src/translate/serverTranslate");

module.exports = function validateUsersRegisterInput(data) {
  let errors = {};
  console.log(data.password);
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = language().mailRequired;
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = language().mailFormat;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = language().passRequired;
  }

  if (!Validator.isLength(data.password, { min: 8, max: 50 })) {
    errors.password = language().passLength;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
