import React from 'react'
import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'
import './Login.css'

function Login() {

  return (
    <div>
        <TextField 
            variant='filled'
            margin='normal'
            required
            label = 'Username'
            placeholder='Enter Username'
            fullWidth
        />
        <TextField 
            variant='filled'
            
            required
            label = 'Password'
            placeholder='Enter Password'
            fullWidth
            type='password'

        />

        <div style={{margin:'10px 0px'}}>
            <label className = 'rememberMe'>
            <input type="checkbox" class='check'/> Remember Me
            </label>
        </div>

        <Button 
            type='submit' 
            variant = 'outlined'
            
            fullWidth
        >
            Sign In
        </Button> 

        <Button
            type='submit'
            variant = 'text'
            
        >
            Forgot Password?
        </Button>
<br />
        <div style={{margin : '5px 0px'}}>
            <label className='rememberMe'>
                Don't have an Account?
                <Button
                    type='submit'
                    variant='outlined'
                    fullWidth
                >
                    Sign Up
                </Button>
            </label>
        </div>
    </div>

    
  )
}

export default Login