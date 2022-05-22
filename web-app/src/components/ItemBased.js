import React from 'react'
import './ScrollingProducts.css'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ProductCard from './ProductCard'
import axios from 'axios'


export default function ScrollingProducts(props) {

    React.useEffect(
        () => {
            const productContainer = [...document.querySelectorAll('.product-container')];
            const nxtBtn = [...document.querySelectorAll('#nxt-btn')];
            const preBtn = [...document.querySelectorAll('#pre-btn')];

            productContainer.forEach((item, i) => {
                let containerDimesions = item.getBoundingClientRect();
                let containerWidth = containerDimesions.width;

                nxtBtn[i].addEventListener('click', () => {
                    item.scrollLeft += containerWidth;
                })

                preBtn[i].addEventListener('click', () => {
                    item.scrollLeft -= containerWidth;
                })
            })
        }
    )

    const [products, setProducts] = React.useState(null)
    React.useEffect(
        () => {

            axios.get(`http://localhost:8080/api/recommendProduct/itemBased/${localStorage.getItem('userID')}`)
                .then(response => setProducts(response.data))
        }, []
    )

    return (
        <section className="product">
            <h2 className="product-category">Items You May Like</h2>
            <IconButton
                id="pre-btn"
            >
                <ArrowForwardIosIcon />
            </IconButton>
            <IconButton
                id="nxt-btn"
            >
                <ArrowForwardIosIcon />
            </IconButton>

            <div className="product-container">

                {
                    products && products.map(
                        (product) => {
                            return <ProductCard
                                productItem = {product}
                                handleProductClick={props.handleProductClick}
                                key={product.id}
                                handleAddToCart={props.handleAddToCart}
                                
                            />
                        }
                    )
                }

            </div>
        </section>
    )
}