import React, { Component } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createAccountToggle: false,
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    };
    this.createAccountToggle = this.createAccountToggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  createAccountToggle(e) {
    this.setState({
      createAccountToggle: !this.state.createAccountToggle
    });
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('form submitted', this.state)
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.createAccount({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          password: this.state.password,
          email: this.state.email
        });
      }
    );
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    // console.log('form submitted', this.state)
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.login({
          userName: this.state.userName,
          password: this.state.password
        });
      }
    );
  }

  render() {
    // console.log(this.state)
    return (
      <div className="user-page-wrapper">
        {this.state.createAccountToggle ? (
          <CreateAccount
            onChange={this.onChange}
            handleSubmit={this.handleSubmit}
            createAccountToggle={this.createAccountToggle}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            userName={this.state.userName}
            password={this.state.password}
          />
        ) : (
          <Login
            createAccountToggle={this.createAccountToggle}
            handleLoginSubmit={this.handleLoginSubmit}
            onChange={this.onChange}
            userName={this.state.userName}
            password={this.state.password}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createAccount: accountInfo => dispatch(actions.createAccount(accountInfo)),
  login: accountInfo => dispatch(actions.make_login(accountInfo))
});

export default connect(
  null,
  mapDispatchToProps
)(UserPage);
