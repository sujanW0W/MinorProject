import React from 'react'
import './Cart.css'
import Items from './Items'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { Paper } from '@mui/material'
import axios from 'axios'

// import {products} from './productItems'

function Cart({ cartItems, handleRemoveFromCart }) {
    const [products, setProducts] = React.useState([])

    React.useEffect(
        () => {
            cartItems.forEach(
                (id) =>
                    axios.get(`http://localhost:8080/api/product/productById/${id}`)
                        .then(
                            (response) => {
                                setProducts(
                                    prevState => [...prevState, response.data]
                                )
                            }
                        )
                        .catch(
                            (err) => console.log(err)
                        )
            )
        }, []
    )

    const [totalAmount, setAmount] = React.useState(0)

    const handleAmountIncrease = (event, price) => {
        setAmount(totalAmount + price)
    }

    const handleAmountDecrease = (event, price) => {
        setAmount(totalAmount - price)
    }

    const handleCheckout = (event) => {
        console.log('Order placed.')
        localStorage.removeItem('cartItems')
    }

    const deleteProduct = (event, id, price) => {
        setProducts(
            products.filter(
                (item) => id !== item.id
            )
        )
        handleAmountDecrease(event, price)
        handleRemoveFromCart(event, id)
    }

    return (
        <div className='head-cart'>
            <div className='heading'>
                <h3>Shopping Cart</h3>
                <p className='total-items'>You have <strong>{products.length} </strong> items in Cart.</p>
            </div>

            <Paper elevation={16} className='items-div'>
                <div className='containing-div'>
                    {
                        products.map(
                            (currentItem) => {
                                return (
                                    <div className='item-div' key={currentItem.id}>
                                        <Items
                                            item={currentItem}
                                            handleAmountIncrease={handleAmountIncrease}
                                            handleAmountDecrease={handleAmountDecrease}
                                            deleteProduct={deleteProduct}
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
                        Total: <span>{`NRs.${totalAmount}`}</span>
                    </h3>
                </div>
                <div className='checkout'>
                    <button
                        className='checkout-button'
                        onClick={handleCheckout}
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