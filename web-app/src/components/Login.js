import React from 'react'
import {TextField, Button, Link} from '@mui/material'
import './Login.css'
import {Grid, Avatar} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

function Login(props) {

    const avatarStyle = {
        backgroundColor : "#0d8b49",
        color : "white"
    }

  return (
    <div style={{padding:'20px 15px 10px 15px'}}>
        <Grid align = 'center'>
            <Avatar style={avatarStyle}> <LockIcon /> </Avatar>
            <h1 className='head'>Sign In</h1>   {/*In register.css */}
        </Grid>

        <TextField 
            name='userName'
            value={props.data.userName}
            onChange={props.handleChange}
            variant='outlined'
            margin='normal'
            required={true}
            label = 'Username'
            placeholder='Enter Username'
            fullWidth={true}
        />
        <TextField 
            name = 'password'
            value={props.data.password}
            onChange={props.handleChange}
            variant='outlined'            
            required={true}
            label = 'Password'
            placeholder='Enter Password'
            fullWidth={true}
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
            fullWidth={true}
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
                    variant='outlined'
                    fullWidth={true}
                    onClick={()=>props.handleTabChange('event',1)}
                >
                    Sign Up
                </Button>
            </label>
        </div>

      
    </div>
  )
}

export default Login