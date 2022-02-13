import React from 'react'
import './App.css';
import {Grid,Paper} from '@mui/material';
import Header from './Header'
import Login from './Login.js'


class App extends React.Component {
  state = {
    userName : '',
    password : '',
    rememberMe : false
  }

  handleChange = (event) => {
    const {name, value, checked, type} = event.target;
    
    type === 'checkbox' ? 
      this.setState(
        {
          [name] : checked
        }
      )   :
      this.setState(
        {
          [name] : value
        }
      )
  }

  handleSubmit = (event) => {
    const {name} = event.target;

    name === 'signin' ?
      console.log(`Username : ${this.state.userName}\nPassword : ${this.state.password}\nRemember:${this.state.rememberMe}`)
    :
      console.log('Sign Up')
  }


  render(){
    return (
      <div className='outermostContainer'>
        <Grid>
          <Paper elevation = {16} className='paper'>
            <Header />
            <Login 
              data = {this.state}
              handleChange = {this.handleChange}
              handleSubmit = {this.handleSubmit}
            />
          </Paper>
        </Grid>
      </div>
    );
  }
  
}

export default App;
