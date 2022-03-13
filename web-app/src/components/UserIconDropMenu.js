import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import {Link} from 'react-router-dom'


export default function UserIconDropMenu(props){

    const handleAddProduct = (event) => {
        props.handleClose();
        if (!localStorage.getItem('loggedIn'))
            props.AddProductNotAvailable('event')
      }
      
    return(
        <div> 
            <Menu
                anchorEl={props.anchorEl}
                id="account-menu"
                open={props.open}
                onClose={props.handleClose}
                onClick={props.handleClick}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {localStorage.getItem('loggedIn') ? 
                    <div>
                        <Link to='/profile' style={{textDecoration : 'none',color:'inherit'}}>
                            <MenuItem  onClick={props.handleClose}>
                                <Avatar /> Profile
                            </MenuItem>
                        </Link>

                        <Link to='/AddProduct' style={{textDecoration : 'none',color:'inherit'}}>
                            <MenuItem  onClick={handleAddProduct} style={{marginLeft : '-5px'}}>
                                <AddCircleOutlinedIcon fontSize='large' color='disabled' sx={{marginRight:'5px'}}/> Add Product
                            </MenuItem>
                        </Link>
                    
                        <Divider />
                    
                        <Link to='/' style={{textDecoration : 'none',color:'inherit'}}>
                        <MenuItem  onClick={props.handleLogout} >
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                        </Link>
                    </div>
                :
                    <Link to='loginRegister' style={{textDecoration : 'none',color:'inherit'}}> 
                    <MenuItem onClick = {props.handleLogin}>
                        <ListItemIcon >
                            <LoginIcon fontSize="small" />
                        </ListItemIcon>
                        Login
                    </MenuItem>
                    </Link>
                   
                }
            </Menu> 
        </div>
    )
}
