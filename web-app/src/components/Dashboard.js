import React from 'react'
import Header from './Header'
import Footer from './Footer'

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

 

  render(){
    return(
      <div>
            <Header 
              searched = {this.state.searched}
              handleSearch = {this.handleSearch}
              handleSearchButton = {this.handleSearchButton}
              renderLogin = {this.props.renderLogin}
            />

            <Footer />
          
      </div>

    )
  }
 
}

export default Dashboard