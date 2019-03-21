import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PersonalData from "./personalDataFields/TabPersonalData";

const tabs = [
  {
    name: "Datos Personales"
  },
  {
    name: "Datos Laborales"
  },
  {
    name: "Educacion/Experiencia"
  },
  {
    name: "Datos Usuario"
  }
];
// const tabcontainer = [{ tab: <PersonalData /> }, { tab: "Item2" }];
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
    // width: "100%"
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
      other: ""
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
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
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
