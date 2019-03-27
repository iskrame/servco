const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema

const CollaboratorSchema = new Schema({
    clave: {
        type: String
    },
    names: {
        type: String
    },
    lastName: {
        type: String
    },
    secondLastName: {
        type: String
    },
    bDay: {
        type: Date,
        default: Date.now
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    gender: {
        type: String
    },
    civilStatus: {
        type: String
    },
    nationality: {
        type: String
    },
    curp: {
        type: String
    },
    rfc: {
        type: String
    },
    street: {
        type: String
    },
    number: {
        type: String
    },
    fracc: {
        type: String
    },
    municipality: {
        type: String
    },
    addresState: {
        type: String
    },
    zipCode: {
        type: Number
    },
    cel: {
        type: String
    },
    tel: {
        type: String
    },
    other: {
        type: String
    },
    jobs: [],
    monthlySalary: {
        type: String
    },
    seniorityDate: {
        type: String
    },
    laborLocation: {
        type: String
    },
    otherLaborLocation: {
        type: String
    },
    workingDayType: {
        type: String
    },
    beneficiary: {
        type: String
    },
    relationship: {
        type: String
    },
    procurementRegime: {
        type: String
    },
    _schema: {
        type: String
    },
    otherSchema: {
        type: String
    },
    socialSecurityNumber: {
        type: String
    },
    infonavit: {
        type: String
    },
    fonacot: {
        type: String
    },
    payWay: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = collaborator = mongoose.model('collaborators', CollaboratorSchema);
