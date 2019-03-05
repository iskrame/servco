import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, sendEmail } from "../../actions/autActions";

// import Joi from "joi-browser";
//import TextFieldGroup from "../common/TextFieldGroup";
import SignIn from "./funcLogin";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      recoverEmail: "",
      password: "",
      errors: {},
      show: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.auth.recoverPass) {
      this.toggleShow(false);
      this.setState({ recoverEmail: "" });
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  toggleShow = show => {
    this.setState({ show });
  };
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  onClose = () => {
    this.toggleShow(false);
    this.setState({ errors: { recoverEmail: "" } });
  };
  onSubmitEmail(e) {
    e.preventDefault();
    const userEmail = {
      recoverEmail: this.state.recoverEmail
    };
    this.props.sendEmail(userEmail);

    if (!this.state.errors) this.toggleShow(false);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, email, show } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <SignIn
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                errors={errors}
                data={email}
                onClick={() => this.toggleShow(true)}
                show={show}
                onClose={this.onClose}
                onSubmitEmail={this.onSubmitEmail}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
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
  { loginUser, sendEmail }
)(Login);
