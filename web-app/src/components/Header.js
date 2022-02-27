import React from 'react'
import './Header.css'
import {IconButton} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeDecor from '../homedecorLogo.png'
import UserIconDropMenu from './UserIconDropMenu'

export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };  


  const handleLogin = (event) => {
    props.renderLogin()
  } 

  const handleLogout = (event) => {
    console.log('Logout');
    props.handleLoggedOut();
    handleClose();
  }




  return (
    <div>
      <nav className="navbar">
        <div className="nav">
          <a href="#" onClick={() => props.handleLogoClick()}>
            <img src={HomeDecor} alt='NA' />
          </a>

          <div className="nav-items">
            <div className="search">
              <input 
                type="text" 
                className="search-box" 
                placeholder="Search brand, product" 
                name = 'searched'
                value={props.searched}
                onChange = {props.handleSearch}
                onKeyDown = {props.handleSearch}
              />
              <button 
                className="search-btn"
                name='searchedButton'
                onClick={props.handleSearchButton}
              >
                Search
              </button>
            </div>

            <div
				className = 'profile-div'
              	onClick={handleClick}
            >
            <IconButton
              // onClick = {() => props.renderLogin('event')}
            >
              <AccountCircleIcon 
                sx = {{color : '#383838'}}
                fontSize = 'large'
              />
            </IconButton>
			{props.loggedIn	&&	<p className='profileName' onClick={handleClick}>userName</p>}
            </div>

            <UserIconDropMenu 
              handleClose = {handleClose}
              open = {open}
              anchorEl = {anchorEl}
              handleLogin = {handleLogin}
              loggedIn = {props.loggedIn}
              handleLogout = {handleLogout}
            />
            
            

            <IconButton
              onClick = {() => console.log('Working'), () => console.log('hello')}
            >
              <ShoppingCartIcon 
                sx = {{color : '#383838'}}
                fontSize = 'large'
              />
            </IconButton>
          
          </div>
        </div>
        <ul className="links-container">
          <li className="link-item">
            <a href="#" className="link">Home</a>
          </li>

          <li className="link-item">
            <a href="#" className="link">Bathroom</a>
          </li>

          	<li className="link-item">
           		<a href="#" className="link">Kitchen</a>
			</li>

          <li className="link-item">
            <a href="#" className="link">Art</a>
          </li>

          <li className="link-item">
            <a href="#" className="link">Furniture</a>
			</li>

          <li className="link-item">
            <a href="#" className="link">Accessories</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
