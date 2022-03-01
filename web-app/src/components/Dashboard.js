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


import {
	Routes,
	Route,
} from 'react-router-dom'

class Dashboard extends React.Component {
  state = {
    searched : '',
	firstImage : '',
	kind : ''
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

  handleSearch = (event) => {
    this.setState(
      {
        searched : event.target.value
      }
    )
  }

  handleProductClick = (event,firstImage,kind) => {
	  this.setState(
		{
		  firstImage :firstImage,
		  kind : kind
	  	}
	  )
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

  cartNotAvailable = (event) => {
	  this.handleSnackbar();
  }

  AddProductNotAvailable = (event) => {
	  this.handleSnackbar();
  }

  render(){
    return(
      <div>
            <Header 
				searched = {this.state.searched}
				handleSearch = {this.handleSearch}
				handleSearchButton = {this.handleSearchButton}
				handleLogoClick = {this.handleLogoClick}
				loggedIn = {this.props.loggedIn}
				handleLoggedOut = {this.props.handleLoggedOut}
				cartNotAvailable = {this.cartNotAvailable}
				AddProductNotAvailable = {this.AddProductNotAvailable}
            />

            <div>
				<Routes>
					<Route
						path = '/search'
						element = {<SearchPage searched = {this.state.searched}/>}
					/>
					<Route 
						path = '/product='
						element = {<SelectedProduct 
										firstImage = {this.state.firstImage}
										kind = {this.state.kind}
										handleProductClick = {this.handleProductClick}
									/>}
					/>
					<Route
						path = '/cart'
						element = {<Cart />}
					/>
					<Route 
						path='/AddProduct'
						element = {<AddProduct />}
					/>
					<Route
						path='/*'
						element = {
					
						<div>
							<Banner />
							<ScrollingProducts
								handleProductClick = {this.handleProductClick}
							/>
							<SecondContainer
								handleProductClick = {this.handleProductClick}
							/>
							<SecondScrollingProducts
								handleProductClick = {this.handleProductClick}
							/>
						</div>}
					/>
				</Routes>

            </div>
            <Footer />

			<Snackbar
				anchorOrigin={{vertical:'top',horizontal:'right'}}
				open={this.state.open}
				onClose={this.handleSnackbarClose}
				message = "You are not Logged IN."
			/>
          
      </div>

    )
  }
 
}

export default Dashboard