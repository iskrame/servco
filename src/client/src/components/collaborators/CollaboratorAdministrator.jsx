import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import TabInfo from "./TabInfo";
// import Icon from "@material-ui/core/Icon";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Edit from "@material-ui/icons/Edit";
// import Collaborators from './data'
import { getCollaborators, getCollaborator, saveMovie } from "./data";
import { Paper } from "@material-ui/core";
// function getInitialState() {
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
  tabs: ""
};
// return initialState;
// }
class AdminPage extends Component {
  constructor() {
    super();
    this.state = { colla: [], ...initialState };
    this.onChange = this.onChange.bind(this);
    this.onChangePattern = this.onChangePattern.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ view: "add" });
  }
  onClickEdit = id => {
    const collaborator = getCollaborator(id);
    console.log(collaborator);
    this.setState({
      view: "add",
      clave: collaborator.clave,
      names: collaborator.names,
      lastName: collaborator.lastName,
      secondLastName: collaborator.secondLastName
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
    console.log(name + value);
    if (name === "country" && value !== "México") {
      this.setState({ nationality: "" });
    }
    this.setState({ [name]: value });
  }
  onChangePattern(e) {
    const { value, name } = e.target;
    console.log(name);
    const valueTyped = e.target.validity.valid ? value : this.state[name];
    console.log(valueTyped);
    this.setState({
      [name]: valueTyped
    });
  }
  handleNext = () => {
    if (this.state.index < 6)
      this.setState(state => ({ index: state.index + 1 }));
  };
  handleBack = () => {
    this.setState(state => ({ index: state.index - 1 }));
  };
  handleCancel = () => {
    this.setState(initialState);
  };
  componentDidMount() {
    this.setState({ colla: getCollaborators() });
  }
  onsubmit = e => {
    // console.log(this.state);
    saveMovie(this.state);
    // console.log(colla);
    // this.setState({ colla });
    this.setState(initialState);
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
          fontSize: 14,
          display: "none"
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
          width: "10%",
          display: "none"
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
                {this.state.colla.map((item, index) => (
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
          />
        </div>
      );
  }
}

export default AdminPage;
