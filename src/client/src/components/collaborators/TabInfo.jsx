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
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)"
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 3,
    borderRadius: "5px",
    boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)",
    background: "#1e305f"
  },
  buttonBack: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
    borderRadius: "5px",
    boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)"
  },
  buttonCancel: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
    borderRadius: "5px",
    boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)",
    background: "#941a1f",
    color: "white",
    hover: { background: "red" }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 5,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up(600 + theme.spacing.unit * 4 * 2)]: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit,
      padding: theme.spacing.unit * 5,
      margin: "15px"
    },
    borderRadius: "5px",
    boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)",
    height: "350px"
  },
  appBar: {
    backgroundColor: "#941a1f",
    borderRadius: "5px",
    boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)"
  }
});

class FullWidthTabs extends React.Component {
  componentDidMount() {
    this.props.state.tabs = tabs.length;
  }
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={this.props.state.index}
            onChange={this.props.handleChange}
            indicatorColor="primary"
            style={{
              indicatorColor: "#1e305f",
              backgroundColor: "#941a1f",
              borderRadius: "5px",
              boxShadow: "3px 3px 5px 3px rgba(0,0,0,.2)"
            }}
            variant="fullWidth"
          >
            {tabs.map((option, index) => (
              <Tab key={index} label={option.name} />
            ))}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.props.state.index}
          onChangeIndex={this.props.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Paper className={classes.paper}>
              <PersonalDataFields
                onChange={this.props.onChange}
                onChangePattern={this.props.onChangePattern}
                state={this.props.state}
              />
            </Paper>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Paper className={classes.paper}>
              <BornFields
                onChange={this.props.onChange}
                onChangePattern={this.props.onChangePattern}
                state={this.props.state}
              />
              <div />
            </Paper>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Paper className={classes.paper}>
              <AddressFields
                onChange={this.props.onChange}
                onChangePattern={this.props.onChangePattern}
                state={this.props.state}
              />
            </Paper>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Paper className={classes.paper}>
              <TabLaborData
                onChange={this.onChange}
                onChangePattern={this.onChangePattern}
                fields={this.props.state}
              />
            </Paper>
          </TabContainer>

          <TabContainer dir={theme.direction}>Item Three</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttonCancel}
            onClick={this.props.handleCancel}
          >
            Cancelar
          </Button>
          {this.props.state.index !== 0 && (
            <Button
              className={classes.buttonBack}
              onClick={this.props.handleBack}
            >
              Atras
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={
              this.props.state.index === tabs.length - 1
                ? this.props.onsubmit
                : this.props.handleNext
            }
            className={classes.button}
          >
            {this.props.state.index === tabs.length - 1
              ? "Guardar"
              : "Siguiente"}
          </Button>
        </div>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
