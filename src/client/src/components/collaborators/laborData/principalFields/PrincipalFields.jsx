import React, { Component } from "react";
import InformacionLaboral from './InformacionLaboral';
import InformacionAdicional from './InformacionAdicional';
class PrincipalFields extends Component {

    render() {
        const { onChange, onChangePattern, fields } = this.props;
        return (
            <div>
                <InformacionLaboral
                    onChange={onChange}
                    onChangePattern={onChangePattern}
                    fields={fields}
                />

                <InformacionAdicional
                    onChange={onChange}
                    onChangePattern={onChangePattern}
                    fields={fields}
                />
            </div>
        )
    }
}

export default PrincipalFields;
