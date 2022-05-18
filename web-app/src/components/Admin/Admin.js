import React from 'react'
import './Admin.css'

import {Link, Navigate} from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Welcome from './Welcome'
import AdminUser from './AdminUser'
import AdminProducts from './AdminProducts'

export default function Admin() {
    return(
        <div className='admin'>
            <h1>Admin</h1>
            <nav className='adminNav'>
                <ul>
                    <li><Link to='/admin-users' className='adminLink'>Users</Link></li>
                    <li><Link to='/admin-products' className='adminLink'>Products</Link></li>
                </ul>
            </nav>
            <div>
                    <Routes>
                        <Route 
                            path='/'
                            element={<Welcome />}
                        />
                        <Route 
                            path='/admin-users'
                            element = {<Navigate to={<AdminUser />}/>}
                        />
                        <Route 
                            path='/admin-products'
                            element = {<AdminProducts />}
                        />
                    </Routes>
            </div>

        </div>
    )
}