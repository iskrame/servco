import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

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
class UserDataFields extends Component {
  render() {
    const { classes, onChangePattern, state, onChange } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={4} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="email"
                name="email"
                label="Correo Institucional"
                value={state.email}
                onChange={onChangePattern}
                fullWidth
              />
              {this.props.state.errorsUser.email && (
                <div style={{ color: "red" }}>
                  {this.props.state.errorsUser.email}
                </div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                value={state.password}
                type="password"
                id="password"
                name="password"
                label="Password"
                onChange={onChangePattern}
                fullWidth
                // autoComplete="fname"
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9]*"
                }}
              />
              {this.props.state.errorsUser.password && (
                <div style={{ color: "red" }}>
                  {this.props.state.errorsUser.password}
                </div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel>Estado del Usuario</InputLabel>
              <Select
                id="status"
                name="status"
                value={state.status}
                onChange={onChange}
              >
                <MenuItem value="0">Activo</MenuItem>
                <MenuItem value="1">Inactivo</MenuItem>
              </Select>
            </FormControl>
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel>Rol</InputLabel>
              <Select id="rol" name="rol" value={state.rol} onChange={onChange}>
                <MenuItem value="0">Activo</MenuItem>
                <MenuItem value="1">Inactivo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                // required
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
                }}
                id="zKWebUser"
                name="zKWebUser"
                label="Usuario ZKWeb"
                fullWidth
                onChange={onChangePattern}
                value={state.zKWebUser}
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}
UserDataFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserDataFields);
