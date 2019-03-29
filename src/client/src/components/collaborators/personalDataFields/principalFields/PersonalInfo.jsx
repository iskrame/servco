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
class PersonalInfo extends Component {
  render() {
    const { classes, onChangePattern, state, onChange } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={4} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                inputProps={{
                  maxLength: 6,
                  pattern: "^[0-9]*$"
                }}
                id="clave"
                name="clave"
                label="Clave"
                value={state.clave}
                onChange={onChangePattern}
                fullWidth
              />
              {this.props.state.errors.clave && (
                <div style={{ color: "red" }}>
                  {this.props.state.errors.clave}
                </div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="curp"
                name="curp"
                value={state.curp}
                onChange={onChangePattern}
                label="CURP"
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="rfc"
                name="rfc"
                value={state.rfc}
                onChange={onChangePattern}
                label="RFC"
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                value={state.names}
                id="name"
                name="names"
                label="Nombre(s)"
                onChange={onChangePattern}
                fullWidth
                autoComplete="fname"
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
                }}
              />
              {this.props.state.errors.names && (
                <div style={{ color: "red" }}>
                  {this.props.state.errors.names}
                </div>
              )}
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
                id="lastName"
                name="lastName"
                label="Apellido Paterno"
                fullWidth
                onChange={onChangePattern}
                value={state.lastName}
              />
              {this.props.state.errors.lastName && (
                <div style={{ color: "red" }}>
                  {this.props.state.errors.lastName}
                </div>
              )}
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
                id="secondLastName"
                name="secondLastName"
                label="Apellido Materno"
                onChange={onChangePattern}
                value={state.secondLastName}
                fullWidth
              />
              {this.props.state.errors.secondLastName && (
                <div style={{ color: "red" }}>
                  {this.props.state.errors.secondLastName}
                </div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                type="date"
                name="bDay"
                label="Fecha de Nacimiento"
                value={state.bDay}
                onChange={onChangePattern}
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel>Estado Civil</InputLabel>
              <Select
                id="civilStatus"
                name="civilStatus"
                value={state.civilStatus}
                onChange={onChange}
              >
                <MenuItem value="Soltero">Soltero</MenuItem>
                <MenuItem value="Casado">Casado</MenuItem>
                <MenuItem value="Divorciado">Divorciado</MenuItem>
                <MenuItem value="Viudo">Viudo</MenuItem>
                <MenuItem value="UnionLibre">Union Libre</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel>Sexo</InputLabel>
              <Select
                id="gender"
                name="gender"
                value={state.gender}
                onChange={onChange}
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}
PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInfo);
