import React, {useState} from 'react'
import './Admin.css'
import { IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserIconDropMenu from './../UserIconDropMenu'
import {  Tabs, Tab, Box} from '@mui/material';
import AdminUser from './AdminUser';
import AdminProducts from './AdminProducts';
import {Navigate, useNavigate} from 'react-router-dom'

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
           // role="tabpanel"
            //hidden={value !== index}
            //id={`simple-tabpanel-${index}`}
            //aria-labelledby={`simple-tab-${index}`}
            //{...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}


export default function Admin(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const navigate = useNavigate()
  
    const handleLogout = (event) => {
      props.handleLoggedOut();
      handleClose();
      navigate('/LoginasAdmin')
    }

    const [value, setValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    }

    const tabStyle = {
        fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4375em',
        letterSpacing: '0.00938em',
        width: '50%'
    }

    return(
        <div className='navbar'>
            <nav>
            <h1>Admin</h1>
            <div style={{display: 'flex', margin:'15px', alignItems:'center'}}>
            <div
              className='profile-div'
              onClick={handleClick}
            >
              <IconButton>
                <AccountCircleIcon
                  sx={{ color: '#383838' }}
                  fontSize='large'
                />
              </IconButton>
              {localStorage.getItem('loggedIn') && <p className='profileName' onClick={handleClick}>{localStorage.getItem('username')}</p>}
            </div>

            <UserIconDropMenu
              handleClose={handleClose}
              open={open}
              anchorEl={anchorEl}
              loggedIn={localStorage.getItem('loggedIn')}
              handleLogout={handleLogout}
              name = 'admin'
            />
            </div>
            </nav>
                <Box fullWidth sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'center',width:'100%'}}>
                    <Tabs
                        value={value}
                        onChange={handleTabChange}
                        indicatorColor='primary'
                        textColor='primary'
                    >
                        <Tab label='Users' style={tabStyle} />
                        <Tab label='Products' style={tabStyle} />
                    </Tabs>
                </Box>

                    <TabPanel value={value} index={0}>
                   <AdminUser />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AdminProducts />
                </TabPanel>

                <p className="footer-credit" style={{backgroundColor:'#383838'}}>Home Decor, Make Your Home Special</p>

        </div>
    )
}