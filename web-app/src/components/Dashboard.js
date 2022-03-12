import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import ScrollingProducts from './ScrollingProducts'
import SecondContainer from './SecondContainer'
import SecondScrollingProducts from './SecondScrollingProducts'
import SearchPage from './SearchPage'
import SelectedProduct from './SelectedProduct'
import Cart from './Cart'
import AddProduct from './AddProduct'
import Snackbar from '@mui/material/Snackbar';
import Profile from './Profile'
import NoPage from './NoPage'
import Recommendations from './Recommendations'
import CategoryPage from './CategoryPage'

import {
	Routes,
	Route,
	Navigate
} from 'react-router-dom'
import axios from 'axios'
import { products } from './productItems'

class Dashboard extends React.Component {
	state = {
		searched: '',
		category: '',
		products: null,
		id: '',
		cartItems: []
	}


	//   componentDidMount() {
	//     const productContainer =[...document.querySelectorAll('.product-container')];
	//     const nxtBtn = [...document.querySelectorAll('#nxt-btn')];
	//     const preBtn = [...document.querySelectorAll('#pre-btn')];

	//     productContainer.forEach((item, i) => {
	//         let containerDimesions=item.getBoundingClientRect();
	//         let containerWidth= containerDimesions.width;

	//         nxtBtn[i].addEventListener('click',()=>{
	//             item.scrollLeft += containerWidth;
	//         })

	//         preBtn[i].addEventListener('click',()=>{
	//             item.scrollLeft -= containerWidth;
	//         })
	//     })
	// }

	componentDidMount() {
		this.getProduct()

	}
	getProduct = () => {
		const url = 'http://localhost:8080/api/product/getProduct'
		axios.get(url)
			.then(
				(response) => {
					this.setState({ products: response.data })
				}
			)
	}

	handleSearch = (event) => {
		this.setState(
			{
				searched: event.target.value
			}
		)
	}

	handleNavigation = (event, category) => {

		this.setState(
			{
				category: category
			}
		)
	}

	handleProductClick = (event, productID) => {

		this.setState(
			{
				id: productID,
			}
		)
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

	handleAddToCart = (event, id) => {
		this.setState(
			{
				cartItems: [...this.state.cartItems, id]
			}
		)
	}

	handleRemoveFromCart = (event, id) => {
		const items = this.state.cartItems.filter(
			(item) => id !== item
		)

		this.setState(
			{
				cartItems: items
			}
		)
	}

	cartNotAvailable = (event) => {
		this.handleSnackbar();
	}

	AddProductNotAvailable = (event) => {
		this.handleSnackbar();
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
				<Header
					searched={this.state.searched}
					handleSearch={this.handleSearch}
					handleSearchButton={this.handleSearchButton}
					handleLogoClick={this.handleLogoClick}

					handleLoggedOut={this.props.handleLoggedOut}
					cartNotAvailable={this.cartNotAvailable}
					AddProductNotAvailable={this.AddProductNotAvailable}
					handleNavigation={this.handleNavigation}
				/>

				<div>
					<Routes>

						<Route
							path='/profile'
							element={
								this.isAuth() ?
									<Profile />
									:
									<Navigate to='/LoginRegister' />}

						/>
						<Route
							path='/search'
							element={
								<SearchPage
									searched={this.state.searched}
									handleAddToCart={this.handleAddToCart}
									handleProductClick={this.handleProductClick}
								/>
							}
						/>
						<Route
							path='/category'
							element={
								<CategoryPage
									category={this.state.category}
									handleAddToCart={this.handleAddToCart}
									handleProductClick={this.handleProductClick}
								/>
							}
						/>
						<Route
							path='/product=id'
							element={
								<SelectedProduct
									productsList={this.state.products}
									handleProductClick={this.handleProductClick}
									id={this.state.id}
									handleAddToCart={this.handleAddToCart}
								/>
							}
						/>
						<Route
							path='/cart'
							element={
								this.isAuth() ?
									<Cart
										cartItems={this.state.cartItems}
										handleRemoveFromCart={this.handleRemoveFromCart}
									/>
									:
									<Navigate to='/LoginRegister' />
							}
						/>
						<Route
							path='/AddProduct'
							element={
								this.isAuth() ?
									<AddProduct />
									:
									<Navigate to='/LoginRegister' />
							}
						/>

						<Route
							path='/recommendations'
							element={
								<Recommendations
									handleProductClick={this.handleProductClick}
									handleAddToCart={this.handleAddToCart}
								/>
							}
						/>

						<Route
							path='/'
							element={
								<div>
									<Banner />
									<ScrollingProducts
										productsList={this.state.products}
										handleProductClick={this.handleProductClick}
										handleAddToCart={this.handleAddToCart}
									/>
									<SecondContainer
										handleNavigation={this.handleNavigation}
									/>
									<SecondScrollingProducts
										productsList={this.state.products}
										handleProductClick={this.handleProductClick}
										handleAddToCart={this.handleAddToCart}
									/>
								</div>}
						/>

						<Route
							path='/*'
							element={<NoPage />}
						/>
					</Routes>

				</div>
				<Footer />

				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={this.state.open}
					onClose={this.handleSnackbarClose}
					message="You are not Logged IN."
				/>

			</div>

		)
	}

}

export default Dashboard