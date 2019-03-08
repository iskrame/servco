import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UpdatePassword } from "../../actions/autActions";
import RecoverForm from "../functions/formRecoverPassword";
import { CurrentInfo } from "./../../actions/autActions";
class recoverPassword extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      passwordConfirm: "",
      errors: {},
      open: false
    };
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.CurrentInfo(this.props.match.params.token);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const newPassword = {
      userId: this.props.match.params.id,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    this.props.UpdatePassword(newPassword);
    this.setState({ open: true });

    // this.props.history.push("/");
  }
  onChange(e) {
    console.log(e.target.value);
    if (!/[_\W]/.test(e.target.value))
      this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <RecoverForm
              errors={errors}
              onChange={this.onChange}
              value={this.state}
            />
          </form>
        </div>
      </div>
    );
  }
}

recoverPassword.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  errorsEmail: state.errorsEmail
});

export default connect(
  mapStateToProps,
  { UpdatePassword, CurrentInfo }
)(recoverPassword);
