import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import PersonalDataFields from "./principalFields/PrincipalFields";

class PersonalData extends Component {
  render() {
    const { onChange, onChangePattern, state } = this.props;
    //
    return (
      <React.Fragment>
        <Grid container spacing={50}>
          <Grid item xs={12}>
            <PersonalDataFields
              onChange={onChange}
              onChangePattern={onChangePattern}
              state={state}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PersonalData;
