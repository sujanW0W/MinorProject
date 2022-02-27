import React from 'react'
import './App.css';
import LoginRegister from './LoginRegister'
import Dashboard from './Dashboard'

import Snackbar from '@mui/material/Snackbar';

class App extends React.Component {
  
  state = {
    firstName: '',
    lastName: '',
    email:'',
    dateOfBirth:'',
    phoneNumber:'',
    gender: '',
    userName: '',
    password: '',
  //  confirmPassword: '',
    rememberMe: false,
    terms: false,

    loginPage : false,
    loggedIn : false,

	//Snackbar
	open: false,
    vertical: 'top',
    horizontal: 'right'
  }

  handleSnackbar = (event) => {
	  this.setState(
		  {
			  open : true
		  }
	  )
	  setInterval( () => this.handleSnackbarClose(),3000 )
  }

  handleSnackbarClose = () => {
	  this.setState(
		  {
			  open : false
		  }
	  )
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

	this.handleSnackbar();

	const {userName,password} = this.state;

	const newUser ={userName,password}

	// const setNewUser=(data)=>{
	// 	newUser.userName = data.userName
	// 	newUser.password = data.password
	// }

//doubt	// fetch("http://localhost:8080/api/v1/registration", {
		// 	method : "GET",
		// 	mode : "cors",
		// 	headers : {"Content-Type":"application/json"}
		// })
		// fetch("http://localhost:8080/api/v1/registration")  //token=[somekind of string] halera gareko thiyo postman ma. tyo string input liyera halnu parcha hola. [address]+string garera complete address banaunu parcha jasto cha.
		// .then(response => response.json())
		// .then(data => console.log(data))

		fetch("http://localhost:8080/api/v1/registration")
		.then((response)=>response.json())
		.then((data)=>console.log(data))

    this.setState(
      {
        loggedIn : !this.state.loggedIn
      }
    )
   // console.log(`Username : ${this.state.userName}\nPassword : ${this.state.password}\nRemember:${this.state.rememberMe}`)
  }

  handleRegister = (event) => {
//	event.preventDefault();

      const {firstName,lastName,email,dateOfBirth,phoneNumber,gender,userName,password} = this.state;
    // if (this.state.password !== this.state.confirmPassword) {

    //   this.setState(
    //     {
    //       password: '',
    //       confirmPassword: ''
    //     }
    //   )
    // }
    // else {
  //    this.state.terms &&
   //     console.log(`Registered\nfirstName:${firstName}\nlastName:${lastName}\nemail:${email}\ndateOfBirth:${dateOfBirth}\nphoneNumber:${phoneNumber}\ngender:${gender}\nuserName:${userName}\npassword:${password}\n`)
        // }


	const newUser = {firstName,lastName,email,dateOfBirth,phoneNumber,gender,userName,password}

	fetch(
		"http://localhost:8080/api/v1/registration",{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(newUser)
		}).then(
			() => console.log('New User Registered.')
		)
  }

  renderLogin = (event) => { 
    this.setState(
      {
        loginPage : !this.state.loginPage
      }
    )
  }
    
  handleLoggedOut = (event) => {
	 this.handleSnackbar()
    this.setState(
      {
        loggedIn : !this.state.loggedIn
      }
    )
  }


  render() {
    return (
     	 <div>
			{this.state.loginPage ? 
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
				loggedIn = {this.state.loggedIn}
				handleLoggedOut={this.handleLoggedOut}

			/>
			}

			{this.state.loggedIn ? 
			<Snackbar
				anchorOrigin={{vertical:'top',horizontal:'right'}}
				open={this.state.open}
				onClose={this.handleSnackbarClose}
				message = "Login Successful"
				
			/>
			:
			<Snackbar
				anchorOrigin={{vertical:'top', horizontal:'right'}}
				open={this.state.open}
				onClose={this.handleSnackbarClose}
				message = "Logout Successful"
			/>}
        </div>
      
    );
  }

}

export default App;