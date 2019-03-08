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
function RecoverForm(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <img src={img} alt="..." />
        <br />
        <h4>Recuperación de contraseña</h4>
        <small>
          * la contraseña debera tener <strong>mínimo 8</strong> y{" "}
          <strong>maximo 25 </strong>
          caracteres{" "}
        </small>
        {/* <form className={classes.form} onSubmit={props.onSubmit}> */}
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">Agregue nueva contraseña</InputLabel>
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
            Repita la nueva contraseña
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
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          style={{ background: "#941a1f", textTransform: "none" }}
        >
          Cambiar Contraseña
        </Button>
        {/* </form> */}
      </Paper>
    </main>
  );
}

RecoverForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecoverForm);
