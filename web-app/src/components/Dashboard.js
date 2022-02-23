import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import ScrollingProducts from './ScrollingProducts'
import SecondContainer from './SecondContainer'
import SecondScrollingPorducts from './SecondScrollingProducts'

class Dashboard extends React.Component {
  state = {
    searched : ''
  }

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

  handleRightScroll = (event) => {
    console.log('Scrolled right')
}

handleLeftScroll = (event) => {
    console.log('Scrolled left')
}

 

  render(){
    return(
      <div>
            <Header 
              searched = {this.state.searched}
              handleSearch = {this.handleSearch}
              handleSearchButton = {this.handleSearchButton}
              renderLogin = {this.props.renderLogin}
            />

            <Banner />
            <ScrollingProducts 
              handleLeftScroll = {this.handleLeftScroll}
              handleRightScroll = {this.handleRightScroll}
            />
            <SecondContainer />
            <SecondScrollingPorducts 
               handleLeftScroll = {this.handleLeftScroll}
               handleRightScroll = {this.handleRightScroll}
            />

            <Footer />

          
      </div>

    )
  }
 
}

export default Dashboard