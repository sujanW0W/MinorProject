import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TableComp(props){

	let row = []
	if(props.name === 'users'){
		row = props.users
	}else{
		row = props.products;
	}
	
	const tableContainer = {
		width :'1500px',
	}

	if(props.name === 'users'){
		return(
		
			<TableContainer component={Paper} sx={tableContainer} className='table'>
		  <Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead sx={{backgroundColor:'#d1d1d1'}}>
			  <TableRow>
				<TableCell align="center">ID</TableCell>
				<TableCell align="center">Username</TableCell>
				<TableCell align="center">Email</TableCell>
				<TableCell align="center">Phone Number</TableCell>
				<TableCell align="center">Role</TableCell>
				{(props.name === 'ordered' || props.name === 'users') &&
					<TableCell align="center">Status</TableCell>
				}
				{props.name === 'pending' &&
					<TableCell align='center'>Accept</TableCell>
				}
				{props.name === 'pending' &&
					<TableCell align='center'>Reject</TableCell>
				}
			  </TableRow>
			</TableHead>
			<TableBody>
			  {row.map((row) => (
				<TableRow
					key = {row.userId}
				  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
				  
				  <TableCell align="center">{row.userId}</TableCell>
				  <TableCell align="center">{row.username}</TableCell>
				  <TableCell align="center">{row.email}</TableCell>
				  <TableCell align="center">{row.phoneNumber}</TableCell>
				  <TableCell align="center">{row.userRole}</TableCell>
				  <TableCell align="center">
					 <button className='add-product' onClick = {() => props.handleUsers('event',row.userId)} style={{padding:'0px 50px'}} >
						  Remove
					  </button>
				  </TableCell>
				  
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
		</TableContainer>
		)
	}else{
		return(
		
			<TableContainer component={Paper} sx={tableContainer} className='table'>
		  <Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead sx={{backgroundColor:'#d1d1d1'}}>
			  <TableRow>
				<TableCell align="center">ID</TableCell>
				<TableCell align="center">Product</TableCell>
				<TableCell align="center">Name</TableCell>
				<TableCell align="center">Price</TableCell>
				{props.name === 'ordered' &&
					<TableCell align="center">Status</TableCell>
				}
				{
					props.name === 'pending' && 
					<>
					<TableCell align="center">Seller ID</TableCell>
					<TableCell align="center">Approve</TableCell>
					<TableCell align="center">Reject</TableCell>
					
				</>
				}
			  </TableRow>
			</TableHead>
			<TableBody>
			  {row.map((row) => (
				<TableRow
					key = {row.productId}
				  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
				  
				  <TableCell align="center">{props.name==='ordered'? row.productId : row.id}</TableCell>
				  <TableCell align="center" sx={{width:'200px',height:'200px'}}> <img src={props.name==='ordered'? row.imageURL : row.imageUrl} alt='NA' style={{maxWidth:'100%', maxHeight:'100%'}}/> </TableCell>
				  <TableCell align="center">{row.productName}</TableCell>
				  <TableCell align="center">{row.price}</TableCell>
				  {
					  props.name === 'ordered' &&
						<TableCell align="center" sx={{width:'200px'}}>
						<button className='add-product' onClick = {() => props.handleProducts('event',row.id)} style={{padding:'0px 50px'}} >
						  Delivered
					  </button>
					</TableCell>
				  }
				  {
					  props.name === 'pending' &&
					  <>
					  <TableCell align='center'>{row.userId}</TableCell>
					  <TableCell align="center" sx={{width:'200px'}}>
						<button className='add-product' onClick = {() => props.handleApprove('event',row.id)} style={{padding:'0px 50px'}} >
						  Approve
					  </button>
					</TableCell>
					<TableCell align="center" sx={{width:'200px'}}>
					<button className='add-product' onClick = {() => props.handleReject('event',row.id)} style={{padding:'0px 50px'}} >
					  Reject
				  </button>
				</TableCell>
				</>
				  }
				  
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
		</TableContainer>
		)
	}
}