import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { countries, statesFromMexico } from "../../../../utils/countrys";
const styles = theme => ({
  root: {
    width: "100%"
  },
  formControl: {
    marginTop: theme.spacing.unit,
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
class BornFields extends Component {
  render() {
    const { classes, onChangePattern, state, onChange } = this.props;
    let stateFrom = "";
    if (state.country === "México") {
      stateFrom = (
        <div>
          <InputLabel>Estado</InputLabel>
          <Select
            id="state"
            name="state"
            value={state.state}
            onChange={onChange}
            fullWidth
          >
            {statesFromMexico.map(option => (
              <MenuItem key={option.code} value={option.code}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      );
    } else {
      stateFrom = (
        <TextField
          id="state"
          name="state"
          label="Estado"
          value={state.state}
          inputProps={{
            maxLength: 100,
            pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
          }}
          fullWidth
        />
      );
    }

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <TextField
                id="city"
                name="city"
                label="Ciudad"
                value={state.city}
                onChange={onChangePattern}
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
                }}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              {stateFrom}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel>País</InputLabel>
              <Select
                id="country"
                label="País"
                name="country"
                disabled={true}
                fullWidth
                value={state.country}
                onChange={onChange}
              >
                {countries.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <TextField
                id="nationality"
                name="nationality"
                label="Nacionalidad"
                value={state.nationality}
                onChange={onChangePattern}
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
                }}
                fullWidth
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}
BornFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BornFields);
