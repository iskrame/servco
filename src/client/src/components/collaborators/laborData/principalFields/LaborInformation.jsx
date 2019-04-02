import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
        <Grid container spacing={24}>
          <Grid item xs={10} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple">
                {this.props.leng.job}
              </InputLabel>
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
                label={this.props.leng.monthlySalary}
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
                label={this.props.leng.dateOfSeniority}
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
              <InputLabel>{this.props.leng.jobLocation}</InputLabel>
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
                  {this.props.leng.other}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={10} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                name="otherLaborLocation"
                label={this.props.leng.otherJobLocation}
                value={fields.otherJobLocation}
                inputProps={{
                  pattern: "[a-zA-Z_ ]*",
                  disabled: this.state.disabledOtherLocation ? "disabled" : ""
                }}
                onChange={onChangePattern}
                fullWidth
              />
            </FormControl>
          </Grid>

          <Grid item xs={10} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple">
                {this.props.leng.journey}
              </InputLabel>
              <Select
                value={fields.workingDayType}
                onChange={onChange}
                input={<Input id="select-multiple" />}
                name="workingDayType"
              >
                {/* {workingType.description} */}
                {/* </MenuItem> */}
                {/* )) */}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={10} sm={4}>
            <FormControl className={classes.formControl}>
              <TextField
                name="beneficiary"
                label={this.props.leng.beneficiary}
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
                label={this.props.leng.relationchipBeneficiary}
                value={fields.relationship}
                onChange={onChangePattern}
                inputProps={{ pattern: "[a-zA-Z_ ]*" }}
                fullWidth
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LaborInformation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LaborInformation);
