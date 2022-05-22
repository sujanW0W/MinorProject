import React from 'react'
import './Cart.css'
import Items from './Items'
import { Paper } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// import {products} from './productItems'

function Cart({ handleRemoveFromCart }) {
    const [products, setProducts] = React.useState([])

    const navigate = useNavigate()

    React.useEffect(
        () => {
            axios.get(`http://localhost:8080/api/cart/getCart/${localStorage.getItem('userID')}`)
            .then(
                (response) => {
                        setProducts(response.data)
                    }
                    )

            // cartIds.forEach(
            //     (id) =>
            //         axios.get(`http://localhost:8080/api/product/getProductById/${id}`)
            //             .then(
            //                 (response) => {console.log(response)
            //                     setProducts(
            //                         prevState => [...prevState, response.data]
            //                     )
            //                 }
            //             )
            //             .catch(
            //                 (err) => console.log(err)
            //             )
            // )
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
        // localStorage.removeItem('cartItems')

        let dateTime = new Date();
		let date;
		if(dateTime.getMonth() < 9)
			date = `${dateTime.getFullYear()}-0${dateTime.getMonth()+1}-${dateTime.getDate()}`;
		else
			date = `${dateTime.getFullYear()}-${dateTime.getMonth()+1}-${dateTime.getDate()}`;
        let dataArray = [];
        products.forEach(
            (item) => {
                const data ={
                    buyerId : localStorage.getItem('userID'),
                    orderDate : date,
                    price : item.price,
                    productId : item.productId,
                    quantity : '1',
                    sellerId : item.sellerId
                }
                dataArray.push(data);
            }
        )
        axios.post(`http://localhost:8080/api/saveOrder/${localStorage.getItem('userID')}`,dataArray)
                .then(
                    (response) => {
                        console.log(response)
                    }
                )
            navigate('/')
    }

    const deleteProduct = (event, id, price) => {
           setProducts(products.filter(
                (item) => {
                    return id != item.id
                }
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
                                    <div className='item-div' key={currentItem.productId}>
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