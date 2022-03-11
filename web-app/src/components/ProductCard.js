import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {

  const imageURL = props.img && `data:image/png;base64,${props.img}`
  return (
    <div className="product-card" >
        <div className="product-image">

            <Link to="/product=id"  onClick={() => props.handleProductClick('event',props.id,props.name)}>
              <img src={imageURL} className="product-thumb" alt="" /> 
            </Link>
            <button className="card-btn" onClick={() => props.handleAddToCart('event',props.id)}>Add To Cart</button>
        </div>
        <div className="product-info">
            <h3 className="product-brand">{props.name}</h3>
            {/* <p className="product-short-des">{props.description}</p> */}
            <span className="price">NRs. {props.price}</span>
        </div>
    </div>
  )
}
