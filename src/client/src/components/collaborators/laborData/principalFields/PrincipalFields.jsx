import React, { Component } from "react";
import LaborInformation from './LaborInformation';
import AdditionalInformation from './AddtionalInformation';
class PrincipalFields extends Component {

    render() {
        const { onChange, onChangePattern, fields } = this.props;
        return (
            <div>
                <LaborInformation
                    onChange={onChange}
                    onChangePattern={onChangePattern}
                    fields={fields}
                    leng = {this.props.leng}
                />

                <AdditionalInformation
                    onChange={onChange}
                    onChangePattern={onChangePattern}
                    fields={fields}
                    leng = {this.props.leng}
                />
            </div>
        )
    }
}
export default PrincipalFields;
