import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import TabInfo from "./TabInfo";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Edit from "@material-ui/icons/Edit";
import { Paper } from "@material-ui/core";
import { clientLenguaje } from "../../translate/clientTranslate";
// function getInitialState() {
import {
  ValidCollaboratorsInput,
  ValidUserInput
} from "../../validation/collaborators";
import moment from "moment";
const initialState = {
  view: "administrator",
  index: 0,
  clave: "",
  names: "",
  lastName: "",
  secondLastName: "",
  bDay: "",
  city: "",
  state: "",
  country: "México",
  gender: "0",
  civilStatus: "0",
  nationality: "Mexicana",
  curp: "",
  rfc: "",
  street: "",
  number: "",
  //this is a variable for Colonia/Fraccionamiento
  fracc: "",
  //this is a variable for Municipio
  municipality: "",
  addresState: "",
  zipCode: "",
  cel: "",
  tel: "",
  other: "",
  personalEmail: "",
  //This states are for labor data (labor tab)
  jobs: [2],
  monthlySalary: "",
  seniorityDate: "",
  laborLocation: "",
  otherLaborLocation: "",
  workingDayType: "",
  beneficiary: "",
  relationship: "",
  procurementRegime: "", //For regimen de contratacion del trabajador
  schema: "1",
  otherSchema: "",
  socialSecurityNumber: "",
  infonavit: "",
  fonacot: "",
  payWay: "",
  tabs: "",
  email: "",
  password: "",
  status: "",
  rol: "",
  zKWebUser: ""
};

// return initialState;
// }
export function changelengTabInfo(x) {
  let leng;
  if (x === 0) {
    leng = clientLenguaje(0);
  } else {
    leng = clientLenguaje(1);
  }
  return leng;
}
class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      gridData: [],
      errors: [],
      errorsUser: [],
      ...initialState
    };
    this.onChange = this.onChange.bind(this);
    this.onChangePattern = this.onChangePattern.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ view: "add" });
  }
  onClickEdit = id => {
    let data;
    axios({
      url: "/api/collaborators",
      method: "get",
      params: id
    })
      .then(res => {
        data = res.data;
        const date = res.data[0].bDate.split("T");
        this.setState({
          view: "add",
          id: data[0]._id,
          clave: data[0].clave,
          curp: data[0].curp,
          rfc: data[0].rfc,
          names: data[0].names,
          lastName: data[0].lastName,
          secondLastName: data[0].secondLastName,
          city: data[0].city,
          bDay: date[0],
          state: data[0].state,
          country: data[0].country,
          gender: data[0].gender,
          civilStatus: data[0].civilStatus,
          nationality: data[0].nationality,
          street: data[0].address.street,
          number: data[0].address.number,
          fracc: data[0].address.fracc,
          municipality: data[0].address.municipality,
          addresState: data[0].address.addresState,
          zipCode: data[0].address.zipCode,
          cel: data[0].contactPhones.cel,
          tel: data[0].contactPhones.tel,
          other: data[0].contactPhones.other,
          personalEmail: data[0].contactPhones.personalEmail,

          email: data[0].email,
          password: data[0].password
        });
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.setState({
          contentLoaded: true
        });
      });
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  handleChangeIndex = index => {
    this.setState({ index });
  };
  onChange(e) {
    const { name, value } = e.target;
    if (name === "country" && value !== "México") {
      this.setState({ nationality: "" });
    }
    this.setState({ [name]: value });
  }
  onChangePattern(e) {
    const { value, name } = e.target;
    const valueTyped = e.target.validity.valid ? value : this.state[name];
    this.setState({
      [name]: valueTyped
    });
    // if (name === "names") {
    const { errors, isValid } = ValidCollaboratorsInput(this.state);

    if (isValid) this.setState({ errors });
    // }
  }
  handleNext = () => {
    const validData = {
      clave: this.state.clave,
      names: this.state.names,
      lastName: this.state.lastName,
      secondLastName: this.state.secondLastName
    };
    const { errors, isValid } = ValidCollaboratorsInput(validData);
    if (isValid) {
      if (this.state.index < 7)
        this.setState(state => ({ index: state.index + 1 }));
    }
    this.setState({ errors });
  };
  handleBack = () => {
    this.setState(state => ({ index: state.index - 1 }));
  };
  handleCancel = () => {
    this.setState(initialState);
    this.getCollaborators();
  };
  getCollaborators() {
    axios({
      url: "/api/collaborators",
      method: "get"
    })
      .then(res => {
        this.setState({
          gridData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.setState({
          contentLoaded: true
        });
      });
  }
  componentDidMount = () => {
    this.getCollaborators();
  };
  onsubmit = e => {
    const {
      id,
      clave,
      names,
      lastName,
      secondLastName,
      bDay,
      city,
      state,
      country,
      gender,
      civilStatus,
      nationality,
      curp,
      rfc,
      street,
      number,
      //this is a variable for Colonia/Fraccionamiento
      fracc,
      //this is a variable for Municipio
      municipality,
      addresState,
      zipCode,
      cel,
      tel,
      other,
      personalEmail,
      //This states are for labor data (labor tab)
      jobs,
      monthlySalary,
      seniorityDate,
      laborLocation,
      otherLaborLocation,
      workingDayType,
      beneficiary,
      relationship,
      procurementRegime, //For regimen de contratacion del trabajador
      schema,
      otherSchema,
      socialSecurityNumber,
      infonavit,
      fonacot,
      payWay,
      email,
      password
    } = this.state;

    // const bDate = moment(bDay).format("YYYY-MM-DD");
    const bDate = bDay;

    const newCollaborator = {
      id,
      clave,
      names,
      lastName,
      secondLastName,
      bDate,
      city,
      state,
      country,
      gender,
      civilStatus,
      nationality,
      curp,
      rfc,
      street,
      number,
      //this is a variable for Colonia/Fraccionamiento
      fracc,
      //this is a variable for Municipio
      municipality,
      addresState,
      zipCode,
      cel,
      tel,
      other,
      personalEmail,
      //This states are for labor data (labor tab)
      jobs,
      monthlySalary,
      seniorityDate,
      laborLocation,
      otherLaborLocation,
      workingDayType,
      beneficiary,
      relationship,
      procurementRegime, //For regimen de contratacion del trabajador
      schema,
      otherSchema,
      socialSecurityNumber,
      infonavit,
      fonacot,
      payWay,
      email,
      password
    };
    console.log("date input: " + newCollaborator.bDate);
    const { errorsUser, isValid } = ValidUserInput(newCollaborator);
    if (isValid) {
      axios
        .post("/api/collaborators/", newCollaborator)
        .then(res => {
          this.setState(initialState);
          this.getCollaborators();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({ errorsUser: errorsUser });
    }
  };

  render() {
    const styles = {
      floatingActionButton: {
        margin: 5,
        top: "auto",
        right: 20,
        bottom: 50,
        left: "auto",
        position: "fixed",
        backgroundColor: "#1e305f",
        color: "white"
      },
      editButton: {
        width: "10%",
        heigth: "10%",
        color: "e0e0e0"
      },
      columns: {
        id: {
          width: "25%",
          color: "white",
          fontSize: 14
          // display: "none"
        },
        name: {
          width: "35%",
          color: "white",
          fontSize: 14
        },
        price: {
          width: "25%",
          color: "white",
          fontSize: 14
        },
        edit: {
          width: "15%",
          color: "white",
          fontSize: 14
        }
      },
      rows: {
        id: {
          width: "10%"
          // display: "none"
        },
        name: {
          width: "20%"
        },
        price: {
          width: "20%"
        },
        category: {
          width: "20%"
        },
        edit: {
          width: "10%"
        }
      }
    };
    let lenguaje = clientLenguaje(this.props.leng);
    const tabs = [
      {
        name: lenguaje.personalData
      },
      {
        name: lenguaje.origin
      },
      {
        name: lenguaje.addres
      },
      {
        name: lenguaje.contactInfo
      },
      {
        name: lenguaje.laborData
      },
      {
        name: lenguaje.addData
      },
      {
        name: lenguaje.education
      },
      {
        name: lenguaje.userData
      }
    ];

    if (this.state.view === "administrator") {
      return (
        <div>
          <Paper
            style={{
              borderRadius: "5px",
              boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)"
            }}
          >
            <Table>
              <TableHead>
                <TableRow
                  style={{
                    backgroundColor: "#941a1f",
                    borderRadius: "5px",
                    boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)"
                  }}
                >
                  <TableCell style={styles.columns.id}>ID</TableCell>
                  <TableCell style={styles.columns.price}>
                    {lenguaje.key}
                  </TableCell>
                  <TableCell style={styles.columns.name}>
                    {lenguaje.name}
                  </TableCell>
                  <TableCell style={styles.columns.edit}>
                    {lenguaje.edit}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.gridData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      style={styles.rows.id}
                      component="th"
                      scope="row"
                    >
                      <h6> {item._id}</h6>
                    </TableCell>
                    <TableCell style={styles.rows.price}>
                      <h6>{item.clave}</h6>
                    </TableCell>
                    <TableCell style={styles.rows.name}>
                      <h6>
                        {item.names +
                          " " +
                          item.lastName +
                          " " +
                          item.secondLastName}{" "}
                      </h6>
                    </TableCell>
                    <TableCell>
                      <Edit
                        style={{ cursor: "pointer" }}
                        onClick={() => this.onClickEdit(item._id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Fab
            style={styles.floatingActionButton}
            onClick={this.onClick.bind(this)}
          >
            <AddIcon />
          </Fab>
        </div>
      );
    } else
      return (
        <div>
          <TabInfo
            state={this.state}
            onChange={this.onChange}
            onChangePattern={this.onChangePattern}
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            onsubmit={this.onsubmit}
            handleCancel={this.handleCancel}
            tabs={tabs}
            leng={lenguaje}
          />
        </div>
      );
  }
}

export default AdminPage;
