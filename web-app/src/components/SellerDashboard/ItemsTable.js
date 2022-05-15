import React from 'react'

export default function ItemsTable(props) {
    let array = [];
    if(!props.isTable){
        props.productArray.forEach(
            item => {
                array.push(
                    <tbody key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td><img src={item.img} alt='NA' className='productImage'/></td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
    
                        </tr>
                    </tbody>
                )
            }
        )
    }else{
        props.productArray.forEach(
            item => {
                array.push(
                    <tbody key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td><img src={item.img} alt='NA' className='productImage'/></td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td><button className='btn' onClick={() =>props.handleDelivered(item.id)}>Delivered</button></td>
                        </tr>
                    </tbody>
                )
            }
        )
    }
    
    return(
       <>
        {array}
       </>
    )
}