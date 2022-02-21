import React from 'react'
import './Header.css'
import {IconButton} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function header(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="nav">
          <a href="#">
            <img src="" className="brand-logo" alt="Image Not Found" />
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

            <IconButton
              onClick = {() => props.renderLogin('event')}
            >
              <AccountCircleIcon 
                sx = {{color : '#383838', marginLeft : '20px'}}
                fontSize = 'large'
              />
            </IconButton>

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
          <li className="link-item"><a href="#" className="link">Home</a></li>
          <li className="link-item"><a href="#" className="link">Women</a></li>
          <li className="link-item"><a href="#" className="link">Kids</a></li>
          <li className="link-item"><a href="#" className="link">Men</a></li>
          <li className="link-item"><a href="#" className="link">Acessesories</a></li>
        </ul>
      </nav>
    </div>
  )
}
