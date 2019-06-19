import React, { Component } from 'react'
import Login from './Login';
import CreateAccount from './CreateAccount';
import { connect } from "react-redux";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createAccountToggle: false,
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
    }
    this.createAccountToggle = this.createAccountToggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  createAccountToggle(e){
    this.setState({
      createAccountToggle: !this.state.createAccountToggle,
    })
  }

  onChange(e){
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('form submitted', this.state)
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="wrapper">
      {
        this.state.createAccountToggle ? 
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
        : 
        <Login 
        createAccountToggle={this.createAccountToggle}
        handleSubmit={this.handleSubmit}
        onChange={this.onChange}
        userName={this.state.userName}
        password={this.state.password}
        />
      }
      </div>
    )
  }
};

const mapDispatchToProps = store => ({
  
});

export default connect(null, mapDispatchToProps)(UserPage)