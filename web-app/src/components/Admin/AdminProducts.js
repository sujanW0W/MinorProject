import React from 'react';
import axios from 'axios';
import TableComp from '../TableComp'


function AdminProducts() {
	const [products,setProducts] = React.useState([]);

	const getProducts = () => {
		axios.get(`http://localhost:8080/api/superAdmin/getPendingProduct`)
		.then(
			(response) => {
				setProducts(response.data)
			}
		)
	}

	React.useEffect(
		() => {
			getProducts()
		},[]
	)

	const handleApprove = (event,id) => {
        setProducts(products.filter(
            (item) => {
                return id !== item.id
            }
        )
        )
        axios.put(`http://localhost:8080/api/superAdmin/approveProduct/${id}`)
        .then(
            (response) => {
                console.log(response)
            }
        )
        
    }

	const handleReject = (event,id) => {
        setProducts(products.filter(
            (item) => {
                return id !== item.id
            }
        )
        )
        axios.put(`http://localhost:8080/api/superAdmin/rejectProduct/${id}`)
        .then(
            (response) => {
                console.log(response)
            }
        )
        
    }

  return (
	  <>
		<h1 className='product-category' style={{margin:'10px'}}>
		Pending Items
		</h1>
		<div style={{display:'flex', justifyContent:'center'}}>
		<TableComp 
		name = 'pending'
		products = {products}
		handleApprove = {handleApprove}
		handleReject = {handleReject}
		/>
		</div>
	</>
  )
}

export default AdminProducts