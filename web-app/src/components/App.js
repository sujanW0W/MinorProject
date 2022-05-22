import React from 'react'
import './App.css';
import LoginRegister from './LoginRegister'
import Dashboard from './Dashboard'
import jwt_decode from 'jwt-decode'

import Snackbar from '@mui/material/Snackbar';

import axios from 'axios';

import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import LoginAsSeller from './LoginAsSeller'
import LoginAsAdmin from './LoginAsAdmin'
import SellerDashboard from './SellerDashboard/SellerDashboard';
import Admin from './Admin/Admin';


class App extends React.Component {

	state = {
		firstName: '',
		lastName: '',
		email: '',
		dateOfBirth: '',
		phoneNumber: '',
		gender: '',
		username: '',
		password: '',
		//  confirmPassword: '',
		rememberMe: false,
		terms: false,
		token: null,
		status: '',
		userID: null,
		//Snackbar
		open: false,
		vertical: 'top',
		horizontal: 'right'
	}

	handleSnackbar = (event) => {
		this.setState(
			{
				open: true
			}
		)
	}

	handleSnackbarClose = () => {
		this.setState(
			{
				open: false
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
				username: '',
				password: ''
			}
		)
	}

	loginUser = (url,newUser) => {
		axios.post(url,newUser)
		.then(
			(response) => {
				this.setState(
					{
						status: response.status,
						token: response.data.token,
						userID: response.data.id
					}
				)


			}
		)
	}

	handleSubmit = (event,role) => {

		const { username, password } = this.state;

		const newUser = { username, password }
		if(role === 'seller'){
			this.loginUser('http://localhost:8080/api/v1/auth/adminLogin',newUser)
		}else if(role === 'admin'){
			this.loginUser('http://localhost:8080/api/v1/auth/superAdminLogin',newUser)
		}else{
			this.loginUser('http://localhost:8080/api/v1/auth/login',newUser)
		}
			

		if (this.state.status === 200) {
			this.handleSnackbar();

			const decoded = jwt_decode(this.state.token)

			localStorage.setItem('token', this.state.token);
			localStorage.setItem('username', decoded.sub)
			localStorage.setItem('userID', this.state.userID)
			localStorage.setItem('loggedIn', true)
		}

	}

	handleRegister = (event) => {
		//	event.preventDefault();

		const { firstName, lastName, email, dateOfBirth, phoneNumber, gender, username, password } = this.state;
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

		const newUser = { firstName, lastName, email, dateOfBirth, phoneNumber, gender, username, password }

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
				method: 'POST',
				url: 'http://localhost:8080/api/v1/registration',
				data: newUser
			}
		)
			.then((response) => console.log(response));
	}

	handleLoggedOut = (event) => {
		this.handleSnackbar()

		localStorage.removeItem('token')
		localStorage.removeItem('loggedIn')
		localStorage.removeItem('username')
		localStorage.removeItem('userID')
		localStorage.removeItem('cartItems')
	}

	isAuth = () => {
		if (localStorage.getItem("token"))
			return true
		else
			return false
	}

	
	render() {
		return (
			<div>
				<BrowserRouter>
					<Routes>
						<Route
							path='/LoginRegister'
							element={
								<LoginRegister
									data={this.state}
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									handleRegister={this.handleRegister}
									emptyUsernameAndPwd={this.emptyUsernameAndPwd}
								/>
							}
						/>

						<Route
							path = '/LoginasSeller'
							element = {
								<LoginAsSeller 
									data={this.state}
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									handleRegister={this.handleRegister}
									emptyUsernameAndPwd={this.emptyUsernameAndPwd}
								/>
							}
						/>
						<Route
							path = '/LoginAsAdmin'
							element = {
								<LoginAsAdmin 
									data={this.state}
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									handleRegister={this.handleRegister}
									emptyUsernameAndPwd={this.emptyUsernameAndPwd}
								/>
							}
						/>

						<Route 
							path='/sellerDashboard'
							element={
								this.isAuth() ?
								<SellerDashboard 					
									handleLoggedOut={this.handleLoggedOut}
								/>
								:
								<Navigate to='/LoginasSeller' />
							}
						/>

						<Route 
							path='/admin'
							element={
								this.isAuth() ?
								<Admin 
									handleLoggedOut={this.handleLoggedOut}
								/>
								:
								<Navigate to='/LoginasAdmin' />
						}
						/>
						
						<Route
							path='/*'
							element={
									<Dashboard
										handleLoggedOut={this.handleLoggedOut}
										handleAddToCart={this.handleAddToCart}
									/>
							}
						/>
						
						<Route 
							path='/forgotPassword' 
							element={<ForgotPassword />}
						/>
						
					</Routes>
				</BrowserRouter>

				{localStorage.getItem('loggedIn') ?
					<Snackbar
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={this.state.open}
						onClose={this.handleSnackbarClose}
						message="Login Successful"

					/>
					:
					<Snackbar
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={this.state.open}
						onClose={this.handleSnackbarClose}
						message="Logout Successful"
					/>}


			</div>

		);
	}

}
export default App;