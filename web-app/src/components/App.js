import React from 'react'
import './App.css';
import LoginRegister from './LoginRegister'
import Dashboard from './Dashboard'

import Snackbar from '@mui/material/Snackbar';

import axios from 'axios';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

class App extends React.Component {
  
  state = {
    firstName: '',
    lastName: '',
    email:'',
    dateOfBirth:'',
    phoneNumber:'',
    gender: '',
    username: '',
    password: '',
  //  confirmPassword: '',
    rememberMe: false,
    terms: false,

   loggedIn : false,
   status : '',
   responseUsername : '',

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

  emptyUsernameAndPwd = () => {
    this.setState(
      {
        username : '',
        password : ''
      }
    )
  }

  handleSubmit = (event) => {

	const {username,password} = this.state;

	const newUser ={username,password}

	// const setNewUser=(data)=>{
	// 	newUser.username = data.username
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

		// fetch("http://localhost:8080/api/v1/registration")
		// .then((response)=>response.json())
		// .then((data)=>console.log(data))

		axios(
			{
				method : 'POST',
				url : 'http://localhost:8080/api/v1/auth/login',
				data : newUser
			}
		)
		.then(
			(response) => {
				console.log(response)
				this.setState(
					{
						status : response.status,
						responseUsername : response.data.username
					}
				)
			}
		)

	// 	getToken = () => {
	// 		return localStorage.getItem('USER_KEY');
	// 	}
	  
		// axios(  TRY AGAIN
		//   {
		// 	  method : 'GET',
		// 	  url : 'http://localhost:8080/api/v1/auth/userinfo',
		// 	  headers:{
		// 		  'Authorization' : 'Bearer' + getToken()
		// 	  }
		//   }
		// )
		//   .then(
		// 	  (response) => console.log(response.data)
		//   )
	  
	if(this.state.status === 200){
		this.handleSnackbar();
		this.setState(
			{
				loggedIn : !this.state.loggedIn
			}
		)
	}
    
   console.log(`username : ${this.state.username}\nPassword : ${this.state.password}\nRemember:${this.state.rememberMe}`)
  }

  handleRegister = (event) => {
//	event.preventDefault();

      const {firstName,lastName,email,dateOfBirth,phoneNumber,gender,username,password} = this.state;
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
   //     console.log(`Registered\nfirstName:${firstName}\nlastName:${lastName}\nemail:${email}\ndateOfBirth:${dateOfBirth}\nphoneNumber:${phoneNumber}\ngender:${gender}\nusername:${username}\npassword:${password}\n`)
	//	}

	const userName = username;
	const newUser = {firstName,lastName,email,dateOfBirth,phoneNumber,gender,userName,password}

	// fetch(
	// 	"http://localhost:8080/api/v1/registration",{
	// 		method:"POST",
	// 		headers:{"Content-Type":"application/json"},
	// 		body:JSON.stringify(newUser)
	// 	}).then(
	// 		() => console.log('New User Registered.')
	// 	)

	axios(
		{
			method:'POST',
			url : 'http://localhost:8080/api/v1/registration',
			data: newUser
		}
	)
	.then((response) => console.log(response));
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
			<BrowserRouter>
  				<Routes>
					<Route 
						path = '/LoginRegister'
						element = {
							<LoginRegister
								data={this.state}
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
								handleRegister={this.handleRegister}
								emptyUsernameAndPwd ={this.emptyUsernameAndPwd}
							/>
						}
					/>
					<Route 
						path = '/*'
						element= {
							<Dashboard 
								loggedIn = {this.state.loggedIn}
								handleLoggedOut={this.handleLoggedOut}
								responseUsername={this.state.responseUsername}
							/>
						}
					/>
  				</Routes>
			</BrowserRouter>

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