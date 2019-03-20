import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";

import { countries, statesFromMexico } from "../../../utils/countrys";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class PersonalData extends Component {
  render() {
    const { classes, state, onChangePattern } = this.props;
    let stateFrom = "";
    if (state.country === "México") {
      console.log("Estados de Mexico");
      stateFrom = (
        <TextField
          id="state"
          select
          label="Estado"
          name="state"
          // disabled="true"
          style={{
            marginLeft: 12,
            marginRight: 12,
            width: "100%"
          }}
          // className={classes.textField}
          value={state.state}
          onChange={this.props.onChange}
          SelectProps={{
            MenuProps: {
              width: "100%"
            }
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {statesFromMexico.map(option => (
            <MenuItem key={option.code} value={option.code}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      );
    } else {
      stateFrom = (
        <TextField id="state" name="state" label="Estado" fullWidth />
      );
    }
    return (
      <React.Fragment>
        {/* <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={3}>
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
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <TextField
              value={state.names}
              id="name"
              name="names"
              label="Nombre(s)"
              onChange={onChangePattern}
              fullWidth
              autoComplete="fname"
              inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              // required
              inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
              id="lastName"
              name="lastName"
              label="Apellido Paterno"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              // required
              inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
              id="secondlastName"
              name="secondlastName"
              label="Apellido Materno"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <TextField
              // required
              id="bdayDate"
              name="bdayDate"
              label="Fecha de Nacimiento"
              fullWidth
              style={{ marginTop: "15px" }}
              // autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="gender"
              select
              name="gender"
              label="Sexo"
              style={{
                marginLeft: 12,
                marginRight: 12,
                width: "100%"
              }}
              // className={classes.textField}
              value={state.gender}
              onChange={this.props.onChange}
              SelectProps={{
                MenuProps: {
                  width: "100%"
                }
              }}
              margin="normal"
            >
              <MenuItem value="Masculino">Masculino</MenuItem>
              <MenuItem value="Femenino">Femenino</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="city"
              name="city"
              label="Ciudad"
              fullWidth
              style={{ marginTop: "15px" }}
              // autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            {stateFrom}
            {/* <TextField id="state" name="state" label="Estado" fullWidth /> */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="standard-select-currency"
              select
              label="País"
              name="country"
              disabled="true"
              style={{
                marginLeft: 12,
                marginRight: 12,
                width: "100%"
              }}
              // className={classes.textField}
              value={state.country}
              onChange={this.props.onChange}
              SelectProps={{
                MenuProps: {
                  width: "100%"
                }
              }}
              margin="normal"
            >
              {countries.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="civilStatus"
              name="civilStatus"
              label="Estatdo Civil"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nacionality"
              name="nacionality"
              label="Nacionalidad"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="curp" name="curp" label="CURP" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="rfc" name="rfc" label="RFC" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="street" name="street" label="Calle" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField id="number" name="number" label="Número" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="fracc" name="fracc" label="Colonia" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="municipality"
              name="municipality"
              label="Municipio"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="addresState"
              name="addresState"
              label="Estado"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="zipCode"
              name="zipCode"
              label="Codigo Postal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="cel" name="cel" label="Celular" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="tel" name="tel" label="Casa" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="other" name="other" label="Otro" fullWidth />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
PersonalData.propTypes = {
  classes: PropTypes.object.isRequired
};
export default PersonalData;
