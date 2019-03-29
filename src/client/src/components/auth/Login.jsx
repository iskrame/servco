import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, sendEmail } from "../../actions/autActions";

// import Joi from "joi-browser";
//import TextFieldGroup from "../common/TextFieldGroup";
import SignIn from "./funcLogin";
import Dialog from "../common/Dialog";
import {clientLenguaje} from "../../translate/clientTranslate";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      recoverEmail: "",
      password: "",
      errors: {},
      show: false,
      open: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    // this.onKeypress = this.onKeypress.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    const leng = clientLenguaje().messageWrongPU;

    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.auth.recoverPass) {
      this.toggleShow(false);
      this.setState({ recoverEmail: "" });
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        password: ""
      });

      if (
        nextProps.errors.emailnotFound === "Usuario no encontrado" ||
        nextProps.errors.wrongPassword === "Contraseña incorrecta"
      ) {
        this.setState({
          open: true,
          errors: { message: leng }
        });
      } else {
        this.setState({ open: false });
      }
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
    this.setState({ errors: { recoverEmail: "" } });
    this.props.sendEmail(userEmail);

    if (!this.state.errors) this.toggleShow(false);
  }
  handleClose = () => {
    this.setState({ open: false, errors: { message: "" } });
  };
  onChange(e) {
    const { value, name } = e.target;
    if (name === "password") {
      if (!/[_\W]/.test(e.target.value)) this.setState({ [name]: value });
    } else this.setState({ [name]: value });
  }

  // onKeypress(e) {}
  render() {
    const { errors, email, show, password } = this.state;
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
                value={password}
                onClick={() => this.toggleShow(true)}
                show={show}
                onClose={this.onClose}
                onCancel={this.onCancel}
                onSubmitEmail={this.onSubmitEmail}
              />

              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                errors={errors}
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
