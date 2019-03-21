import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TabInfo from "../components/collaborators/TabInfo";
import { DashboardContentWrapper } from "../dashboard/DashboardContentWrapper";
const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#7a797a"
  },
  menuItem: {
    color: "white"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    background: "#ffffff",
    backgroundColor: "#efefef"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    margin: 0
  },
  imgLogo: {
    width: "50%",
    height: "60%",
    marginRight: "10%"
  },
  avatar: {
    margin: 10
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});
class Pages extends Component {
  render() {
    const { classes, open, item } = this.props;
    let dashboardContent;
    switch (item) {
      case 0:
        dashboardContent = (
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open
            })}
          >
            <div className={classes.drawerHeader} />

            <DashboardContentWrapper />
          </main>
        );

        break;
      case 1:
        dashboardContent = (
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open
            })}
            style={{ width: "100%" }}
          >
            <div className={classes.drawerHeader} />
            <h1>Perfil</h1>
          </main>
        );
        break;
      case 2:
        dashboardContent = (
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open
            })}
            style={{ width: "100%" }}
          >
            <div className={classes.drawerHeader} />
            <h1>Colaboradores</h1>
            <TabInfo />
          </main>
        );
        break;
      case 3:
        dashboardContent = (
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open
            })}
            style={{ width: "100%" }}
          >
            <div className={classes.drawerHeader} />
            <h1>Reportes</h1>
          </main>
        );
        break;
      case 4:
        dashboardContent = (
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open
            })}
            style={{ width: "100%" }}
          >
            <div className={classes.drawerHeader} />
            <h1>Configuracion</h1>
          </main>
        );
        break;
      default:
        break;
    }

    return dashboardContent;
  }
}
Pages.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Pages);
