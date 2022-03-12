import React from 'react'
import './SecondContainer.css'
import {Link} from 'react-router-dom'

export default function SecondContainer(props) {
  return (
    <section className="collection-container">
        <Link to="./search" name='Furniture' className="collection" onClick={props.handleNavigation}>
          <div>
            <img src={process.env.PUBLIC_URL+'images/furniture.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Furniture</p>
          </div>
            
        </Link>
        <Link to='/search' name = 'Kitchen' className="collection" onClick = {props.handleNavigation}>
          <div>
            <img src={process.env.PUBLIC_URL+'images/kitchen.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Kitchen</p>
          </div>
            
        </Link>
        <Link to='/search' name = 'Bathroom' className="collection" onClick={props.handleNavigation}>
          <div>
            <img src={process.env.PUBLIC_URL+'images/bathroom.jpg'} alt="" className='collectionImg'/>
            <p className="collection-item">Bathroom</p>
          </div>
            
        </Link>
    </section>
   
  )
}

