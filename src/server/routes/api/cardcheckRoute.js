const router = require('express').Router();
const Cardcheck = require('./../../controllers/cardcheckController');
const passport = require("passport");

// @route GET api/cardcheck/
// @desc returns all punches made in some certain period
router.get('/',
  passport.authenticate("jwt",{session:false}),
  Cardcheck.punchtimes
);

// @route GET api/cardcheck/timespent
// @desc gets the timespent of a certain period
router.get('/timespent',
  passport.authenticate("jwt", {session:false}),
  Cardcheck.timespent
);

module.exports = router;