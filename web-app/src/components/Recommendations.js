import axios from 'axios'
import React from 'react'
import ProductCard from './ProductCard'
import './Recommendations.css'

export default function Recommendations(props) {

    const [products, setProducts] = React.useState(null)
    React.useEffect(
        () => {
            let url = `localhost:8080/api/recommendProduct/userBased/${localStorage.getItem('userID')}`
            const config ={
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${localStorage.getItem('token')}`,
                }
            }
            
            axios.get(url,config)
                .then((response) => {
                    console.log(response)
                    setProducts(
                        response.data
                    )
                }
                )
                .catch((err) => console.log(err))
        }, []
    )

    return (
        <div className='recommend-outerdiv'>

            {products && products.map(
                (product) => {
                    return <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.productName}
                        description={product.productDescription}
                        category={product.productCategory}
                        price={product.price}
                        img={product.image}
                        handleProductClick={props.handleProductClick}
                        handleAddToCart={props.handleAddToCart}
                    />
                }
            )
            }
        </div>
    )
}