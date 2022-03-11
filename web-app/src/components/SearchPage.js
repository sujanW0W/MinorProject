import React from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import { display } from '@mui/system'

export default function SearchPage(props) {

  const [product,setProduct] = React.useState(null)

  React.useEffect(  ()=>{
	  
     getProduct()
  },[])

  const getProduct = () => {
    axios.get(`http://localhost:8080/api/product/${props.searched}`)
    .then((data)=>{setProduct(data.data)})
  }
  const divStyle = {
	  margin : '20px',
	  display : 'flex',
	  justifyContent : 'center'
  }
  return (
	  	<>
		  <div style={divStyle}>
			
			{product ?
				 <ProductCard 
					id = {product.productID}
					name = {product.productName}
					description = {product.productDescription}
					category = {product.productCategory}
					price = {product.price}
					img = {product.image}
					handleProductClick = {props.handleProductClick}
					handleAddToCart = {props.handleAddToCart}
				/>
				:
				<h2>No such Products</h2>
			}
		  </div>
			
	  	</>
  )
}
