import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PersonalDataFields from "./principalFields/PrincipalFields";


class PersonalData extends Component {
  render() {
    const { onChangePattern, state } = this.props;
    //
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <PersonalDataFields
              onChange={this.props.onChange}
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
