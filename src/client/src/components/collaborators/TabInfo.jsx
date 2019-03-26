import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonalData from "./personalDataFields/TabPersonalData";
import TabLaborData from './laborData/TabLaborData';
import {clientLenguaje} from "../../translate/clientTranslate";

let leng = clientLenguaje();
let personalData = leng.personalData;
let labroData = leng.laborData;
let eduExp = leng.education;
let userData = leng.userData;
const tabs = [
  {
    name: personalData
  },
  {
    name: labroData
  },
  {
    name: eduExp
  },
  {
    name: userData
  }
];
function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
});

class FullWidthTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      clave: "",
      names: "",
      lastName: "",
      secondLastName: "",
      bDay: "",
      city: "",
      state: "",
      country: "México",
      gender: "",
      civilStatus: "",
      nationality: "",
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
      monthlySalary: '',
      seniorityDate: '',
      laborLocation: '',
      otherLaborLocation: '',
      workingDayType: '',
      beneficiary: '',
      relationship: '',
      procurementRegime: '', //For regimen de contratacion del trabajador
      schema: '1',
      otherSchema: '',
      socialSecurityNumber: '',
      infonavit: '',
      fonacot: '',
      payWay: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onChangePattern = this.onChangePattern.bind(this);
  }

  handleChange = (event, index) => {
    this.setState({ index });
  };

  handleChangeIndex = index => {
    this.setState({ index });
  };
  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  onChangePattern(e) {
    const { value, name } = e.target;
    const valueTyped = e.target.validity.valid ? value : this.state[name];
    this.setState({
      [name]: valueTyped
    });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            {tabs.map((option, index) => (
              <Tab key={index} label={option.name} />
            ))}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <PersonalData
              onChange={this.onChange}
              onChangePattern={this.onChangePattern}
              state={this.state}
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <TabLaborData
              onChange={this.onChange}
              onChangePattern={this.onChangePattern}
              fields={this.state}
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
