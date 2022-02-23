import React from 'react'
import './ScrollingProducts.css'
import {IconButton} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class ScrollingProducts extends React.Component{
    componentDidMount() {
        const productContainer =[...document.querySelectorAll('.product-container')];
        const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
        const preBtn = [...document.querySelectorAll('.pre-btn')];

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

    render(){
        return (
            <div>
                <section className="product">
                <h2 className="product-category">Best Selling</h2>
                <IconButton 
                    class="pre-btn" 
                
                onClick ={() => this.props.handleLeftScroll()}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
                <IconButton 
                    class="nxt-btn"
                    onClick = {() => this.props.handleRightScroll()}
                >
                    <ArrowForwardIosIcon />
                </IconButton>

                <div className="product-container">
                    
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">1 50% Off</span>
                            <img src="img/card1.png" className="product-thumb" alt="" /> 
                            <button className="card-btn">Add To wishlist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Brand</h2>
                            <p className="product-short-des">A short line About product</p>
                            <span className="price">$100</span><span className="actual-price">$150</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">2 50% Off</span>
                            <img src="img/card2.png" className="product-thumb" alt="" />
                            <button className="card-btn">Add To wishlist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Brand</h2>
                            <p className="product-short-des">A short line About product</p>
                            <span className="price">$100</span><span className="actual-price">$150</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">3 50% Off</span>
                            <img src="img/card3.png" className="product-thumb" alt="" />
                            <button className="card-btn">Add To wishlist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Brand</h2>
                            <p className="product-short-des">A short line About product</p>
                            <span className="price">$100</span><span className="actual-price">$150</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">4 50% Off</span>
                            <img src="img/card4.png" className="product-thumb" alt="" />
                            <button className="card-btn">Add To wishlist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Brand</h2>
                            <p className="product-short-des">A short line About product</p>
                            <span className="price">$100</span><span className="actual-price">$150</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">5 50% Off</span>
                            <img src="img/card5.png" className="product-thumb" alt="" />
                            <button className="card-btn">Add To wishlist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Brand</h2>
                            <p className="product-short-des">A short line About product</p>
                            <span className="price">$100</span><span className="actual-price">$150</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">6 50% Off</span>
                            <img src="img/card6.png" className="product-thumb" alt="" />
                            <button className="card-btn">Add To wishlist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Brand</h2>
                            <p className="product-short-des">A short line About product</p>
                            <span className="price">$100</span><span className="actual-price">$150</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">7 50% Off</span>
                            <img src="img/card7.png" className="product-thumb" alt="" />
                            <button className="card-btn">Add To wishlist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Brand</h2>
                            <p className="product-short-des">A short line About product</p>
                            <span className="price">$100</span><span className="actual-price">$150</span>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <span className="discount-tag">8 50% Off</span>
                            <img src="img/card8.png" className="product-thumb" alt="" />
                            <button className="card-btn">Add To wishlist</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Brand</h2>
                            <p className="product-short-des">A short line About product</p>
                            <span className="price">$100</span><span className="actual-price">$150</span>
                        </div>
                    </div>
                </div>

                
            </section>
            </div>
        )
    }
}

export default ScrollingProducts