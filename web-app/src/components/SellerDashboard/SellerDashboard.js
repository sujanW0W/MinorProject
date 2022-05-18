import React from 'react'
import { Link } from 'react-router-dom'
import './SellerDashboard.css' 
import {Products} from './../ProductsCollection'
import  ItemsTable  from './ItemsTable'

//api calls garera array extract garisake pachi array as a children pathaune.

export default function SellerDashboard() {
    const [items,setItems] = React.useState([]);

    React.useEffect(
        () => {
            setItems(Products)
        },[]
    )

    const handleDelivered= (id) => {

        setItems(
            items.filter(
                (item) => 
                    item.id !==id
            )
        )
    }

    return(
        <div className='seller'>
            <nav>
                <Link to='/' className='navLink'>
                    Back to Homepage
                </Link>
                <h1>
                    Dashboard
                </h1>
                <Link to='/addProduct' className='navLink'>
                    Add Product
                </Link>
            </nav>

            <div className='tableContainer'>
                <h1 className='tableHead'>
                    Listed Items
                </h1>
                <table className='list'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <ItemsTable 
                        productArray = {items}
                        isTable = {0}
                    />
                </table>

                <h1 className='orders'>
                    Ordered Items
                </h1>
                <table className='list'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <ItemsTable 
                        productArray = {items}
                        isTable = {1}
                        handleDelivered = {handleDelivered}
                    />
                </table>
            </div>
        </div>

    )
}
