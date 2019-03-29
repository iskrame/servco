import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import PersonalInfo from "./PersonalInfo";
import BornFields from "./BornFields";
const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: "15px",
    bold: true
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "100%"
  }
});

class PersonalDataFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }

  render() {
    const { classes, onChangePattern, state } = this.props;

    let tabContent;
    switch (this.state.index) {
      case 1:
        tabContent = (
          <PersonalInfo
            state={state}
            onChange={this.props.onChange}
            onChangePattern={onChangePattern}
          />
        );
        break;
      case 2:
        tabContent = (
          <BornFields
            state={state}
            onChange={this.props.onChange}
            onChangePattern={onChangePattern}
          />
        );
        break;
      case 3:
        tabContent = (
          <BornFields
            state={state}
            onChange={this.props.onChange}
            onChangePattern={onChangePattern}
          />
        );
        break;
      default:
        break;
    }

    return <div className={classes.root}>{tabContent}</div>;
  }
}
PersonalDataFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalDataFields);
