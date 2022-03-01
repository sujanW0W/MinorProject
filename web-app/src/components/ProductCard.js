import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div className="product-card" >
        <div className="product-image">
            <span className="discount-tag">{props.discount}</span>
            <Link to="/product="  onClick={() => props.handleProductClick('event',props.img,props.kind)}>
              <img src={process.env.PUBLIC_URL + props.img} className="product-thumb" alt="" /> 
            </Link>
            <button className="card-btn">Add To Cart</button>
        </div>
        <div className="product-info">
            <h2 className="product-brand">{props.brandName}</h2>
            <p className="product-short-des">{props.shortLine}</p>
            <span className="price">${props.price}</span><span className="actual-price">$150</span>
        </div>
    </div>
  )
}
