import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeDecor from '../homedecorLogo.png'
import UserIconDropMenu from './UserIconDropMenu'
import { Link, useNavigate } from 'react-router-dom';


export default function Header(props) {
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
  }

  const handleViewRecommendation = (event) => {
    navigate('/recommendations')
  }

  const navigate = useNavigate();

  function handleKey(event) {
    if (event.key === 'Enter') {
      navigate('/search')
    }
  }


  function handleCart(event) {
    if (localStorage.getItem('loggedIn')) {
      navigate('/cart')
    } else {
      props.cartNotAvailable('event');
    }
  }

  return (
    <div>
      <nav className="navbar">
        <div className="nav">
          <Link to="/" >
            <img src={HomeDecor} alt='NA' />
          </Link>

          <div className="nav-items">
            <div className="search">
              <input
                type="text"
                className="search-box"
                placeholder="Search brand, product"
                name='searched'
                value={props.searched}
                onChange={props.handleSearch}
                onKeyDown={handleKey}
              />
              <Link to="/search">
                <button
                  className="search-btn"
                  name='searchedButton'
                >
                  Search
                </button>
              </Link>
            </div>

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
              AddProductNotAvailable={props.AddProductNotAvailable}
            />

            <IconButton
              onClick={handleCart}
            >
              <ShoppingCartIcon
                sx={{ color: '#383838' }}
                fontSize='large'
              />
            </IconButton>


            <button
              className='add-product'
              onClick={handleViewRecommendation}
            >
              View Recommendations
            </button>

          </div>
        </div>
        <ul className="links-container">

          <li className="link-item">
            <Link
              to="/category"
              className="link"
              name='Bathroom'
              onClick={() => props.handleNavigation('event', 'A')}
            >
              Bathroom
            </Link>
          </li>

          <li className="link-item">
            <Link
              to="/category"
              className="link"
              name='Kitchen'
              onClick={() => props.handleNavigation('event', 'B')}
            >
              Kitchen
            </Link>
          </li>

          <li className="link-item">
            <Link
              to="/category"
              className="link"
              name='Art'
              onClick={() => props.handleNavigation('event', 'C')}
            >
              Art
            </Link>
          </li>

          <li className="link-item">
            <Link
              to="/category"
              className="link"
              name='Furniture'
              onClick={() => props.handleNavigation('event', 'D')}
            >
              Furniture
            </Link>
          </li>

          <li className="link-item">
            <Link
              to="/category"
              className="link"
              name='Accessories'
              onClick={() => props.handleNavigation('event', 'E')}
            >
              Accessories
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
