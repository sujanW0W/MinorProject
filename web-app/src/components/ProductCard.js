import React from 'react'

export default function ProductCard(props) {
  return (
    <div className="product-card" >
        <div className="product-image">
            <span className="discount-tag">{props.discount}</span>
            <img src={props.img} className="product-thumb" alt="" onClick={() => props.handleProductClick('event')}/> 
            <button className="card-btn">Add To wishlist</button>
        </div>
        <div className="product-info">
            <h2 className="product-brand">{props.brandName}</h2>
            <p className="product-short-des">{props.shortLine}</p>
            <span className="price">${props.price}</span><span className="actual-price">$150</span>
        </div>
    </div>
  )
}
