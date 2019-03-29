import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../actions/profileActions";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import { logoutUser } from "../actions/autActions";
import { clearCurrentProfile } from "../actions/profileActions";
import Pages from "./Links";
import LeftDrawer from "./LeftDrawer";

const drawerWidth = 240;

class Dashboard extends Component {
  state = {
    open: true,
    item: "",
    name: ""
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    console.log("Cerrar");
    this.setState({ open: false });
  };
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  onDeleteClick(e) {
    this.props.deleteAccount();
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  onListItemClick = (name, item) => {
    this.setState({ item, name });
  };
  render() {
    let { open } = this.state;
    const innerStyles = {
      header: {
        paddingLeft: open ? drawerWidth : 0
      },
      container: {
        margin: "20px",
        paddingLeft: open ? drawerWidth : 50,
        borderRadius: "50px"
      }
    };
    const { user } = this.props.auth;
    console.log(user);
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
            name={this.state.name}
            index={this.state.item}
            onclick={this.onListItemClick}
            handleDrawerOpen={this.handleDrawerOpen.bind(this)}
            open={open}
            onLogoutClick={this.onLogoutClick.bind(this)}
          />

          <Pages open={open} item={this.state.item} />
        </div>
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {
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
)(Dashboard);
