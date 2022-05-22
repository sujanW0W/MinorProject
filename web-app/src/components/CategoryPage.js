import React from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import { display } from '@mui/system'

export default function SearchPage(props) {

    const [product, setProduct] = React.useState(null)

    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/product/getProduct`)
            .then((data) => setProduct(data.data)
            )
    }, [])

    const divStyle = {
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }

    return (
        <>
            <div style={divStyle}>
                {product &&
                    product.map(
                        (product) => {
                            if (product.productCategory === props.category)
                                return <ProductCard
                                    productItem = {product}
                                    handleProductClick={props.handleProductClick}
                                    handleAddToCart={props.handleAddToCart}
                                    key = {product.id}
                                />
                        }
                    )
                }
            </div>

        </>
    )
}
