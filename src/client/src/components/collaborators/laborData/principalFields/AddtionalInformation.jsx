import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { payWays, schemas } from '../../../../utils/DummyData';
import {clientLenguaje} from "../../../../translate/clientTranslate";
//Styles
const styles = theme => ({
    root: {

        width: "100%"
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: "100%",
        maxWidth: "100%",
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    details: {
        alignItems: "center"
    },
    column: {
        flexBasis: "100%"
    }
});
//END Styles

class AdditionalInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledOtherLocation: true
        };
    }

    onHandleChange(e) {
        const { value } = e.target
        if (value === 2) {
            this.setState({
                disabledOtherLocation: false
            });
        } else {
            this.setState({
                disabledOtherLocation: true
            });
            this.props.fields.otherSchema = '';
        }
        this.props.onChange(e);
    }

    render() {
        const leng = clientLenguaje();
        const { onChange, onChangePattern, fields, classes } = this.props;
        return (
            <div className={classes.root}>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <span className={classes.heading}>
                                <strong>{leng.additionalInformation}</strong>
                            </span>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <div className={classes.column}>
                            <Grid container spacing={24}>
                                <Grid item xs={11} sm={4}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            name="procurementRegime"
                                            label={leng.regimeWorker}
                                            value={fields.procurementRegime}
                                            onChange={onChange}
                                            fullWidth />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={11} sm={4}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel>{leng.scheme}</InputLabel>
                                        <Select
                                            value={fields.schema}
                                            onChange={this.onHandleChange.bind(this)}
                                            name="schema">
                                            {schemas.map(schema => (
                                                <MenuItem key={schema.description} value={schema.id}>
                                                    {schema.description}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={11} sm={4}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            name="otherSchema"
                                            label={leng.otherScheme}
                                            value={fields.otherSchema}
                                            inputProps={
                                                {
                                                    pattern: "[a-zA-Z_ ]*",
                                                    disabled: this.state.disabledOtherLocation ? 'disabled' : ''
                                                }

                                            }
                                            onChange={onChangePattern}
                                            fullWidth
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={11} sm={4}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            name="socialSecurityNumber"
                                            label={leng.socialNumber}
                                            value={fields.socialSecurityNumber}
                                            onChange={onChangePattern}
                                            inputProps={{ pattern: "[0-9]*" }}
                                            fullWidth
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={11} sm={4}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            name="infonavit"
                                            label={leng.infonavit}
                                            value={fields.infonavit}
                                            onChange={onChangePattern}
                                            inputProps={{ pattern: "[a-zA-Z0-9]*" }}
                                            fullWidth
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={11} sm={4}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            name="fonacot"
                                            label={leng.fonacot}
                                            value={fields.fonacot}
                                            onChange={onChangePattern}
                                            inputProps={{ pattern: "[a-zA-Z0-9]*" }}
                                            fullWidth
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={11} sm={4}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel>{leng.payform}</InputLabel>
                                        <Select
                                            value={fields.payWay}
                                            onChange={onChange}
                                            name="payWay">
                                            {payWays.map(payWay => (
                                                <MenuItem key={payWay.description} value={payWay.id}>
                                                    {payWay.description}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

AdditionalInformation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdditionalInformation);
