const express = require("express");
const router = express.Router();
const User = require("../../controllers/userController");

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", User.getUserLogin);

// @route   POST api/users/RecoverPassword
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/sendemail", User.sendingEMail);

// @route   POST api/users/usersregister
// @desc    creates a new user
// @access  private only for specific users
router.post("/usersregister", User.usersRegister);

// @route   POST api/users/recoverpassword
// @desc    creates a new user
// @access  private only for specific users
router.post("/recoverpassword", User.recoverPassword);

// @route   GET api/users/Userinfo
// @desc    creates a new user
// @access  private only for specific users
router.get("/current/:token", User.getUserInfo);

module.exports = router;
