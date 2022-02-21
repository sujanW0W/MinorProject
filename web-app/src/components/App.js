import React from 'react'
import './App.css';
import LoginRegister from './LoginRegister'
import Dashboard from './Dashboard'

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
    terms: false,

    login : false
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

  emptyUserNameAndPwd = () => {
    this.setState(
      {
        userName : '',
        password : ''
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

  renderLogin = (event) => {
    this.setState(
      {
        login : !this.state.login
      }
    )
  }
    


  render() {
    return (
      <div>
        {this.state.login ? 
          <LoginRegister
            data={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleRegister={this.handleRegister}
            renderLogin = {this.renderLogin}
            emptyUserNameAndPwd ={this.emptyUserNameAndPwd}
          />
        :
          <Dashboard 
            renderLogin = {this.renderLogin}
          />
        }
          </div>
      
    );
  }

}

export default App;