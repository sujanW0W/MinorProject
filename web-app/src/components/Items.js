import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';

const Items = () => {
  return (
    <>
        <div className = 'items-info'>
            <div className="product-img">
                <img src="https://barstoolcomforts.com/wp-content/uploads/2017/03/amisco-owen-brown-modern-dining-chair-with-ladder-back-design.jpg" alt="NA" />
            </div>
            <div className="title">
                <h2>Chair</h2>
                <p>Wooden Color</p>
            </div>
            <div className='add-minus-quantity'>
                <IconButton>
                     <AddIcon />
                </IconButton>
                <input type="text" placeholder='*' style={{width:'3em', height:'1em',border :'1px solid black'}}/>
                <IconButton>
                    <RemoveIcon />
                </IconButton>
            </div>
            <div className="remove-items">
                <i className='fas fa-trash-alt remove'></i>
            </div>
        </div>
    </>
  )
}

export default Items