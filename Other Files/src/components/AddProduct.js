import React from 'react'
import './AddProduct.css'
import { TextField,InputLabel, MenuItem, Select ,FormControl} from '@mui/material'

import axios from 'axios'

class AddProduct extends React.Component {
	state = {
		productName : '',
		description : '',
		category : '',
		image : '',
		price : '',
		// discountedPrice : '',
		// sellingPrice : ''
	}

	refreshComp = (event) => {
		this.setState(
			{
				productName : '',
				description : '',
				category : '',
				image : '',
				price : ''
			}
		)
	}

	handleChange = (event) => {
		const {name,value} = event.target
		
		this.setState(
			{
				[name] : value
			}
		)
	}

	handleAddButton = (event) => {
		const {productName,description,image,category,price} = this.state;
		const username = localStorage.getItem('username')
		const newProduct = [username,productName,description,image,category,price];
		
		console.log(newProduct);

		let formData = new FormData();

		
		formData.append('username',username);
		formData.append('productName',productName);
		formData.append('productDescription',description);
		formData.append('file', image);
		formData.append('productCategory', category);
		formData.append('productPrice', price);
		
		axios(
			{
				method : 'POST',
				url : 'http://localhost:8080/api/product/add',
				data : formData,
				headers : {
					'content-type' : 'multipart/form-data'
				}
			}
		)
		.then(
			(response) => console.log(response)
		)
		.catch(
			(err) => console.log(err)
		)
		
	//	window.location.reload(true)  Yesle page completely reload garyo. Issue k bhayo bhanda jun responses and console message aako hunchan. sabai delete bhayo. SO better to re-render the component by changing state.
			console.log(this.state)
		this.refreshComp()
	}

	handleImage = (event) => {
		let img = event.target.files[0];
		this.setState(
			{
				//image : URL.createObjectURL(img)
				image : img
			}
			
		)
	}

	render(){
	return (
		<div className='add-product-div'>
			<TextField 
				name = 'productName'
				value={this.state.productName}
				onChange={this.handleChange}
				varaint = 'outlined'
				label = 'Product Name'
				margin = 'normal'
				className='text-field'

			/>
			<TextField 
				name = 'description'
				value={this.state.description}
				onChange={this.handleChange}
				variant='outlined'
				label = 'Description'
				margin='normal'
				className='text-field'
			/>
			{/* <TextField 
				name = 'fullDescription'
				value={this.state.fullDescription}
				onChange={this.handleChange}
				variant='outlined'
				label = 'Full Description of Product'
				margin = 'normal'
				className = 'full-description'
			/> */}

			{/* <div className='productInfo'>
				<div className='largeImage'>
					<p className="text">Product image</p>
					<div className="productImage">
						<img src="#" alt="NA" />
					</div>
				</div>
				<div className="upload-image-sec">
					<p className="text">Upload Images</p>
					<div className="upload-catalouge">
						
						<input type="file" className="fileupload" id="first-file-upload-btn" hidden />
						<label htmlFor="first-file-upload-btn" className="upload-image"></label>
						<input type="file" className="fileupload" id="second-file-upload-btn" hidden />
						<label htmlFor="second-file-upload-btn" className="upload-image"></label>
						<input type="file" className="fileupload" id="third-file-upload-btn" hidden />
						<label htmlFor="third-file-upload-btn" className="upload-image"></label>
						<input type="file" className="fileupload" id="fourth-file-upload-btn" hidden />
						<label htmlFor="fourth-file-upload-btn" className="upload-image"></label>
					</div>
				</div>
			</div> */}
			<div>
				<label htmlFor="uploadPhoto"></label>
				<input 
					type="file" 
					name = 'image' 
					id = 'uploadPhoto'
					onChange={this.handleImage}
				/>
			</div>


			<div className="product-price">
				<FormControl 
					sx = {{width : '225px'}}
					fullWidth
				>
					<InputLabel>Category</InputLabel>
					<Select 
						name = 'category'
						value = {this.state.category}
						label = 'Category'
						onChange = {this.handleChange}
					>
						<MenuItem value={'A'}>Bathroom</MenuItem>
						<MenuItem value={'B'}>Kitchen</MenuItem>
						<MenuItem value={'C'}>Art</MenuItem>
						<MenuItem value={'D'}>Furniture</MenuItem>
						<MenuItem value={'E'}>Accessories</MenuItem>
					</Select>
				</FormControl>
					
				<TextField 
					name = 'price'
					value={this.state.price}
					onChange={this.handleChange}
					variant='outlined'
					label = 'Price'
					type= 'number'
					placeholder='NRs.'
				/>
				{/* <TextField 
					name = 'discountedPrice'
					value={this.state.discountedPrice}
					onChange={this.handleChange}
					variant='outlined'
					label = 'Discounted Price'
					type= 'number'
					placeholder='NRs.'
				/>
				<TextField 
					name = 'sellingPrice'
					value={this.state.sellingPrice}
					onChange={this.handleChange}
					variant='outlined'
					label = 'Selling Price'
					type= 'number'
					placeholder='NRs.'
				/> */}
			</div>

			<button
				className='add-product'
				style={{width : '15em',margin:'20px'}}
				onClick = {this.handleAddButton}
			>
				Add Product
			</button>
		</div>
	)
	}
}

export default AddProduct