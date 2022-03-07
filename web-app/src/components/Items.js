import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Items = (props) => {

    const [number,setNumber] = React.useState(1);

    const handlePlus = (event) => {
        props.handleAmountIncrease(event,props.item.id)
        setNumber(number +1)
    }

    const handleMinus = (event) => {
        props.handleAmountDecrease(event,props.item.id)
        setNumber(number -1)
    }

    let price = number * props.item.price;

  return (
    <div style={{display : 'flex', flexDirection : 'row', justifyContent: 'space-between'}}>
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

        <div className = 'price'>
            <p>
                NRs. {price}
            </p>
        </div>
    </div>
  )
}

export default Items