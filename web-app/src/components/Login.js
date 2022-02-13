import React from 'react'
import {TextField, Button, Link} from '@mui/material'
import './Login.css'

function Login(props) {

  return (
    <div>
        <TextField 
            name='userName'
            value={props.data.userName}
            onChange={props.handleChange}

            variant='filled'
            margin='normal'
            required
            label = 'Username'
            placeholder='Enter Username'
            fullWidth
        />
        <TextField 
            name = 'password'
            value={props.data.password}
            onChange={props.handleChange}

            variant='filled'            
            required
            label = 'Password'
            placeholder='Enter Password'
            fullWidth
            type='password'

        />

        <div style={{margin:'10px 0px'}}>
            <label className = 'rememberMe'>
            <input 
                type="checkbox" 
                className='check'
                name = 'rememberMe'
                checked = {props.data.rememberMe}
                onChange = {props.handleChange}
            /> 
                Remember Me
            </label>
        </div>

        <Button 
            type='submit' 
            name = 'signin'
            variant = 'outlined'
            fullWidth
            onClick={props.handleSubmit}
        >
            Sign In
        </Button> 

        <Link 
            href = "https://www.google.com"
            target = '_blank'
            title = 'Forgot Password'
            variant = 'button'
            underline = 'none'
        >
            Forgot Password?
        </Link>
<br />
        <div style={{margin : '5px 0px'}}>
            <label className='rememberMe'>
                Don't have an Account?
                <Button
                    type='submit'
                    name = 'signup'
                    variant='outlined'
                    fullWidth
                    onClick={props.handleSubmit}
                >
                    Sign Up
                </Button>
            </label>
        </div>

      
    </div>

    
  )
}

export default Login