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
  }
});
const leng = clientLenguaje();

function RecoverForm(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <img src={img} alt="..." />
        <br />
        <h4>{leng.passwordRecovery}</h4>

        <form className={classes.form} onSubmit={props.onSubmit}>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">{leng.addNewPass}</InputLabel>
            <Input
              inputProps={{
                maxLength: 25
              }}
              id="password"
              type="password"
              name="password"
              autoFocus
              value={props.value.password}
              onChange={props.onChange}
            />

            {/* <span style={{ color: "red" }}>{props.errors.password}</span> */}
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="passwordConfirm">
              {leng.repitPass}
            </InputLabel>
            <Input
              inputProps={{
                maxLength: 25
              }}
              name="passwordConfirm"
              type="password"
              id="passwordConfirm"
              value={props.value.passwordConfirm}
              onChange={props.onChange}
            />
            <span style={{ color: "red" }}>{props.errors.passwordConfirm}</span>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ background: "#941a1f", textTransform: "none" }}
          >
            {leng.changepass}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{
              background: "#941a1f",
              textTransform: "none",
              marginLeft: 6
            }}
            onClick={props.onClose}
          >
            {leng.cancel}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

RecoverForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecoverForm);
