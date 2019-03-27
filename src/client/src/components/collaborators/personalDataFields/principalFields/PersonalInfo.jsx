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
                label={this.props.leng.key}
                value={state.clave}
                onChange={onChangePattern}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField id="curp" name="curp" label="CURP" fullWidth />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField id="rfc" name="rfc" label="RFC" fullWidth />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                value={state.names}
                id="name"
                name="names"
                label={this.props.leng.name}
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
                label={this.props.leng.lastName}
                fullWidth
                onChange={onChangePattern}
                value={state.lastName}
              />
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
                name={this.props.leng.secondLastName}
                label={this.props.leng.secondLastName}
                onChange={onChangePattern}
                value={state.secondLastName}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                type="date"
                name="bDay"
                label={this.props.leng.bDay}
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
              <InputLabel>{this.props.leng.civilStatus}</InputLabel>
              <Select
                id="civilStatus"
                name="civilStatus"
                value={state.civilStatus}
                onChange={onChange}
              >
                <MenuItem value="Soltero">{this.props.leng.single}</MenuItem>
                <MenuItem value="Casado">{this.props.leng.married}</MenuItem>
                <MenuItem value="Divorciado">{this.props.leng.divorced}</MenuItem>
                <MenuItem value="Viudo">{this.props.leng.widower}</MenuItem>
                <MenuItem value="UnionLibre">{this.props.leng.freeUnion}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel>{this.props.leng.gender}</InputLabel>
              <Select
                id="gender"
                name="gender"
                value={state.gender}
                onChange={onChange}
              >
                <MenuItem value="Masculino">{this.props.leng.male}</MenuItem>
                <MenuItem value="Femenino">{this.props.leng.female}</MenuItem>
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
