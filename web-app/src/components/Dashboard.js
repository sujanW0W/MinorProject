import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import ScrollingProducts from './ScrollingProducts'
import SecondContainer from './SecondContainer'
import SecondScrollingProducts from './SecondScrollingProducts'

import SelectedProduct from './SelectedProduct'

class Dashboard extends React.Component {
  state = {
    searched : '',
    productDetail : false,
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
    if(event.key === 'Enter'){
      this.handleSearchButton(event)
    }

    this.setState(
      {
        searched : event.target.value
      }
    )
  }

  handleSearchButton = (event) => {

    console.log(this.state.searched)
  }



handleProductClick = (event,firstImage,kind) => {
  this.setState(
    {
      productDetail : true,
	  firstImage : firstImage,
	  kind : kind
    }
  )
}

handleLogoClick = (event) => {
  this.setState(
    {
      productDetail : false
    }
  )
}

  render(){
    return(
      <div>
            <Header 
              searched = {this.state.searched}
              handleSearch = {this.handleSearch}
              handleSearchButton = {this.handleSearchButton}
              renderLogin = {this.props.renderLogin}
              handleLogoClick = {this.handleLogoClick}
              loggedIn = {this.props.loggedIn}
              handleLoggedOut = {this.props.handleLoggedOut}

            />

            {this.state.productDetail ? 
              <SelectedProduct 
				firstImage = {this.state.firstImage}
				kind = {this.state.kind}

				handleProductClick = {this.handleProductClick}

              />
            :
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
            </div>
            }

            <Footer />
          
      </div>

    )
  }
 
}

export default Dashboard