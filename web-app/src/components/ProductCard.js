import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div className="product-card" >
      <div className="product-image">

        <Link to="/product=id" onClick={() => props.handleProductClick('event', props.productItem.id)}>
          <img src={process.env.PUBLIC_URL+props.productItem.imageUrl} className="product-thumb" alt="" />
        </Link>
        <button className="card-btn" onClick={() => props.handleAddToCart('event', props.productItem)}>Add To Cart</button>
      </div>
      <div className="product-info">
        <h3 className="product-brand">{props.productItem.productName}</h3>
        {/* <p className="product-short-des">{props.description}</p> */}
        <span className="price">NRs. {props.productItem.price}</span>
      </div>
    </div>
  )
}