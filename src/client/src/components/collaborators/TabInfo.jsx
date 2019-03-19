import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PersonalData from "./TabPersonalData";

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
    backgroundColor: theme.palette.background.paper,
    width: "100%"
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
      country: "",
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
    this.handleChangeComponent = this.handleChangeComponent.bind(this);
  }

  handleChange = (event, index) => {
    this.setState({ index });
  };

  handleChangeIndex = index => {
    this.setState({ index });
  };
  onChange(e) {
    const { name, value } = e.target;
    console.log(name + " : " + value);
  }
  onChangePattern(e) {
    console.log("Entro Pattern");
    const { value, name } = e.target;
    const valueTyped = e.target.validity.valid ? value : this.state[name];
    this.setState({
      [name]: valueTyped
    });
  }
  handleChangeComponent(e) {
    console.log(e.target.name);
    // const { value, name } = e.target;
    // if (!/[_\W]/.test(value)) {
    //   if (name === "clave") {
    //     if (/^[0-9]*$/.test(value)) {
    //       this.setState({ [name]: value });
    //     }
    //   } else {
    //     console.log("asdsadas");
    //     this.setState({ [name]: value });
    //   }
    // }
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" fullWidth>
          <Tabs
            value={this.state.index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            {tabs.map(option => (
              <Tab label={option.name} />
            ))}
            {/* // <Tab label="Datos Personales" />
            // <Tab label="Item Two" />
            // <Tab label="Item Three" /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <PersonalData
              onChange={this.handleChangeComponent}
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
