import React from 'react'
import './AddProduct.css'
import { TextField,InputLabel, MenuItem, Select ,FormControl} from '@mui/material'

class AddProduct extends React.Component {
	state = {
		productName : '',
		shortDescription : '',
		category : '',
		//images : '',
		actualPrice : '',
		// discountedPrice : '',
		// sellingPrice : ''
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
		const {productName,shortDescription,category,actualPrice} = this.state;
		const username = this.props.responseUsername
		const newProduct = [username,productName,shortDescription,category,actualPrice];
		
		console.log(newProduct);

		// axios(
		// 	{
		// 		method : 'POST',
		// 		url : 'http://localhost:8080/',
		// 		data : newProduct
		// 	}
		// )
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
				name = 'shortDescription'
				value={this.state.shortDescription}
				onChange={this.handleChange}
				variant='outlined'
				label = 'Short Description'
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

			<div className='productInfo'>
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
						<MenuItem value={'A'}>A</MenuItem>
						<MenuItem value={'B'}>B</MenuItem>
						<MenuItem value={'C'}>C</MenuItem>
						<MenuItem value={'D'}>D</MenuItem>
						<MenuItem value={'E'}>E</MenuItem>
					</Select>
				</FormControl>
					
				<TextField 
					name = 'actualPrice'
					value={this.state.actualPrice}
					onChange={this.handleChange}
					variant='outlined'
					label = 'Actual Price'
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