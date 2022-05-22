import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SellerDashboard.css' 
import axios from 'axios'
import { IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserIconDropMenu from './../UserIconDropMenu'
import TableComp from '../TableComp'


export default function SellerDashboard(props) {

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = (event) => {
      props.handleLoggedOut();
      handleClose();
      navigate('/LoginasSeller')
    }

    const [products,setProducts] = React.useState([]);
    const [listdItem,setListedItems] = React.useState([]);

    const getProducts = () => {

        axios.get(`http://localhost:8080/api/getOrder/${localStorage.getItem('userID')}`)
        .then(
            (response) => {
                setProducts(response.data)
            }
        )
    }

    const getListedItems = () => {
        axios.get(`http://localhost:8080/api/product/getConfirmedProduct/${localStorage.getItem('userID')}`)
        .then(
            (response) => {
                setListedItems(response.data)
            }
        )
    }

    React.useEffect(
        () =>  {
            getProducts();
            getListedItems();
        },[]  
    )


    const handleAdd = (event) => {
        navigate('/addProduct')
    }

    const handleProducts = (event,orderId) => {
        setProducts(products.filter(
            (item) => {
                return orderId !== item.id
            }
        )
        )
        axios.delete(`http://localhost:8080/api/deleteOrder/${orderId}`)
        .then(
            (response) => {
                console.log(response)
            }
        )
        
    }

    return(
        <div className='navbar'>
            <nav>
                <h1>
                    Dashboard
                </h1>
                {/* <Link to='/addProduct' className='navLink'>
                    Add Product
                </Link> */}
                <div style={{display: 'flex', margin:'15px', alignItems:'center'}}>
            <div
              className='profile-div'
              onClick={handleClick}
            >
              <IconButton>
                <AccountCircleIcon
                  sx={{ color: '#383838' }}
                  fontSize='large'
                />
              </IconButton>
              {localStorage.getItem('loggedIn') && <p className='profileName' onClick={handleClick}>{localStorage.getItem('username')}</p>}
            </div>

            <UserIconDropMenu
              handleClose={handleClose}
              open={open}
              anchorEl={anchorEl}
              loggedIn={localStorage.getItem('loggedIn')}
              handleLogout={handleLogout}
              name = 'seller'
            />
                <button className='add-product' onClick={handleAdd} style={{marginRight:'30px',padding:'5px 50px '}}>
                    Add Product
                </button>
                </div>
            </nav>

            
            <h1 className='product-category' style={{margin:'10px'}}>
                    Ordered Items
                </h1>
            <div style={{display:'flex', justifyContent:'center'}}>
                <TableComp 
                name = 'ordered'
                products = {products}
                handleProducts = {handleProducts}
                />
            </div>
            <br />
            <h1 className='product-category' style={{margin:'10px'}}>
                    Listed Items
                </h1>
            <div style={{display:'flex', justifyContent:'center'}}>
                <TableComp 
                name = 'confirmed'
                products = {listdItem}
                
                />
            </div>

            
            <p className="footer-credit" style={{backgroundColor:'#383838'}}>Home Decor, Make Your Home Special</p>
        </div>

    )
}