import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";

import countries from "./../../utils/countrys";

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
  // state = {
  //   clave: "",
  //   country: "México",
  //   names: "",
  //   lastName: "",
  //   secondLastName: "",
  //   bdayDate: "",
  //   gender: ""
  // };
  componentDidMount() {
    this.setState({ country: "México" });
  }

  render() {
    const { classes, state, onChangePattern } = this.props;
    return (
      <React.Fragment>
        {/* <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <TextField
              // required

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
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <TextField
              // required
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
          <Grid item xs={3}>
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
          <Grid item xs={3}>
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
              onChange={this.props.handleChangeComponent}
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
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              label="Ciudad"
              fullWidth
              // autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="standard-select-currency"
              select
              label="País"
              disabled="true"
              style={{
                marginLeft: 12,
                marginRight: 12,
                width: "100%"
              }}
              // className={classes.textField}
              value={state.country}
              onChange={this.props.handleChange}
              SelectProps={{
                MenuProps: {
                  width: "100%"
                }
              }}
              helperText="Please select your currency"
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
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
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
