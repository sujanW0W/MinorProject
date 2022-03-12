import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Items = (props) => {

    const [number,setNumber] = React.useState(1);

    const handlePlus = (event) => {
        props.handleAmountIncrease(event,props.item.id)
        setNumber(number +1)
    }

    const handleMinus = (event) => {
        if(number > 0){
            props.handleAmountDecrease(event,props.item.id)
            setNumber(number -1)
        }
    }

    let price = number * props.item.price;

  return (
    <div className='item-in-cart' >
        <div className = 'image-desc'>
            <div className='product-img'>
                <img src= {props.item.image} alt="NA"/>
            </div>

            <div className='description'>
                <p id='name'>{props.item.name}</p>
                <p id='short'>{props.item.description}</p>
            </div>
        </div>
        
        
        <div className='numbers'>
            <RemoveIcon 
                name = 'minus'
                className = 'plus-minus'
                onClick = {handleMinus}
            />
            <input
                disabled
                type="number" 
                className='numberField'
                name = 'numberOfItems'
                value = {number}
              
            />
            <AddIcon 
                name = 'plus'
                className = 'plus-minus'
                onClick = {handlePlus}
            />
        </div>

        <div className = 'price-cart'>
            <p>
                NRs. {price}
            </p>
        </div>
        <div className = 'delete'>
            <DeleteIcon 
                name = 'delete'
                className = 'deleteIcon'
                onClick = {() => console.log('delete clicked')}
            />
        </div>
    </div>
  )
}

export default Items