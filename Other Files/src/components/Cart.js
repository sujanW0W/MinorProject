import React from 'react'
import './Cart.css'
import Items from './Items'
import {Scrollbars } from 'react-custom-scrollbars-2'
import { Paper } from '@mui/material'
import axios from 'axios'

import {products} from './productItems'

function Cart({cartItems}) {

    // const [products,setProducts] = React.useState(null)
    // React.useEffect(
    //     ()=>{
    //         const gotProducts = cartItems.map(
    //             (id) => {
    //                 axios.post(`http://localhost:8080/api/product/productById/${id}`)
    //                 .then(
    //                     (response) => {return response.data}
    //                 )
    //             }
    //         )
    //         setProducts(gotProducts)
    //     },[]
    // )
    
    console.log(cartItems)
    const [items,setItems] = React.useState(products);    

    let amount = 0;
    items.forEach(
        item => {
            amount += item.price
        }
    )

    const [totalAmount,setAmount] = React.useState(amount)
    
    const handleAmountIncrease = (event,id) => {
        setAmount(totalAmount + items[id].price)
    }

    const handleAmountDecrease = (event,id) => {
        setAmount (totalAmount - items[id].price)
    }

    const handleCheckout = (event) => {
        console.log('Order placed.')
    }

  return (
    <div className='head-cart'>
        <div className = 'heading'>
            <h3>Shopping Cart</h3>
            <p className='total-items'>You have <strong>{products.length} </strong> items in Cart.</p>
        </div>

        <Paper elevation={16} className='items-div'>
            <div className='containing-div'>
                {
                    items.map(
                        (currentItem) => {
                            return (
                                <div className = 'item-div' key = {currentItem.id}>
                                    <Items 
                                        item = {items[currentItem.id]}
                                        handleAmountIncrease = {handleAmountIncrease} 
                                        handleAmountDecrease = {handleAmountDecrease}
                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
       
        
            <hr />

            <div className="cart-total">
                <h3>
                    Total: <span>{`NRs.${totalAmount}` }</span>
                </h3>
            </div>
            <div className='checkout'>
                <button 
                    className='checkout-button'
                    onClick = {handleCheckout}
                >
                    CheckOut
                </button>
                {/* <button>Clear Cart</button> */}
            </div>
        </Paper>
    </div>
  )
}

export default Cart