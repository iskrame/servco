import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

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
    background: "#1e305f"
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
          <Typography
            variant="h7"
            align="center"
            color="inherit"
            className={classes.grow}
            style={{ marginBottom: "30px" }}
          >
            <small>
              Copyright &copy; {new Date().getFullYear()} SPARK TECHNOLOGIES
              (v0.1.0.0)
            </small>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
