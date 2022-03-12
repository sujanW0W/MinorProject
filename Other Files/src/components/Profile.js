import React from 'react';
import './Profile.css'


export default function Profile () {
    return(
        <>
            <div className = 'outermost'>
                <div className='nameField'>
                    <label htmlFor="firstName" className='labelName'>First Name :</label>
                    <input 
                        type="text" 
                        name = 'firstName'
                        value='Sujan'
                        disabled
                        className = 'name'
                    />
                </div>
                <div className='nameField'>
                    <label htmlFor="lastName" className='labelName'>Last Name : </label>
                    <input 
                        type="text" 
                        name='lastName'
                        value='Mahrajan'
                        disabled
                        className = 'name'
                    />
                </div>
                <div className="nameField">
                    <label htmlFor="gender" className='labelName'>Gender : </label>
                    <input 
                        type="text" 
                        name='gender'
                        value='Male'
                        disabled
                        className = 'name'
                    />
                </div>
                <div className="nameField">
                    <label htmlFor="dob" className='labelName'>Date of Birth : </label>
                    <input 
                        type="text" 
                        name='dob'
                        value='2/5/2000'
                        disabled
                        className = 'name'
                    />
                </div>
                <div className='nameField'>
                <label htmlFor="email" className='labelName'>Email : </label>
                    <input 
                        type="email" 
                        name='email'
                        value='wow@gmail.com'
                        disabled
                        className = 'name'
                    />
                </div>
            
                <div className="nameField">
                    <label htmlFor="number" className='labelName'>Phone Number : </label>
                    <input 
                        type="text" 
                        name='number'
                        value='0123456789'
                        disabled
                        className = 'name'
                    />
                </div>
                <div className="nameField">
                    <label htmlFor="username" className='labelName'>Username : </label>
                    <input 
                        type="text" 
                        name='username'
                        value='wow123'
                        disabled
                        className = 'name'
                    />
                </div>
                
            </div>
        </>
    )
}