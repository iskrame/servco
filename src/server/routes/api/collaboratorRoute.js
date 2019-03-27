const router = require('express').Router();
const collaboratorController = require('./../../controllers/collaboratorController');
const passport = require('passport');

//Routes
router.post('/', passport.authenticate('jwt', { session: false }), collaboratorController.createOrUpdateCollaborator);
router.get('/', passport.authenticate('jwt', { session: false }), collaboratorController.getAllCollaborators);
// router.delete('/', passport.authenticate('jwt', { session: false }), collaboratorController.deleteAll);
router.delete('/:id', passport.authenticate('jwt', { session: false }), collaboratorController.deleteById);

module.exports = router;
