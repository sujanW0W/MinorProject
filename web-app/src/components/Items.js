import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const Items = (props) => {

    const [number, setNumber] = React.useState(1);

    React.useEffect(
        () => {props.handleAmountIncrease('event', props.item.price)
           
        }, []
    )

    const handlePlus = (event) => {
        props.handleAmountIncrease(event, props.item.price)
        setNumber(number + 1)
    }

    const handleMinus = (event) => {
        if (number > 0) {
            props.handleAmountDecrease(event, props.item.price)
            setNumber(number - 1)
        }
    }

    let price = number * props.item.price;

    return (

        <div className='item-in-cart' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div className='image-desc'>
                <div className='product-img'>
                    <img src={props.item.imageUrl} alt="NA" />
                </div>

                <div className='description'>
                    <p id='name'>{props.item.productName}</p>
                    {/* <p id='short'>{props.item.productDescription}</p> */}
                </div>
            </div>


            <div className='numbers'>
                <RemoveIcon
                    name='minus'
                    className='plus-minus'
                    onClick={handleMinus}
                />
                <input
                    disabled
                    type="number"
                    className='numberField'
                    name='numberOfItems'
                    value={number}

                />
                <AddIcon
                    name='plus'
                    className='plus-minus'
                    onClick={handlePlus}
                />
            </div>

            <div className='price-cart'>
                <p>
                    NRs. {price}
                </p>
            </div>
            <div className='delete'>
                <DeleteIcon
                    name='delete'
                    className='deleteIcon'
                    onClick={() => props.deleteProduct('event', props.item.id, props.item.price)}
                    // onClick = {() => {
                    //     let formData = new FormData();
                        
                    //     formData.append('productId',props.item.productId)
                    //     formData.append('userId',parseInt(localStorage.getItem('userID')))
                        
                    //     axios.delete(`http://localhost:8080/api/cart/deleteCart/`,formData)
                    //     .then(
                    //         (response) => {console.log(response)}
                    //     )
                    // }
                //}
                />
            </div>
        </div>
    )
}

export default Items