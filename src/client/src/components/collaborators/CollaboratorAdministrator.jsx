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
import { Edit, Delete } from "@material-ui/icons";
import { Paper } from "@material-ui/core";
import { clientLenguaje } from "../../translate/clientTranslate";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
// function getInitialState() {
import {
  ValidCollaboratorsInput,
  ValidUserInput
} from "../../validation/collaborators";

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
      modalStatus: false,
      toDelete: 0,
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
    console.log(id);
    axios({
      url: "/api/collaborators/" + id,
      method: "get"
    })
      .then(res => {
        data = res.data;
        const date = data.bDate.split("T")[0];
        this.setState({
          view: "add",
          id: data._id,
          clave: data.clave,
          curp: data.curp,
          rfc: data.rfc,
          names: data.names,
          lastName: data.lastName,
          secondLastName: data.secondLastName,
          city: data.city,
          bDay: date,
          state: data.state,
          country: data.country,
          gender: data.gender,
          civilStatus: data.civilStatus,
          nationality: data.nationality,
          street: data.address.street,
          number: data.address.number,
          fracc: data.address.fracc,
          municipality: data.address.municipality,
          addresState: data.address.addresState,
          zipCode: data.address.zipCode,
          cel: data.contactPhones.cel,
          tel: data.contactPhones.tel,
          other: data.contactPhones.other,
          personalEmail: data.contactPhones.personalEmail,

          email: data.email,
          password: data.password
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

  onClickDelete = (e) => {

    axios({
      url: "/api/collaborators/" + this.state.toDelete,
      method: "delete"
    })
    .then(res => {
      this.setState({
        modalStatus: false,
        toDelete: 0
      });
      console.log("eliminado");
      this.getCollaborators();
    })
    .catch(err => {
      console.log(err);
    })
  };

  openModal = id => {
    //console.log(id);
    this.setState({
      modalStatus: true,
      toDelete: id
    });
  };

  closeModal = (e) => {
    this.setState({
      modalStatus: false,
      toDelete: 0
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
      deleteButton: {
        background: "#941a1f",
        color: "white"
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
        },
        delete: {
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
          cursor: "pointer"
        },
        delete: {
          cursor: "pointer"
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
                  <TableCell style={styles.columns.delete}>
                    {lenguaje.delete}
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
                        style={styles.rows.edit}
                        onClick={() => this.onClickEdit(item._id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Delete
                        style={styles.rows.delete}
                        onClick={() => this.openModal(item._id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Dialog
              open={this.state.modalStatus}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{lenguaje.deleteCollabModalTitle}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {lenguaje.deleteCollabModalContent}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.closeModal} color="default" variant="contained">
                  {lenguaje.cancel}
                </Button>
                <Button onClick={this.onClickDelete} color="primary" variant="contained" autoFocus style={styles.deleteButton}>
                  {lenguaje.delete}
                </Button>
              </DialogActions>
            </Dialog>
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
