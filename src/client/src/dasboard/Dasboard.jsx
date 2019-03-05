import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../actions/profileActions";
// import Spinner from "../common/Spinner";
// import { Link } from "react-router-dom";
// import ProfileActions from "./ProfileActions";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import { logoutUser } from "../actions/autActions";
import { clearCurrentProfile } from "../actions/profileActions";

class Dashboard extends Component {
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
  render() {
    // const { user } = this.props.auth;

    // const { profile, loading } = this.props.profile;

    // let dashboardContent;
    // if (profile === null || loading) {
    //   dashboardContent = <Spinner />;
    // } else {
    //   //check if login user  has profile dta
    //   if (Object.keys(profile).length > 0) {
    //     dashboardContent = (
    //       <div>
    //         <p className="lead text-muted">
    //           {" "}
    //           Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
    //         </p>
    //         <ProfileActions />
    //         {/* Todo: exp and edu*/}

    //         <div style={{ marginBottom: "60px" }}>
    //           <button
    //             onClick={this.onDeleteClick.bind(this)}
    //             className="btn btn-danger"
    //           >
    //             Delete My Account
    //           </button>
    //         </div>
    //       </div>
    //     );
    //   } else {
    //     //User is logged but dont have a profile
    //     dashboardContent = (
    //       <div>
    //         <p className="lead text-muted"> Welcome {user.name}</p>
    //         <p>You have not yet setup a profile, please add some info</p>
    //         <Link to="/create-profile" className="btn btn-lg btn-info">
    //           Create Profile
    //         </Link>
    //       </div>
    //     );
    //   }
    // }
    return (
      <div className="dashboard">
        <Header onClick={this.onLogoutClick.bind(this)} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {/* {dashboardContent} */}
            </div>
          </div>
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
