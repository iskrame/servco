import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { statesFromMexico } from "../../../../utils/countrys";
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
class AddressInfo extends Component {
  render() {
    const { classes, onChangePattern, state, onChange } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="street"
                name="street"
                label={this.props.leng.street}
                fullWidth
                value={state.street}
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
                }}
                onChange={onChangePattern}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="number"
                name="number"
                label={this.props.leng.number}
                fullWidth
                value={state.number}
                inputProps={{
                  maxLength: 100,
                  pattern: "^[0-9]*$"
                }}
                onChange={onChangePattern}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="fracc"
                name="fracc"
                value={state.fracc}
                label={this.props.leng.fracc}
                fullWidth
                inputProps={{
                  maxLength: 100,
                  pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*"
                }}
                onChange={onChangePattern}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="zipCode"
                name="zipCode"
                label={this.props.leng.zipCode}
                value={state.zipCode}
                fullWidth
                inputProps={{
                  maxLength: 100,
                  pattern: "^[0-9]*$"
                }}
                onChange={onChangePattern}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                id="municipality"
                name="municipality"
                value={state.municipality}
                label={this.props.leng.municipality}
                fullWidth
                onChange={onChangePattern}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel>{this.props.leng.addresState}</InputLabel>
              <Select
                id="addresState"
                name="addresState"
                value={state.addresState}
                onChange={onChange}
                fullWidth
              >
                {statesFromMexico.map(option => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}
AddressInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressInfo);
