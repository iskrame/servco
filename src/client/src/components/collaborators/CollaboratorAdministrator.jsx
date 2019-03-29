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
import ValidCollaboratorsInput from "../../validation/collaborators";
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
  gender: "Masculino",
  civilStatus: "Soltero",
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
const tabs = [
  {
    name: "Información Personal"
  },
  {
    name: "Lugar de Nacimiento"
  },
  {
    name: "Dirección"
  },
  {
    name: "Datos de Contacto"
  },
  {
    name: "Datos Laborales"
  },
  {
    name: "Información Adicional (Datos Laborales)"
  },
  {
    name: "Escolaridad Superior"
  },
  // {
  //   name: "Experiencia"
  // },
  {
    name: "Datos Usuario"
  }
];
class AdminPage extends Component {
  constructor() {
    super();
    this.state = { gridData: [], errors: [], ...initialState };
    this.onChange = this.onChange.bind(this);
    this.onChangePattern = this.onChangePattern.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ view: "add" });
  }
  onClickEdit = id => {
    console.log(this.state.gridData);
    const colla = this.state.gridData;
    const data = colla.find(c => c._id === id);

    // axios
    //   .get("/api/collaborators/getByID", id)
    //   .then(res => {
    const date = moment(data.bDay).format("YYYY/MM/DD");

    console.log(date.replace("/", "-").replace("/", "-"));
    this.setState({
      view: "add",
      clave: data.clave,
      curp: data.curp,
      rfc: data.rfc,
      names: data.names,
      lastName: data.lastName,
      secondLastName: data.secondLastName,
      bDay: date.replace("/", "-").replace("/", "-"),
      email: data.email,
      password: data.password
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
      if (this.state.index < tabs.length)
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
      payWay
    } = this.state;

    const newCollaborator = {
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
      payWay
    };
    const { errors, isValid } = ValidCollaboratorsInput(newCollaborator);
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
      console.log(newCollaborator);
    } else {
      this.setState({ errors: errors, index: 0 });
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
                  <TableCell style={styles.columns.price}>Clave</TableCell>
                  <TableCell style={styles.columns.name}>Name</TableCell>
                  <TableCell style={styles.columns.edit}>Edit</TableCell>
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
          />
        </div>
      );
  }
}

export default AdminPage;
