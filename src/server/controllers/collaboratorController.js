//Model
const Collaborator = require("../models/collaborators");
//Validation
const Validation = require("../validation/collaborators");
//For encrypt the password
const bcrypt = require("bcryptjs");

//Add new or update a collaborator
exports.createOrUpdateCollaborator = async function(req, res) {
  try {
    //Required fields are not defined(March 27,2019)
    //Required fields are defined (March 28,2019)
    const { errors, isValid } = Validation.validateCollaboratorInputs(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const collaboratorFields = {};
    if (req.body.clave) collaboratorFields.clave = req.body.clave;
    if (req.body.names) collaboratorFields.names = req.body.names;
    if (req.body.lastName) collaboratorFields.lastName = req.body.lastName;
    if (req.body.secondLastName)
      collaboratorFields.secondLastName = req.body.secondLastName;
    if (req.body.bDate) collaboratorFields.bDate = req.body.bDate;
    if (req.body.city) collaboratorFields.city = req.body.city;
    if (req.body.state) collaboratorFields.state = req.body.state;
    if (req.body.country) collaboratorFields.country = req.body.country;
    if (req.body.gender) collaboratorFields.gender = req.body.gender;
    if (req.body.civilStatus)
      collaboratorFields.civilStatus = req.body.civilStatus;
    if (req.body.nationality)
      collaboratorFields.nationality = req.body.nationality;
    if (req.body.curp) collaboratorFields.curp = req.body.curp;
    if (req.body.rfc) collaboratorFields.rfc = req.body.rfc;
    collaboratorFields.address = {};
    if (req.body.street) collaboratorFields.address.street = req.body.street;
    if (req.body.number) collaboratorFields.address.number = req.body.number;
    if (req.body.fracc) collaboratorFields.address.fracc = req.body.fracc;
    if (req.body.municipality)
      collaboratorFields.address.municipality = req.body.municipality;
    if (req.body.addresState)
      collaboratorFields.address.addresState = req.body.addresState;
    if (req.body.zipCode) collaboratorFields.address.zipCode = req.body.zipCode;
    collaboratorFields.contactPhones = {};
    if (req.body.cel) collaboratorFields.contactPhones.cel = req.body.cel;
    if (req.body.tel) collaboratorFields.contactPhones.tel = req.body.tel;
    if (req.body.other) collaboratorFields.contactPhones.other = req.body.other;
    collaboratorFields.emergenciesInformation = {};
    if (req.body.chronicdiseases)
      collaboratorFields.emergenciesInformation.chronicdiseases =
        req.body.chronicdiseases;
    if (req.body.bloodType)
      collaboratorFields.emergenciesInformation.bloodType = req.body.bloodType;
    if (req.body.allergies)
      collaboratorFields.emergenciesInformation.allergies = req.body.allergies;
    if (req.body.jobs) collaboratorFields.jobs = req.body.jobs;
    if (req.body.montylySalary)
      collaboratorFields.montylySalary = req.body.montylySalary;
    if (req.body.seniorityDate)
      collaboratorFields.seniorityDate = req.body.seniorityDate;
    if (req.body.laborLocation)
      collaboratorFields.laborLocation = req.body.laborLocation;
    if (req.body.otherLaborLocation)
      collaboratorFields.otherLaborLocation = req.body.otherLaborLocation;
    if (req.body.workingDayType)
      collaboratorFields.workingDayType = req.body.workingDayType;
    if (req.body.beneficiary)
      collaboratorFields.beneficiary = req.body.beneficiary;
    if (req.body.relationship)
      collaboratorFields.relationship = req.body.relationship;
    // if (req.body.procurementRegime) collaboratorFields.procurementRegime = req.body.procurementRegime;
    // if (req.body.schema) collaboratorFields.schema = req.body.schema;
    // if (req.body.otherSchema) collaboratorFields.otherSchema = req.body.otherSchema;
    if (req.body.socialSecurityNumber)
      collaboratorFields.socialSecurityNumber = req.body.socialSecurityNumber;
    if (req.body.infonavit) collaboratorFields.infonavit = req.body.infonavit;
    if (req.body.fonacot) collaboratorFields.fonacot = req.body.fonacot;
    collaboratorFields.payWay = {};
    if (req.body.accountNumber)
      collaboratorFields.payWay.accountNumber = req.body.accountNumber;
    if (req.body.cardNumber)
      collaboratorFields.payWay.cardNumber = req.body.cardNumber;
    if (req.body.bank) collaboratorFields.payWay.bank = req.body.bank;
    if (req.body.CLABE) collaboratorFields.payWay.CLABE = req.body.CLABE;
    if (req.body.email) collaboratorFields.email = req.body.email;
    if (req.body.employeeRol)
      collaboratorFields.employeeRol = req.body.employeeRol;
    if (req.body.zkUser) collaboratorFields.zkUser = req.body.zkUser;
    if (req.body.status) collaboratorFields.status = req.body.status;

    let errorsDataDuplicated = {};
    let bErrors = false;

    //email should not be twice
    if (req.body.email) {
      await Collaborator.findOne({ email: req.body.email }).then(
        collaborator => {
          if (collaborator) {
            if (req.body.id) {
              //it means is updating
              if (collaborator.id.toString() !== req.body.id) {
                errorsDataDuplicated.email = "El correo ya está en uso";
                bErrors = true;
              }
            } else {
              errorsDataDuplicated.email = "El correo ya está en uso";
              bErrors = true;
            }
          }
        }
      );
    }

    //Clave should not be twice
    if (req.body.clave) {
      await Collaborator.findOne({ clave: req.body.clave }).then(
        collaborator => {
          if (collaborator) {
            if (req.body.id) {
              //it means is updating
              if (collaborator.id.toString() !== req.body.id) {
                errorsDataDuplicated.clave =
                  "La clave de colaborador ya está en uso";
                bErrors = true;
              }
            } else {
              errorsDataDuplicated.clave =
                "La clave de colaborador ya está en uso";
              bErrors = true;
            }
          }
        }
      );
    }

    //If there is duplicate data then return the errors
    if (bErrors) {
      return res.status(400).json(errorsDataDuplicated);
    }

    //If the password is typed, hashed it!!
    if (req.body.password) {
      var salt = await bcrypt.genSalt(10);
      var hash = await bcrypt.hash(req.body.password, salt);
      collaboratorFields.password = hash;
    }

    //Search the collaborator id, if the email exists, just update
    if (req.body.id) {
      Collaborator.findByIdAndUpdate(req.body.id, collaboratorFields, {
        new: true
      })
        .then(collaborator => {
          if (collaborator) {
            res.json(collaborator);
          } else {
            res.json({ error: "Collaborator was not found" });
          }
        })
        .catch(error => res.json({ error: "An error has ocurred " + error }));
    } else {
      new Collaborator(collaboratorFields)
        .save()
        .then(collaborator => res.json(collaborator))
        .catch(error => res.json({ error: "An error has ocurred " + error }));
    }
  } catch (e) {
    res.json(e);
  }
};

//Get the entire documents of collaborators
exports.getAllCollaborators = function(req, res) {
  Collaborator.find()
    .then(collaborators => {
      if (!collaborators) {
        res
          .status(404)
          .json({ nocollaborators: "There are no collaborators" });
      } else {
        res.json(collaborators);
      }
    })
    .catch(err =>
      res.status(404).json({ nocollaborators: "There are no collaborators" })
    );
};

exports.getActiveCollaborators = function(req, res) {
  Collaborator.find({status:true})
    .then(collaborators => {
      if (!collaborators) {
        res
          .status(404)
          .json({ nocollaborators: "There are no collaborators" });
      } else {
        res.json(collaborators);
      }
    })
    .catch(err =>
      res.status(404).json({ nocollaborators: "There are no collaborators" })
    );
};

exports.getInactiveCollaborators = function(req, res) {
  Collaborator.find({status:false})
    .then(collaborators => {
      if (!collaborators) {
        res
          .status(404)
          .json({ nocollaborators: "There are no collaborators" });
      } else {
        res.json(collaborators);
      }
    })
    .catch(err =>
      res.status(404).json({ nocollaborators: "There are no collaborators" })
    );
};

// //Delete all collaborators
exports.deleteAll = function(req, res) {
  Collaborator.deleteMany()
    .then(collaborators => {
      if (!collaborators) {
        res
          .status(404)
          .json({ nocollaborators: "There are no collaborators" });
      } else {
        res.json(collaborators);
      }
    })
    .catch(err =>
      res.status(404).json({ nocollaborators: "There are no collaborators" })
    );
};

//Delete a specified collaborator by its id. THE COLLABORATOR WON'T BE DELETED, JUST SHUT DOWN THE ACTIVE FLAG
exports.deleteById = function(req, res) {
  status = false;
  console.log("eliminando...")
  Collaborator.findByIdAndUpdate(
    req.params.id,
    { status: status },
    { new: true }
  )
    .then(collaborator => {
      if (collaborator) {
        res.json(collaborator);
      } else {
        res.json({ error: "Collaborator was not found" });
      }
    })
    .catch(error => res.json({ error: "An error has ocurred " + error }));
};

//Select a specific collaborator by its id
exports.getCollaborator = function(req, res) {
  Collaborator.findById(req.params.id)
    .then(collaborator => {
      if (collaborator) {
        res.json(collaborator);
      } else {
        res.json({ error: "Collaborator was not found" });
      }
    })
    .catch(error => res.json({ error: "An error has ocurred " + error }));
};

//Select a specific collaborator by its id
exports.getCollaboratorsByStatus = function(req, res) {
  //0 - All status
  //1 - Actives
  //2 - Inactives
  var statusForSearching = [];
  switch (parseInt(req.params.status)) {
    case 0:
      statusForSearching = [true, false];
      break;
    // case 1:
    //     statusForSearching = [true];
    //     break;
    case 2:
      statusForSearching = [false];
      break;
    default:
      statusForSearching = [true];
  }
  //Search the collaborators with and IN clause
  Collaborator.find({ status: { $in: statusForSearching } })
    .then(collaborators => {
      if (collaborators) {
        res.json(collaborators);
      } else {
        res.json({ error: "Collaborators were not found" });
      }
    })
    .catch(error => res.json({ error: "An error has ocurred " + error }));
};

//Add education data
exports.createEducation = function(req, res) {
  education = {};

  if (req.body.school) education.school = req.body.school;
  if (req.body.career) education.career = req.body.career;
  if (req.body.startDate) education.startDate = req.body.startDate;
  if (req.body.endDate) education.endDate = req.body.endDate;
  if (req.body.current) education.current = req.body.education;
  if (req.body.additionalInformation)
    education.additionalInformation = req.body.additionalInformation;
  Collaborator.findById(req.params.id)
    .then(collaborator => {
      if (collaborator) {
        collaborator.education.push(education);
        collaborator.save().then(collaborator => res.json(collaborator));
      } else {
        res.json({ error: "Collaborator was not found" });
      }
    })
    .catch(error => res.json({ error: "An error has ocurred " + error }));
};

exports.deleteAllEducationByCollaborator = function(req, res) {
  Collaborator.findById(req.params.id)
    .then(collaborator => {
      if (collaborator) {
        collaborator.education.splice(0, collaborator.education.length);
        collaborator.save().then(collaborator => res.json(collaborator));
      } else {
        res.json({ error: "Collaborator was not found" });
      }
    })
    .catch(error => res.json({ error: "An error has ocurred " + error }));
};
