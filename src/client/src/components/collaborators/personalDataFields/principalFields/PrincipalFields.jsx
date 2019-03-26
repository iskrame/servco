import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { countries, statesFromMexico } from "../../../../utils/countrys";
import {clientLenguaje} from "../../../../translate/clientTranslate";



const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: '15px',
    bold: true
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "100%"
  }
});

export function changelengPF(x) {
  
  
}

let leng = clientLenguaje(0);
class PersonalDataFields extends Component {
  render() {

    const { classes, onChange, onChangePattern, state } = this.props;
    let stateFrom = "";
    if (state.country === "México") {
      stateFrom = (
        <TextField
          id="state"
          select
          label="Estado"
          name="state"
          style={{
            marginLeft: 5,
            marginRight: 12,
            width: "98%"
          }}
          value={state.state}
          onChange={onChange}
          SelectProps={{
            MenuProps: {
              width: "100%"
            }
          }}
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
        <TextField
          id="state"
          name="state"
          label="Estado"
          fullWidth
          style={{ marginTop: "15px" }}
        />
      );
    }
    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <span className={classes.heading}>
                <strong>{leng.personalInfo}</strong>
              </span>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={1}>
                  <TextField
                    inputProps={{
                      maxLength: 6,
                      pattern: "^[0-9]*$"
                    }}
                    id="clave"
                    name="clave"
                    label={leng.key}
                    value={state.clave}
                    onChange={onChangePattern}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    value={state.names}
                    id="name"
                    name="names"
                    label={leng.name}
                    onChange={onChangePattern}
                    fullWidth
                    autoComplete="fname"
                    inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    // required
                    inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
                    id="lastName"
                    name="lastName"
                    label={leng.lastName}
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    // required
                    inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
                    id="secondlastName"
                    name="secondlastName"
                    label={leng.secondLastName}
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    // required
                    id="bdayDate"
                    name="bdayDate"
                    label={leng.bday}
                    fullWidth
                    style={{ marginTop: "15px" }}
                  // autoComplete="billing address-line1"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="civilStatus"
                    name="civilStatus"
                    label={leng.civilStatus}
                    fullWidth
                    style={{ marginTop: "16px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="gender"
                    select
                    name="gender"
                    label={leng.gender}
                    style={{
                      marginLeft: -2,
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
                    <MenuItem value="Masculino">{leng.male}</MenuItem>
                    <MenuItem value="Femenino">{leng.female}</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="city"
                    name="city"
                    label={leng.city}
                    fullWidth
                    style={{ marginTop: "15px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  {stateFrom}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="standard-select-currency"
                    select
                    label={leng.country}
                    name="country"
                    // disabled="true"
                    style={{
                      marginLeft: 5,
                      marginRight: 12,
                      width: "98%"
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

                <Grid item xs={12} sm={4}>
                  <TextField
                    id="nacionality"
                    name="nacionality"
                    label={leng.nacionality}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="curp" name="curp" label="CURP" fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="rfc" name="rfc" label="RFC" fullWidth />
                </Grid>
              </Grid>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <span className={classes.heading}>
                <strong>{leng.contactInfo}</strong>
              </span>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="street"
                    name="street"
                    label={leng.street}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="number"
                    name="number"
                    label={leng.number}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="fracc"
                    name="fracc"
                    label={leng.fracc}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="municipality"
                    name="municipality"
                    label={leng.municipality}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="addresState"
                    name="addresState"
                    label={leng.addresState}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="zipCode"
                    name="zipCode"
                    label={leng.zipCode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="cel" name="cel" label={leng.cel} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="tel"
                    name="tel"
                    label={leng.tel}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="other" name="other" label={leng.other} fullWidth />
                </Grid>
              </Grid>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
PersonalDataFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalDataFields);
