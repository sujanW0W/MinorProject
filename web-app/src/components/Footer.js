import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { IconButton } from '@mui/material'
import logo from '../homedecorLogo.png'

export default function Footer() {
  
  return (
        <footer className='footerHead'>
            <div className="footer-content">
                <img src={logo} className="logo" alt="NA" />
                <div className="footer-ul-container">
                    <ul className="category">
                        <li className="category-title">Men</li>
                        <li><a href="#" className="footer-link">t-shirt</a></li>
                        <li><a href="#" className="footer-link">seatershirts</a></li>
                        <li><a href="#" className="footer-link">shirt</a></li>
                        <li><a href="#" className="footer-link">jeans</a></li>
                        <li><a href="#" className="footer-link">trousers</a></li>
                        <li><a href="#" className="footer-link">shoes</a></li>
                        <li><a href="#" className="footer-link">formals</a></li>
                        <li><a href="#" className="footer-link">causals</a></li>
                        <li><a href="#" className="footer-link">sports</a></li>
                        <li><a href="#" className="footer-link">watch</a></li>

                    </ul>
                    <ul className="category">
                        <li className="category-title">women</li>
                        <li><a href="#" className="footer-link">t-shirt</a></li>
                        <li><a href="#" className="footer-link">seatershirts</a></li>
                        <li><a href="#" className="footer-link">shirt</a></li>
                        <li><a href="#" className="footer-link">jeans</a></li>
                        <li><a href="#" className="footer-link">trousers</a></li>
                        <li><a href="#" className="footer-link">shoes</a></li>
                        <li><a href="#" className="footer-link">formals</a></li>
                        <li><a href="#" className="footer-link">causals</a></li>
                        <li><a href="#" className="footer-link">sports</a></li>
                        <li><a href="#" className="footer-link">watch</a></li>

                    </ul>
                </div>
            </div>
            <p className="footer-title">about company</p>
            <p className="info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere numquam ipsam, sed explicabo
                eveniet impedit incidunt autem earum exercitationem consectetur quasi natus modi magnam reprehenderit
                distinctio perferendis corporis quisquam quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ipsam dolore rerum obcaecati accusamus temporibus necessitatibus, dolores adipisci ut, nesciunt blanditiis
                optio repudiandae officiis eligendi? Tempora dolorem vitae facere cupiditate Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Veniam facilis temporibus eveniet asperiores? Quia quas temporibus impedit
                similique ad, nostrum praesentium laborum officia esse, repellat repudiandae architecto odio quis animi
            </p>
            <p className=" info">Support emails- help@marketing.com,customersuport@clothing.com</p>
            <p className="info">telephone: 9803293473 9384747283</p>
            <div className="footer-social-container">
                <div style={{margin: 'auto 0px'}}>
                    <a href="#" className="social-link">Terms & Services</a>
                    <a href="#" className="social-link">Privacy page</a>       
                </div>
                <div>
                    <IconButton
                        href='https://www.facebook.com'
                        target = '_blank'
                        title = 'facebook'
                    >
                        <FacebookIcon 
                            sx={{fontSize : '50px'}}
                        />
                    </IconButton>
                    
                    <IconButton
                        href="https://www.instagram.com"
                        target = '_blank'
                        title = 'Instagram'
                    >
                        <InstagramIcon 
                            sx={{fontSize : '50px'}}
                        />
                    </IconButton>
                    
                    <IconButton
                        href="https://www.twitter.com"
                        target = '_blank'
                        title = 'Twitter'
                    >
                        <TwitterIcon 
                            sx={{fontSize : '50px'}}
                        />
                    </IconButton>

                    
                </div>
            </div>
            <p className="footer-credit">clothing ,best appearls online store</p>
        </footer>  
    
    )
}
