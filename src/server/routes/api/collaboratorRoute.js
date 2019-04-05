const router = require("express").Router();
const collaboratorController = require("./../../controllers/collaboratorController");
const passport = require("passport");

//Routes
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.createOrUpdateCollaborator
);
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.getAllCollaborators
);
router.get(
  "/active",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.getActiveCollaborators
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.getCollaborator
);
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.deleteAll
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.deleteById
);
router.get(
  "/byStatus/:status",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.getCollaboratorsByStatus
);
router.post(
  "/education/:id",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.createEducation
);
router.delete(
  "/education/:id",
  passport.authenticate("jwt", { session: false }),
  collaboratorController.deleteAllEducationByCollaborator
);

module.exports = router;
