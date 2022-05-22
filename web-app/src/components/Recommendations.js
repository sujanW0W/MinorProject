import axios from 'axios'
import React from 'react'
import ProductCard from './ProductCard'
import './Recommendations.css'

export default function Recommendations(props) {

    const [products, setProducts] = React.useState([])
    React.useEffect(
        () => {
            axios.get(`http://localhost:8080/api/recommendProduct/userBased/${localStorage.getItem('userID')}`)
                .then(response => setProducts(response.data))
                .catch((err) => console.log(err))
        }, []
    )

    return (
        <div className='recommend-outerdiv'>
            <h1>Recommended Products</h1>
            <div style={{display:'flex', flexWrap:'wrap', margin:'30px',justifyContent:'center'}}>
                {products && products.map(
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
            
        </div>
    )
}