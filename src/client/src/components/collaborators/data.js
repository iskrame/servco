const collaborators = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    clave: 123456,
    names: "Alejandro",
    lastName: "Martinez",
    secondLastName: "Contreras"
    // bDay: "07/12/1993",
    // city: "Mexicali",
    // state: "MX-BCN",
    // country: "México",
    // gender: "Masculino",
    // civilStatus: "Soltero",
    // nationality: "Mexicana",
    // curp: "abc123456",
    // rfc: "abc1234",
    // street: "siempreviva",
    // number: "123",
    // //this is a variable for Colonia/Fraccionamiento
    // fracc: "condesa",
    // //this is a variable for Municipio
    // municipality: "mexicali",
    // addresState: "MX-BCN",
    // zipCode: "21399",
    // cel: "68623562",
    // tel: "123456",
    // other: "1234568"
    //This states are for labor data (labor tab)
    // jobs: [2],
    // monthlySalary=,
    // seniorityDate=,
    // laborLocation=,
    // otherLaborLocation=,
    // workingDayType=,
    // beneficiary=,
    // relationship=,
    // procurementRegime=, //For regimen de contratacion del trabajador
    // schema: "1",
    // otherSchema=,
    // socialSecurityNumber=,
    // infonavit=,
    // fonacot=,
    // payWay=
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    clave: 123457,
    names: "Alejandro",
    lastName: "Martinez",
    secondLastName: "Contreras"
    // bDay: "07/12/1993",
    // city: "Mexicali",
    // state: "MX-BCN",
    // country: "México",
    // gender: "Masculino",
    // civilStatus: "Soltero",
    // nationality: "Mexicana",
    // curp: "abc123456",
    // rfc: "abc1234",
    // street: "siempreviva",
    // number: "123",
    // //this is a variable for Colonia/Fraccionamiento
    // fracc: "condesa",
    // //this is a variable for Municipio
    // municipality: "mexicali",
    // addresState: "MX-BCN",
    // zipCode: "21399",
    // cel: "68623562",
    // tel: "123456",
    // other: "1234568"
    //This states are for labor data (labor tab)
    // jobs: [2],
    // monthlySalary=,
    // seniorityDate=,
    // laborLocation=,
    // otherLaborLocation=,
    // workingDayType=,
    // beneficiary=,
    // relationship=,
    // procurementRegime=, //For regimen de contratacion del trabajador
    // schema: "1",
    // otherSchema=,
    // socialSecurityNumber=,
    // infonavit=,
    // fonacot=,
    // payWay=
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    clave: 123458,
    names: "Alejandro",
    lastName: "Martinez",
    secondLastName: "Contreras"
    // bDay: "07/12/1993",
    // city: "Mexicali",
    // state: "MX-BCN",
    // country: "México",
    // gender: "Masculino",
    // civilStatus: "Soltero",
    // nationality: "Mexicana",
    // curp: "abc123456",
    // rfc: "abc1234",
    // street: "siempreviva",
    // number: "123",
    // //this is a variable for Colonia/Fraccionamiento
    // fracc: "condesa",
    // //this is a variable for Municipio
    // municipality: "mexicali",
    // addresState: "MX-BCN",
    // zipCode: "21399",
    // cel: "68623562",
    // tel: "123456",
    // other: "1234568"
    //This states are for labor data (labor tab)
    // jobs: [2],
    // monthlySalary=,
    // seniorityDate=,
    // laborLocation=,
    // otherLaborLocation=,
    // workingDayType=,
    // beneficiary=,
    // relationship=,
    // procurementRegime=, //For regimen de contratacion del trabajador
    // schema: "1",
    // otherSchema=,
    // socialSecurityNumber=,
    // infonavit=,
    // fonacot=,
    // payWay=
  }
];
export function getCollaborators() {
  return collaborators;
}
export function getCollaborator(id) {
  return collaborators.find(m => m._id === id);
}
export function saveMovie(collaborator) {
  let collaboratosInDB =
    collaborators.find(m => m._id === collaborator._id) || {};

  collaboratosInDB.clave = collaborator.clave;
  collaboratosInDB.names = collaborator.names;
  collaboratosInDB.lastName = collaborator.lastName;
  collaboratosInDB.secondLastName = collaborator.secondLastName;
  //   collaboratosInDB.bDay = collaborators.bDay;
  //   collaboratosInDB.city = collaborators.city;
  //   collaboratosInDB.state = collaborators.state;
  //   collaboratosInDB.country = collaborators.country;
  //   collaboratosInDB.gender = collaborators.gender;
  //   collaboratosInDB.civilStatus = collaborators.civilStatus;
  // colaboratorsInDB.nationality=,
  // colaboratorsInDB.curp=,
  // colaboratorsInDB.rfc=,
  // colaboratorsInDB.street=,
  // colaboratorsInDB.number=,
  // colaboratorsInDB.//this is a variable for Colonia/Fraccionamiento
  // colaboratorsInDB.fracc=,
  // colaboratorsInDB.//this is a variable for Municipio
  // colaboratorsInDB.municipality=,
  // colaboratorsInDB.addresState=,
  // colaboratorsInDB.zipCode=,
  // colaboratorsInDB.cel=,
  // colaboratorsInDB.tel=,
  // colaboratorsInDB.other=,
  // colaboratorsInDB.//This states are for labor data (labor tab)
  // colaboratorsInDB.jobs: [2],
  // colaboratorsInDB.monthlySalary=,
  // colaboratorsInDB.seniorityDate=,
  // colaboratorsInDB.laborLocation=,
  // colaboratorsInDB.otherLaborLocation=,
  // colaboratorsInDB.workingDayType=,
  // colaboratorsInDB.beneficiary=,
  // colaboratorsInDB.relationship=,
  // colaboratorsInDB.procurementRegime=, //For regimen de contratacion del trabajador
  // colaboratorsInDB.schema: "1",
  // colaboratorsInDB.otherSchema=,
  // colaboratorsInDB.socialSecurityNumber=,
  // colaboratorsInDB.infonavit=,
  // colaboratorsInDB.fonacot=,
  // colaboratorsInDB.payWay=

  if (!collaboratosInDB._id) {
    collaboratosInDB._id = Date.now().toString();
    collaborators.push(collaboratosInDB);
  }

  return collaboratosInDB;
}
