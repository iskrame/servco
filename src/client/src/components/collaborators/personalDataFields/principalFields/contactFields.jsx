import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: "100%",
    maxWidth: "100%"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 2
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "100%"
  }
});
class ContactFields extends Component {
  render() {
    const { classes, onChangePattern, state } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={4} sm={6}>
            <FormControl className={classes.formControl}>
              <TextField
                inputProps={{
                  maxLength: 6,
                  pattern: "^[0-9]*$"
                }}
                id="cel"
                name="cel"
                label="Celular"
                // value={state.cel}
                onChange={onChangePattern}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <TextField
                // value={state.names}
                id="tel"
                name="tel"
                label="Telefono de Casa"
                onChange={onChangePattern}
                fullWidth
                autoComplete="fname"
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <TextField
                // required
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
                }}
                id="other"
                name="other"
                label="Otro"
                fullWidth
                onChange={onChangePattern}
                value={state.other}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <TextField
                // required
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ@]*"
                }}
                id="personalEmail"
                name="personalEmail"
                label="Correo Personal"
                onChange={onChangePattern}
                value={state.personalEmail}
                fullWidth
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}
ContactFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactFields);
