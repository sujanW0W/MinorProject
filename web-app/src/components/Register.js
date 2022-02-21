import React from 'react';
import { Grid, TextField, Button, Avatar } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import './Register.css'


function Register(props) {
    const marginStyle = {
        margin: '5px 0px'
    }

    const avatarStyle = {
        backgroundColor: "#0d8b49",
        color: "white"
    }

    const registerClicked = (event) => {
        props.handleRegister('event');
        props.handleTabChange('event',0);
    }

    return (
        <div style={{padding:'20px 15px 10px 15px'}}>
            <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <AddCircleOutlineIcon />
                </Avatar>
                <h1 className='head'>Register</h1>
            </Grid>
            <div style={marginStyle, { display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    variant='outlined'
                    name='firstName'
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    label='First Name'
                    placeholder='First Name'
                    fullWidth={true}
                    required={true}
                    style={{ width: '49%' }}

                />

                <TextField
                    variant='outlined'
                    name='lastName'
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    label='Last Name'
                    placeholder='Last Name'
                    fullWidth={true}
                    required={true}
                    style={{ width: '49%' }}
                />
            </div>


            <TextField
                variant='outlined'
                name='email'
                value={props.data.email}
                onChange={props.handleChange}
                label='Email'
                placeholder='Enter Email'
                fullWidth={true}
                required={true}
                style={marginStyle}

            />

            <Grid className='gender'>
                <h3 className='head'>Gender</h3 >
                <label className='text radio'>
                    <input
                        type="radio"
                        name='gender'
                        value='male'
                        checked={props.data.gender === 'male'}
                        onChange={props.handleChange}

                        style={{ height: '15px', width: '15px' }}
                    />
                    Male
                </label>
                <label className='text radio'>
                    <input
                        type="radio"
                        name='gender'
                        value='female'
                        checked={props.data.gender === 'female'}
                        onChange={props.handleChange}
                        style={{ height: '15px', width: '15px' }}
                    />
                    Female
                </label>
                <label className='text radio'>
                    <input
                        type="radio"
                        name='gender'
                        value='others'
                        checked={props.data.gender === 'others'}
                        onChange={props.handleChange}

                        style={{ height: '15px', width: '15px' }}
                    />
                    Others
                </label>
            </Grid>

            <TextField
                type='date'
                variant='outlined'
                name='dob'
                value={props.data.dob}
                onChange={props.handleChange}

                placeholder='Enter Date'
                fullWidth={true}
                required={true}
                style={marginStyle}

            />

            <TextField
                variant='outlined'
                type='number'
                name='phoneNumber'
                value={props.data.phoneNumber}
                onChange={props.handleChange}
                label='Phone Number'
                placeholder='Enter Phone Number'
                fullWidth={true}
                required={true}
                style={marginStyle}
            />

            <TextField
                variant='outlined'
                name='userName'
                value={props.data.userName}
                onChange={props.handleChange}
                label='Username'
                placeholder='Enter Username'
                fullWidth={true}
                required={true}
                style={marginStyle}
            />

            <TextField
                variant='outlined'
                name='password'
                value={props.data.password}
                onChange={props.handleChange}
                label='Password'
                placeholder='Enter Password'
                fullWidth={true}
                required={true}
                style={marginStyle}
            />

            {/* <TextField
                variant='outlined'
                name='confirmPassword'
                value={props.data.confirmPassword}
                onChange={props.handleChange}
                label='Confirm Password'
                placeholder='Confirm Password'
                fullWidth={true}
                required={true}
                style={marginStyle}
            /> */}

            {/* {
                (props.data.password === props.data.confirmPassword)
                ||
                <label className='text' style={{ color: 'red', fontSize: '15px' }}>Password did not match <br /> </label>
            } */}

            <label className='rememberMe'>
                <input
                    type="checkbox"
                    name='terms'
                    className='check'
                    checked={props.data.terms}
                    onChange={props.handleChange}
                    required={true}

                /> I accept the <a href="#" className='terms'>Terms & Conditions</a>
            </label>

            <Button
                disabled={!props.data.terms}
                type='submit'
                name='register'
                variant='outlined'
                fullWidth={true}
                style={{ margin: '5px 0px' }}
                onClick={() => registerClicked('event')}
            >
                Register
            </Button>

            {/*After registration, the user still needs to sign in.*/}
        </div>
    )

}

export default Register