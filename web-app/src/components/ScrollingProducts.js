import React from 'react'
import './ScrollingProducts.css'
import {IconButton} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ProductCard from './ProductCard'


export default function ScrollingProducts(props){

    React.useEffect(
        () => {
            const productContainer =[...document.querySelectorAll('.product-container')];
            const nxtBtn = [...document.querySelectorAll('#nxt-btn')];
            const preBtn = [...document.querySelectorAll('#pre-btn')];

            productContainer.forEach((item, i) => {
                let containerDimesions=item.getBoundingClientRect();
                let containerWidth= containerDimesions.width;

                nxtBtn[i].addEventListener('click',()=>{
                    item.scrollLeft += containerWidth;
                })

                preBtn[i].addEventListener('click',()=>{
                    item.scrollLeft -= containerWidth;
                })
            })
        }
    )
    
    return (
        <section className="product">
            <h2 className="product-category">Best Selling</h2>
            <IconButton 
                id="pre-btn" 
            >
                <ArrowForwardIosIcon />
            </IconButton>
            <IconButton 
                id="nxt-btn"
            >
                <ArrowForwardIosIcon />
            </IconButton>

            <div className="product-container">
                {/*Yesari Map garne. yesko data chahi jaba item enter garcha taba yini details magne and tei details yeta fetch garne.*/}
                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art0.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'
                />

                {/* <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">1 50% Off</span>
                        <img src={process.env.PUBLIC_URL+'imgTemp/card1.png'} className="product-thumb" alt="" /> 
                        <button className="card-btn">Add To wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Brand</h2>
                        <p className="product-short-des">A short line About product</p>
                        <span className="price">$100</span><span className="actual-price">$150</span>
                    </div>
                </div> */}

                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art1.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'

                />
                
                {/* <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">2 50% Off</span>
                        <img src={process.env.PUBLIC_URL+'imgTemp/card1.png'} className="product-thumb" alt="" />
                        <button className="card-btn">Add To wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Brand</h2>
                        <p className="product-short-des">A short line About product</p>
                        <span className="price">$100</span><span className="actual-price">$150</span>
                    </div>
                </div> */}

                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art2.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'

                />

                {/* <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">3 50% Off</span>
                        <img src={process.env.PUBLIC_URL+'imgTemp/card1.png'} className="product-thumb" alt="" />
                        <button className="card-btn">Add To wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Brand</h2>
                        <p className="product-short-des">A short line About product</p>
                        <span className="price">$100</span><span className="actual-price">$150</span>
                    </div>
                </div> */}

                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art3.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'

                />
                
                {/* <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">4 50% Off</span>
                        <img src={process.env.PUBLIC_URL+'imgTemp/card1.png'} className="product-thumb" alt="" />
                        <button className="card-btn">Add To wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Brand</h2>
                        <p className="product-short-des">A short line About product</p>
                        <span className="price">$100</span><span className="actual-price">$150</span>
                    </div>
                </div> */}

                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art4.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'

                />

                {/* <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">5 50% Off</span>
                        <img src={process.env.PUBLIC_URL+'imgTemp/card1.png'} className="product-thumb" alt="" />
                        <button className="card-btn">Add To wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Brand</h2>
                        <p className="product-short-des">A short line About product</p>
                        <span className="price">$100</span><span className="actual-price">$150</span>
                    </div>
                </div> */}

                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art5.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'

                />

                {/* <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">6 50% Off</span>
                        <img src={process.env.PUBLIC_URL+'imgTemp/card1.png'} className="product-thumb" alt="" />
                        <button className="card-btn">Add To wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Brand</h2>
                        <p className="product-short-des">A short line About product</p>
                        <span className="price">$100</span><span className="actual-price">$150</span>
                    </div>
                </div> */}

                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art6.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'

                />

                {/* <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">7 50% Off</span>
                        <img src={process.env.PUBLIC_URL+'imgTemp/card1.png'} className="product-thumb" alt="" />
                        <button className="card-btn">Add To wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Brand</h2>
                        <p className="product-short-des">A short line About product</p>
                        <span className="price">$100</span><span className="actual-price">$150</span>
                    </div>
                </div> */}

                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art7.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'

                />
                {/* <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">8 50% Off</span>
                        <img src={process.env.PUBLIC_URL+'imgTemp/card1.png'} className="product-thumb" alt="" />
                        <button className="card-btn">Add To wishlist</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Brand</h2>
                        <p className="product-short-des">A short line About product</p>
                        <span className="price">$100</span><span className="actual-price">$150</span>
                    </div>
            </div> */}
            

                <ProductCard 
                    discount = '50% Off'
                    img = 'images/art8.jpg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '0'

                  />
            </div> 
        </section>  
    )
}