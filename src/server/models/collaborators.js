const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema

const CollaboratorSchema = new Schema({
    clave: {
        type: Number,
        required: true
    },
    names: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    secondLastName: {
        type: String
    },
    bDay: {
        type: Date
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
    address: {
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
    },
    contactPhones: {
        cel: {
            type: String
        },
        tel: {
            type: String
        },
        other: {
            type: String
        }
    },
    emergenciesInformation: {
        chronicdiseases: {
            type: String
        },
        bloodType: {
            type: String
        },
        allergies: {
            type: String
        }
    },
    jobs: [],
    monthlySalary: {
        type: Number
    },
    seniorityDate: {
        type: Date,
        default: Date.now
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
    // procurementRegime: {
    //     type: String
    // },
    // _schema: {
    //     type: String
    // },
    // otherSchema: {
    //     type: String
    // },
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
        accountNumber: {
            type: String
        },
        cardNumber: {
            type: String
        },
        bank: {
            type: String
        },
        CLABE: {
            type: String
        }
    },
    education: [
        {
            school: {
                type: String
            },
            career: {
                type: String
            },
            startDate: {
                type: Date
            },
            endDate: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            additionalInformation: {
                type: String,
                max: 250
            }
        }
    ],
    email: {
        type: String
    },
    password: {
        type: String
    },
    employeeRol: {
        type: String
    },
    zkUser: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = collaborator = mongoose.model('collaborators', CollaboratorSchema);
