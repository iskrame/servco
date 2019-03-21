import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#ffffff",
    color: "black"
  }
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ height: "35px" }}
      >
        <Toolbar>
          <h4
            align="center"
            color="inherit"
            className={classes.grow}
            style={{ marginBottom: "30px" }}
          >
            <small>
              Copyright &copy; {new Date().getFullYear()} SPARK TECHNOLOGIES
              (v0.1.0.0)
            </small>
          </h4>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
