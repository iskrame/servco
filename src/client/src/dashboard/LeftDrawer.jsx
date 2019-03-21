import React, { Component } from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import img from "../img/logoSPARK132.png";
import Avatar from "@material-ui/core/Avatar";
import { primaryMenus } from "./data";
import { withStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";

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
    background: "#1e305f",
    border: "none"
  },
  menuItem: {
    color: "white",
    fontSize: 20,
    marginBottom: "15px"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    background: "#ffffff"
    // backgroundColor: "#efefef"
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
    margin: 10,
    height: "100px",
    width: "100px",
    fontSize: 40
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});
class LeftDrawer extends Component {
  render() {
    const { handleDrawerClose, open, classes, theme, onclick } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <img src={img} alt="..." className={classes.imgLogo} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <center>
          <Avatar alt="Usuario" className={classes.avatar}>
            A
          </Avatar>
        </center>

        <h4 className={classes.menuItem} noWrap>
          Alejandro Martinez
        </h4>

        <Divider style={{ marginBottom: "15px", background: "white" }} />
        {primaryMenus.menus.map((menu, index) => (
          <MenuItem
            key={index}
            style={{ color: "#f8f9fa", fontSize: 14 }}
            onClick={() => onclick(index)}
          >
            <ListItemIcon className={classes.menuItem}>
              {menu.icon}
            </ListItemIcon>
            {menu.text}
          </MenuItem>
        ))}
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LeftDrawer);
