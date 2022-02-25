import React from 'react'
import './SecondContainer.css'

export default function SecondContainer() {
  return (
    <section className="collection-container">
        <a href="#" className="collection">
            <img src={process.env.PUBLIC_URL+'imgTemp/men-collection.png'} alt="" className='collectionImg'/>
            <p className="collection-item">women appearls</p>
        </a>
        <a href="#" className="collection">
            <img src={process.env.PUBLIC_URL+'imgTemp/men-collection.png'} alt="" className='collectionImg'/>
            <p className="collection-item">men appearls</p>
        </a>
        <a href="#" className="collection">
            <img src={process.env.PUBLIC_URL+'imgTemp/accessories-collection.png'} alt="" className='collectionImg'/>
            <p className="collection-item">accessories appearls</p>
        </a>
    </section>
   
  )
}

