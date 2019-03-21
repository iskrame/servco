import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import PrincipalFields from './principalFields/PrincipalFields';


class TabLaborData extends Component {
    render() {
        const { fields, onChange, onChangePattern } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <PrincipalFields
                            onChange={onChange}
                            onChangePattern={onChangePattern}
                            fields={fields}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default TabLaborData;
