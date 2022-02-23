import React from 'react'
import './SecondContainer.css'

export default function SecondContainer() {
  return (
    <section className="collection-container">
        <a href="#" className="collection">
            <img src="img/women-collection.png" alt="" />
            <p className="collection-item">women appearls</p>
        </a>
        <a href="#" className="collection">
            <img src="img/men-collection.png" alt="" />
            <p className="collection-item">men appearls</p>
        </a>
        <a href="#" className="collection">
            <img src="img/accessories-collection.png" alt="" />
            <p className="collection-item">accessories appearls</p>
        </a>
    </section>
   
  )
}

