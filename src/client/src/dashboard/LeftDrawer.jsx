import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ChangeLenguaje } from "./data";
import { MenuItem } from "@material-ui/core";
import img from "../img/logoSPARK132.png";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Settings from "@material-ui/icons/Settings";
import Menu from "@material-ui/core/Menu";
import {clientLenguaje} from "../translate/clientTranslate";
import {changelengPF} from "../components/collaborators/personalDataFields/principalFields/PrincipalFields"

let leng = clientLenguaje(1);
const drawerWidth = 240;
let primaryMenus = ChangeLenguaje(1);

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "white",
    color: "black",
    height: "70px"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    border: "none",
    background: "#1e305f"
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 2 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 7 + 1
    },
    background: "#1e305f"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    background: "white",
    height: "70px"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    color: "white"
  },
  menuItem: {
    color: "white",
    fontSize: 20
  },
  imgLogo: {
    width: "50%",
    height: "60%",
    marginRight: "10%"
  },
  avatar: {
    margin: 10,
    height: "100px",
    width: "100px",
    fontSize: 40
  },
  avatarClose: {
    margin: "5px",
    height: "45px",
    width: "45px",
    fontSize: 15,
    marginBottom: "5px"
  },
  userText: {
    color: "white"
  },
  userTextClose: {
    display: "none"
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: "-15px"
  }
});

class MiniDrawer extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    lenguajes: 0
  };
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  changeleng = x =>{
  this.setState({lenguajes:x})
  leng = clientLenguaje(this.state.lenguajes);
  primaryMenus = ChangeLenguaje(this.state.lenguajes);
  changelengPF(x);
 }
  render() {
    const { classes, theme } = this.props;
    const {
      handleDrawerClose,
      open,
      onclick,
      handleDrawerOpen,
      onLogoutClick
    } = this.props;
    let openMenu = Boolean(this.state.anchorEl);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <h4 color="inherit" style={{ marginTop: "15px" }}>
              {leng.serviceCol}
            </h4>
            <section className={classes.rightToolbar}>
            <Button onClick={() =>this.changeleng(this.state.lenguajes === 0 ? 1 : 0)}>{leng.language}</Button>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={openMenu}
                onClose={this.handleClose}
              >
              <MenuItem onClick={() => onclick(1)}>{leng.profile}</MenuItem>
              <MenuItem onClick={onLogoutClick}>{leng.logOut}</MenuItem>
              </Menu>
              <Button
                color="inherit"
                aria-label="Configuracion"
                onClick={this.handleMenu}
                style={{ marginTop: "10px" }}
              >
                <Settings />
              </Button>
            </section>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <img src={img} width="75%" style={{ padding: "5px" }} alt="..." />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <center>
            <Avatar
              alt="Usuario"
              className={classNames({
                [classes.avatar]: open,
                [classes.avatarClose]: !open
              })}
            >
              A
            </Avatar>
          </center>
          <h4
            className={classNames({
              [classes.userText]: open,
              [classes.userTextClose]: !open
            })}
          >
            Alejandro Martinez
          </h4>

          <Divider style={{ marginBottom: "15px", background: "white" }} />
          <List
            style={{
              color: "white",
              fontSize: 10,
              cursor: "pointer"
            }}
          >
            {primaryMenus.menus.map((menu, index) => (
              <ListItem
                button
                key={index}
                className={classes.menuItem}
                onClick={() => onclick(index)}
              >
                <ListItemIcon className={classes.menuItem}>
                  {menu.icon}
                </ListItemIcon>

                {menu.text}
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Drawer from "@material-ui/core/Drawer";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import img from "../img/logoSPARK132.png";
// import Avatar from "@material-ui/core/Avatar";
// import { primaryMenus } from "./data";
// import { withStyles } from "@material-ui/core/styles";
// import { MenuItem } from "@material-ui/core";

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     display: "flex"
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     background: "#1e305f",
//     border: "none"
//   },
//   menuItem: {
//     color: "white",
//     fontSize: 20,
//     marginBottom: "15px"
//   },
//   drawerHeader: {
//     display: "flex",
//     alignItems: "center",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
//     background: "#ffffff"
//     // backgroundColor: "#efefef"
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     margin: 0
//   },
//   imgLogo: {
//     width: "50%",
//     height: "60%",
//     marginRight: "10%"
//   },
//   avatar: {
//     margin: 10,
//     height: "100px",
//     width: "100px",
//     fontSize: 40
//   },
//   contentShift: {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen
//     }),
//     marginLeft: 0
//   }
// });
// class LeftDrawer extends Component {
//   render() {
//     const { handleDrawerClose, open, classes, theme, onclick } = this.props;
//     return (
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <img src={img} alt="..." className={classes.imgLogo} />
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </div>
//         <center>
//           <Avatar alt="Usuario" className={classes.avatar}>
//             A
//           </Avatar>
//         </center>

//         <Typography variant="h6" className={classes.menuItem} noWrap>
//           Alejandro Martinez
//         </Typography>

//         <Divider style={{ marginBottom: "15px", background: "white" }} />
//         {primaryMenus.menus.map((menu, index) => (
//           <MenuItem
//             key={index}
//             style={{ color: "#f8f9fa", fontSize: 14 }}
//             onClick={() => onclick(index)}
//           >
//             <ListItemIcon className={classes.menuItem}>
//               {menu.icon}
//             </ListItemIcon>
//             {menu.text}
//           </MenuItem>
//         ))}
//       </Drawer>
//     );
//   }
// }

// LeftDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// };

// export default withStyles(styles, { withTheme: true })(LeftDrawer);
