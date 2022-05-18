import React from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

export default function SearchPage(props) {

	const [product, setProduct] = React.useState([])

	React.useEffect(() => {

		getProduct()
	}, [])

	const getProduct = () => {
		axios.get(`http://localhost:8080/api/product/getProductByName/${props.searched}`)
			.then((response) => { setProduct(response.data[0])})
	}
	const divStyle = {
		margin: '20px',
		display: 'flex',
		justifyContent: 'center'
	}
	return (
		<>
			<div style={divStyle}>

				{product ?
					<ProductCard
						id={product.id}
						name={product.productName}
						description={product.productDescription}
						category={product.productCategory}
						price={product.price}
						img={product.imageUrl}
						handleProductClick={props.handleProductClick}
						handleAddToCart={props.handleAddToCart}
					/>
					:
					<h2>Sorry, No such Products</h2>
				}
			</div>

		</>
	)
}
