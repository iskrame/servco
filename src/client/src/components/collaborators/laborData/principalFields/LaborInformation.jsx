import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { statesFromMexico } from "../../../../utils/countrys";
import { Jobs } from "../../../../utils/Jobs.json";
import { WorkingDayTypeData } from "../../../../utils/WorkingDayTypeData.json";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//Styles
const styles = theme => ({
  root: {
    width: "100%"
  },
  formControl: {
    margin: theme.spacing.unit,
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
    marginTop: theme.spacing.unit * 3
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "100%"
  }
});
//END Styles

class LaborInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Jobs,
      WorkingDayTypeData,
      disabledOtherLocation: true
    };
  }

  onHandleChange(e) {
    if (e.target.value.toLowerCase() === "otro") {
      this.setState({
        disabledOtherLocation: false
      });
    } else {
      this.setState({
        disabledOtherLocation: true
      });
      this.props.fields.otherLaborLocation = "";
    }
    this.props.onChange(e);
  }
  render() {
    const { onChange, onChangePattern, fields, classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <span className={classes.heading}>
                <strong>Información Laboral</strong>
              </span>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <Grid container spacing={24}>
                <Grid item xs={10} sm={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple">Puesto</InputLabel>
                    <Select
                      multiple
                      value={fields.jobs}
                      onChange={onChange}
                      input={<Input id="select-multiple" />}
                      name="jobs"
                    >
                      {this.state.Jobs.sort(function(a, b) {
                        var nameA = a.description.toLowerCase(),
                          nameB = b.description.toLowerCase();
                        if (nameA < nameB)
                          //sort string ascending
                          return -1;
                        if (nameA > nameB) return 1;
                        return 0; //default return value (no sorting)
                      }).map(job => (
                        <MenuItem key={job.description} value={job.id}>
                          {job.description}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={10} sm={4}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      inputProps={{
                        pattern: "^[0-9]+([.][0-9]*)?$"
                      }}
                      name="monthlySalary"
                      label="Sueldo mensual"
                      value={fields.monthlySalary}
                      onChange={onChangePattern}
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={10} sm={4}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      type="date"
                      name="seniorityDate"
                      label="Fecha de antigüedad"
                      value={fields.seniorityDate}
                      onChange={onChangePattern}
                      InputLabelProps={{
                        shrink: true
                      }}
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={10} sm={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Ubicación Laboral</InputLabel>
                    <Select
                      value={fields.laborLocation}
                      onChange={this.onHandleChange.bind(this)}
                      name="laborLocation"
                    >
                      {statesFromMexico.map(state => (
                        <MenuItem key={state.name} value={state.code}>
                          {state.name}
                        </MenuItem>
                      ))}
                      <MenuItem key="Otro" value="Otro">
                        Otro
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={10} sm={4}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="otherLaborLocation"
                      label="Otra Ubicación Laboral"
                      value={fields.otherLaborLocation}
                      inputProps={{
                        pattern: "[a-zA-Z_ ]*",
                        disabled: this.state.disabledOtherLocation
                          ? "disabled"
                          : ""
                      }}
                      onChange={onChangePattern}
                      fullWidth
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={10} sm={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple">
                      Tipo de Jornada
                    </InputLabel>
                    <Select
                      value={fields.workingDayType}
                      onChange={onChange}
                      input={<Input id="select-multiple" />}
                      name="workingDayType"
                    >
                      {this.state.WorkingDayTypeData.map(workingType => (
                        <MenuItem
                          key={workingType.description}
                          value={workingType.id}
                        >
                          {workingType.description}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={10} sm={4}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="beneficiary"
                      label="Beneficiario"
                      value={fields.beneficiary}
                      onChange={onChangePattern}
                      inputProps={{ pattern: "[a-zA-Z_ ]*" }}
                      fullWidth
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={10} sm={4}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="relationship"
                      label="Parentesco del beneficiario"
                      value={fields.relationship}
                      onChange={onChangePattern}
                      inputProps={{ pattern: "[a-zA-Z_ ]*" }}
                      fullWidth
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

LaborInformation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LaborInformation);
