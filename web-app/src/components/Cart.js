import React from 'react'
import './Cart.css'
import Items from './Items'
import {Scrollbars } from 'react-custom-scrollbars-2'
import { Paper } from '@mui/material'

function Cart() {
  return (
    <div className='head-cart'>
        <div className = 'heading'>
            <h3>Shopping Cart</h3>
            <p className='total-items'>You have * items in cart.</p>
        </div>

        <Paper></Paper>
        <div className="cart-items">
            <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                    <Items />
                </Scrollbars>
            </div>
        </div>

        <div className="cart-total">
            <h3>
                Cart Total: <span>NRs. 5000</span>
            </h3>
            <button>CheckOut</button>
            <button>Clear Cart</button>
        </div>
    </div>
  )
}

export default Cart