import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import img from "../../img/logoSPARK132.png";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import RecoverPassword from "./Poppop";
import classNames from "classnames";
import {clientLenguaje} from "../../translate/clientTranslate";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  link: {
    margin: theme.spacing.unit,
    cursor: "pointer"
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit
  },
  dense: {
    // marginTop: 19
  }
});
function SignIn(props) {
  const { classes } = props;
  const leng = clientLenguaje(0);

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <img src={img} alt="..." />
        <form className={classes.form} onSubmit={props.onSubmit}>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">{leng.user}</InputLabel>
            <Input
              inputProps={{
                maxLength: 50
              }}
              id="email"
              name="email"
              className={classNames(classes.textField, classes.dense)}
              autoComplete="email"
              autoFocus
              onChange={props.onChange}
              fullWidth
            />
            <span style={{ color: "red" }}>{props.errors.email}</span>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">{leng.password}</InputLabel>
            <Input
              inputProps={{
                maxLength: 25
              }}
              label={leng.password}
              className={classNames(classes.textField, classes.dense)}
              name="password"
              type="password"
              id="password"
              value={props.value}
              autoComplete="current-password"
              onChange={props.onChange}
              fullWidth
            />
            <span style={{ color: "red" }}>{props.errors.password}</span>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ background: "#941a1f", textTransform: "none" }}
          >
            {leng.signIn}
          </Button>
        </form>
        <form onSubmit={props.onSubmitEmail}>
          <RecoverPassword
            onClick={props.onClick}
            onClose={props.onClose}
            show={props.show}
            onChange={props.onChange}
            errors={props.errors}
            onCancel={props.onCancel}
          />
        </form>
        <br />
        <br />
        <small>
          Copyright &copy; {new Date().getFullYear()} SPARK TECHNOLOGIES
          (v0.1.0.0)
        </small>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
