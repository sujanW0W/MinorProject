import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function UserIconDropMenu(props){
    return(
        <div> 
            <Menu
                anchorEl={props.anchorEl}
                open={props.open}
                onClose={props.handleClose}
            >
                {props.loggedIn ? 
                    <div>
                        <MenuItem onClick={props.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={props.handleClose}>My account</MenuItem>
                        <MenuItem onClick={props.handleLogout}>Logout</MenuItem>
                    </div>
                :
                    <MenuItem onClick={props.handleLogin}>Log In</MenuItem>
                }
            </Menu>
            
        </div>
    )
}