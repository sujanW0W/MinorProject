import React from 'react'
import './App.css';
import LoginRegister from './LoginRegister'
class App extends React.Component {
  
  state = {
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    phoneNumber: '',
    userName: '',
    password: '',
  //  confirmPassword: '',
    rememberMe: false,
    terms: false
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    type === 'checkbox' ?
      this.setState(
        {
          [name]: checked
        }
      ) :
      this.setState(
        {
          [name]: value
        }
      )
  }

  handleSubmit = (event) => {
    console.log(`Username : ${this.state.userName}\nPassword : ${this.state.password}\nRemember:${this.state.rememberMe}`)
  }

  handleRegister = (event) => {
    // if (this.state.password !== this.state.confirmPassword) {

    //   this.setState(
    //     {
    //       password: '',
    //       confirmPassword: ''
    //     }
    //   )
    // }
    // else {
      this.state.terms &&
        console.log(`Registered\n firstName:${this.state.firstName}\nlastName:${this.state.lastName}\nGender:${this.state.gender}\n DOB:${this.state.dob}\nPhone NUmber:${this.state.phoneNumber}\n Email:${this.state.email}\n Password${this.state.password}\nTerms:${this.state.terms}`)
   // }

  }


  render() {
    return (
      <LoginRegister
        data={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleRegister={this.handleRegister}
      />
    );
  }

}

export default App;