import React, { useState } from 'react';
import { Grid, Paper, Tabs, Tab, Box} from '@mui/material';

import Login from './Login.js'
import Register from './Register'

import './LoginRegister.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

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

function LoginRegister(props) {
    const [value, setValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
        props.emptyUserNameAndPwd()
    }

    const tabStyle = {
        fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4375em',
        letterSpacing: '0.00938em',
        width: '50%'
    }

    return (

        <Grid className = 'grid, bg_image' style={{overflow:'auto'}}>
            <Paper elevation={16} className='paper'>

                <Box fullWidth sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    
                    <Tabs
                        value={value}
                        onChange={handleTabChange}
                        indicatorColor='primary'
                        textColor='primary'
                    >
                        <Tab label='Sign In' style={tabStyle} />
                        <Tab label='Sign Up' style={tabStyle} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <Login
                        data={props.data}
                        handleChange={props.handleChange}
                        handleSubmit={props.handleSubmit}
                        handleTabChange={handleTabChange}
                        renderLogin={props.renderLogin}
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Register
                        data={props.data}
                        handleChange={props.handleChange}
                        handleRegister={props.handleRegister}
                        handleTabChange = {handleTabChange}
                    />
                </TabPanel>
            </Paper>
        </Grid>
    )
}

export default LoginRegister