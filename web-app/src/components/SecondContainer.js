import React from 'react'
import './SecondContainer.css'

export default function SecondContainer() {
  return (
    <section className="collection-container">
        <a href="#" className="collection">
          <div>
            <img src={process.env.PUBLIC_URL+'images/furniture.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Furniture</p>
          </div>
            
        </a>
        <a href="#" className="collection">
          <div>
            <img src={process.env.PUBLIC_URL+'images/kitchen.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Kitchen</p>
          </div>
            
        </a>
        <a href="#" className="collection">
          <div>
            <img src={process.env.PUBLIC_URL+'images/bathroom.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Bathroom</p>
          </div>
            
        </a>
    </section>
   
  )
}

