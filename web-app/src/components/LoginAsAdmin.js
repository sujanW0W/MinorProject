import React, { useState } from 'react'
import {TextField, Button} from '@mui/material'
import './Login.css'
import {Grid, Avatar, Paper, Box} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Snackbar from '@mui/material/Snackbar';

import {Link, useNavigate} from 'react-router-dom'

function Login(props) {

    const [open, setOpen] = useState(false);

    const handleSnackbar = (event) => {
        setOpen(true)
    }
    const handleSnackbarClose = (event) => {
        setOpen(false)
    }

    const avatarStyle = {
        backgroundColor : "#363636",
        color : "white"
    }

    const navigate = useNavigate();

    const signInClicked = (event) => {

        const{username,password,status} = props.data;
    
        if(!username || !password) {
            console.log('Field Missing') //Add alert.
        }else{
            props.handleSubmit('event','admin');

            if(status === 200){
                navigate('/admin')
            }else{
                handleSnackbar();
                console.log('User Not Found.')
            }            
        }
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter')
            signInClicked(event)
    }

  return (
    <div>
        <Grid className = 'grid, bg_image' style={{overflow:'auto'}}>
            <Paper elevation={16} className='paper'>

                <Box fullWidth sx={{ borderBottom: 1, borderColor: 'divider',padding:'10px' }}>
        <Grid align = 'center'>
            <Avatar style={avatarStyle}> <LockIcon /> </Avatar>
            <h1 className='head'>Sign In</h1>
            <h1 className='head'>Admin</h1>
        </Grid>

        <TextField 
            name='username'
            value={props.data.username}
            onChange={props.handleChange}
            variant='outlined'
            margin='normal'
            required={true}
            label = 'username'
            placeholder='Enter username'
            fullWidth={true}
            size = 'small'
            onKeyDown={handleKeyDown}
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
            size = 'small'
            onKeyDown={handleKeyDown}
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
            onClick={() => signInClicked()}
        >
            Sign In
        </Button> 

        <Link 
            to = '/forgotPassword'
            title = 'Forgot Password'
            className='loginLink'
        >
            Forgot Password?
        </Link>
        
        </Box>
        </Paper>
        </Grid>

        <Snackbar
				anchorOrigin={{vertical:'top',horizontal:'right'}}
				open={open}
				onClose={handleSnackbarClose}
				message = "User Not Found"
				
		/>
    </div>
  )
}

export default Login