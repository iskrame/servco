import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../actions/profileActions";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import img from "../img/logoSPARK132.png";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import { logoutUser } from "../actions/autActions";
import { clearCurrentProfile } from "../actions/profileActions";
import { primaryMenus } from "./data";

import { MenuItem } from "@material-ui/core";
import Pages from "./Links";

import LeftDrawer from "./LeftDrawer";

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

class Dashboard extends Component {
  state = {
    open: true,
    item: 0
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.props.getCurrentProfile();
    // if (sessionStorage.getItem("item"))
    // this.setState({ item: sessionStorage.getItem("item") });
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  onListItemClick = item => {
    // sessionStorage.setItem("item", item);
    this.setState({ item });
  };
  render() {
    let { open } = this.state;
    const innerStyles = {
      header: {
        paddingLeft: open ? drawerWidth : 0
      },
      container: {
        margin: "20px",
        paddingLeft: open ? drawerWidth : 0
      }
    };

    const { classes, theme } = this.props;

    return (
      <div>
        <div style={innerStyles.container}>
          <CssBaseline />

          <Header
            onClick={this.onLogoutClick.bind(this)}
            toggleMenu={this.handleDrawerOpen.bind(this)}
            open={open}
          />
          <LeftDrawer
            handleDrawerClose={this.handleDrawerClose.bind(this)}
            onclick={this.onListItemClick}
            open={open}
          />
          <Pages open={open} item={this.state.item} />
        </div>
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount, clearCurrentProfile, logoutUser }
)(withStyles(styles, { withTheme: true })(Dashboard));
