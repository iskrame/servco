const router = require('express').Router();
const dashboard = require('./../../controllers/dashboardController');
const passport = require('passport');

router.get('/',
  passport.authenticate("jwt",{session:false}),
  dashboard.dashboard
);

module.exports = router;

