import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../actions/profileActions";
// import Spinner from "../common/Spinner";
// import { Link } from "react-router-dom";
// import ProfileActions from "./ProfileActions";

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccessTime from '@material-ui/icons/AccessTime';
import img from "../img/logoSPARK132.png";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Settings from '@material-ui/icons/Settings';
import Person from '@material-ui/icons/Person';
import People from '@material-ui/icons/People';
import TableChart from '@material-ui/icons/TableChart';


import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import { logoutUser } from "../actions/autActions";
import { clearCurrentProfile } from "../actions/profileActions";
import { DashboardContentWrapper } from '../dashboard/DashboardContentWrapper';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#7a797a"
  },
  menuItem: {
      color: 'white'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    background: "#ffffff"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  imgLogo: {
    width: '50%',
    height: '60%',
    marginRight: '10%'
  },
  avatar: {
    margin: 10,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
});



class Dashboard extends Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
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
  render() {

    const { classes, theme } = this.props;
    const { open } = this.state;
    // const { user } = this.props.auth;

    //const { profile, loading } = this.props.profile;

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

        <div className="container">
          
        <CssBaseline />
        
        <Header onClick={this.onLogoutClick.bind(this)} toggleMenu={this.handleDrawerOpen.bind(this)} open={open}/>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <img src={img} alt="..." className={classes.imgLogo}/>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <Grid container justify="center" alignItems="center">
            <Avatar alt="Usuario" className={classes.avatar}>A</Avatar>
            <Typography variant="h8" className={classes.menuItem} noWrap>
              Alejandro Martinez 
            </Typography>
          </Grid>
          <Divider />
            <List>
                <ListItem key="Menu Principal">
                  <ListItemText classes={{primary: classes.menuItem}} primary="Menu Principal" />
                </ListItem>
            </List>
          <Divider />
          <List>
              <ListItem button key="Dashboard">
                <ListItemIcon className={classes.menuItem}><TableChart /></ListItemIcon>
                <ListItemText classes={{primary: classes.menuItem}} primary="Dashboard" />
              </ListItem>
              <ListItem button key="Perfil">
                <ListItemIcon className={classes.menuItem}><Person /></ListItemIcon>
                <ListItemText primary="Perfil" classes={{primary: classes.menuItem}}/>
              </ListItem>
          </List>
          <Divider />
          <List >
              <ListItem button key="Colaboradores">
                <ListItemIcon className={classes.menuItem}><People /></ListItemIcon>
                <ListItemText classes={{primary: classes.menuItem}} primary="Colaboradores" />
              </ListItem>
              <ListItem button key="Reportes">
                <ListItemIcon className={classes.menuItem}><AccessTime /></ListItemIcon>
                <ListItemText classes={{primary: classes.menuItem}} primary="Reportes"/>
              </ListItem>
              <ListItem button key="Configuraciones">
                <ListItemIcon className={classes.menuItem}><Settings /></ListItemIcon>
                <ListItemText classes={{primary: classes.menuItem}} primary="Configuraciones"/>
              </ListItem>
          </List>
        </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            
            <DashboardContentWrapper />
            
          </main>

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
