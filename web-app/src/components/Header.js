import React from 'react';
import './Header.css';
import {Grid, Avatar} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';



function Header(){
    const avatarStyle = {
        backgroundColor : "#5454a9",
        color : "white"
    }

    
    return(
        <Grid align = 'center'>
            <Avatar style={avatarStyle}> <LockIcon /> </Avatar>
            <h1 style={{margin : '5px'}}>Sign In</h1>
        </Grid>
    )
}

export default Header