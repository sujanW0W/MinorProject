import React from 'react'
import './ScrollingProducts.css'
import {IconButton} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ProductCard from './ProductCard'


export default function SecondScrollingProducts(props){

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
                    img = 'images/paintings0.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '1'
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
                    img = 'images/paintings1.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                    kind = '1'
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
                    img = 'images/paintings2.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                     kind = '1'
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
                    img = 'images/paintings3.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                     kind = '1'
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
                    img = 'images/paintings4.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                     kind = '1'
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
                    img = 'images/paintings5.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                     kind = '1'
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
                    img = 'images/paintings6.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                     kind = '1'
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
                    img = 'images/paintings7.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                     kind = '1'
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
                    img = 'images/paintings8.jpeg'
                    brand = 'Brand'
                    shortLine = 'A short line About product'
                    price = '100'
                    handleProductClick = {props.handleProductClick}
                     kind = '1'
                  />
            </div> 
        </section>  
    )
}