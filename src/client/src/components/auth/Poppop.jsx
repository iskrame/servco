import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import PopPop from "react-poppop";
import Link from "@material-ui/core/Link";

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
function RecoverPassword(props) {
  const { classes } = props;

  return (
    <main>
      <CssBaseline />
      <Link
        onClick={props.onClick}
        variant="body1"
        style={{ color: "#1e305f" }}
        className={classes.link}
      >
        Recuperar Contraseña
      </Link>
      <PopPop
        position="centerCenter"
        open={props.show}
        closeBtn={true}
        closeOnEsc={true}
        onClose={props.onClose}
        closeOnOverlay={true}
      >
        <form onSubmit={props.onSubmitEmail}>
          <h4>Recuperar Contraseña</h4>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="recoverEmail">Email Address</InputLabel>
            <Input
              id="recoverEmail"
              name="recoverEmail"
              autoComplete="recoverEmail"
              autoFocus
              onChange={props.onChange}
            />
            <span style={{ color: "red" }}>{props.errors.recoverEmail}</span>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ background: "#941a1f" }}
          >
            Enviar
          </Button>
        </form>
      </PopPop>
    </main>
  );
}

RecoverPassword.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecoverPassword);
