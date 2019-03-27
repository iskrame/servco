//Model
const Collaborator = require('../models/collaborators');
//Validation
// const ValidatedRegisterInput = require('../validation/collaborator');

//Add new or update a collaborator
exports.createOrUpdateCollaborator = function (req, res) {
    //Required fields are not defined
    // const { errors, isValid } = validatedRegisterInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }
    const collaboratorFields = {};
    if (req.body.clave) collaboratorFields.clave = req.body.clave;
    if (req.body.names) collaboratorFields.names = req.body.names;
    if (req.body.lastName) collaboratorFields.lastName = req.body.lastName;
    if (req.body.secondLastName) collaboratorFields.secondLastName = req.body.secondLastName;
    if (req.body.bDay) collaboratorFields.bDay = req.body.bDay;
    if (req.body.city) collaboratorFields.city = req.body.city;
    if (req.body.state) collaboratorFields.state = req.body.state;
    if (req.body.country) collaboratorFields.country = req.body.country;
    if (req.body.gender) collaboratorFields.gender = req.body.gender;
    if (req.body.civilStatus) collaboratorFields.civilStatus = req.body.civilStatus;
    if (req.body.nationality) collaboratorFields.nationality = req.body.nationality;
    if (req.body.curp) collaboratorFields.curp = req.body.curp;
    if (req.body.rcf) collaboratorFields.rcf = req.body.rcf;
    if (req.body.street) collaboratorFields.street = req.body.street;
    if (req.body.number) collaboratorFields.number = req.body.number;
    if (req.body.fracc) collaboratorFields.fracc = req.body.fracc;
    if (req.body.municipality) collaboratorFields.municipality = req.body.municipality;
    if (req.body.addresState) collaboratorFields.addresState = req.body.addresState;
    if (req.body.zipCode) collaboratorFields.zipCode = req.body.zipCode;
    if (req.body.cel) collaboratorFields.cel = req.body.cel;
    if (req.body.tel) collaboratorFields.tel = req.body.tel;
    if (req.body.other) collaboratorFields.other = req.body.other;
    if (req.body.jobs) collaboratorFields.jobs = req.body.jobs;
    if (req.body.montylySalary) collaboratorFields.montylySalary = req.body.montylySalary;
    if (req.body.seniorityDate) collaboratorFields.seniorityDate = req.body.seniorityDate;
    if (req.body.laborLocation) collaboratorFields.laborLocation = req.body.laborLocation;
    if (req.body.otherLaborLocation) collaboratorFields.otherLaborLocation = req.body.otherLaborLocation;
    if (req.body.workingDayType) collaboratorFields.workingDayType = req.body.workingDayType;
    if (req.body.beneficiary) collaboratorFields.beneficiary = req.body.beneficiary;
    if (req.body.relationship) collaboratorFields.relationship = req.body.relationship;
    if (req.body.procurementRegime) collaboratorFields.procurementRegime = req.body.procurementRegime;
    if (req.body.schema) collaboratorFields.schema = req.body.schema;
    if (req.body.otherSchema) collaboratorFields.otherSchema = req.body.otherSchema;
    if (req.body.socialSecurityNumber) collaboratorFields.socialSecurityNumber = req.body.socialSecurityNumber;
    if (req.body.infonavit) collaboratorFields.infonavit = req.body.infonavit;
    if (req.body.fonacot) collaboratorFields.fonacot = req.body.fonacot;
    if (req.body.payWay) collaboratorFields.payWay = req.body.payWay;
    if (req.body.email) collaboratorFields.email = req.body.email;

    //Search the collaborator email, if the email exists, just update
    console.log()
    Collaborator.findOne({ email: req.body.email })
        .then(collaborator => {
            if (collaborator) {
                Collaborator.findOneAndUpdate(
                    { email: req.body.email },
                    { $set: collaboratorFields },
                    { new: true }
                ).then(collaborator => {
                    res.json(collaborator)
                })
            } else {
                new Collaborator(collaboratorFields).save().then(collaborator => res.json(collaborator));
            }
        })
        .catch(error => res.json({ error: 'An error has ocurred ' + error }));
}

//Get the entire documents of collaborators
exports.getAllCollaborators = function (req, res) {
    Collaborator.find()
        .then(collaborators => {
            if (!collaborators) {
                res.status(404).json({ nocollaborators: 'There are not collaborators' })
            } else {
                res.json(collaborators)
            }
        })
        .catch(err => res.status(404).json({ nocollaborators: 'There are not collaborators' }));
}

// //Delete all collaborators
// exports.deleteAll = function (req, res) {
//     Collaborator.deleteMany()
//         .then(collaborators => {
//             if (!collaborators) {
//                 res.status(404).json({ nocollaborators: 'There are not collaborators' })
//             } else {
//                 res.json(collaborators)
//             }
//         })
//         .catch(err => res.status(404).json({ nocollaborators: 'There are not collaborators' }));

// }

//Delete a specified collaborator by its id
exports.deleteById = function (req, res) {
    Collaborator.findByIdAndRemove({ _id: req.params.id })
        .then(collaborator => {
            if (!collaborator) {
                res.status(404).json({ nocollaborator: 'The collaborator was not found' })
            } else {
                res.json(collaborator)
            }
        })
        .catch(err => res.status(404).json({ nocollaborator: 'The collaborator was not found' }));

}