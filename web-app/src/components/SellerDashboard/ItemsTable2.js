import React from 'react'
import axios from 'axios'

export default function ItemsTable2(props) {
    let array = []
    const [data,setData] = React.useState([])

    const getProductsById =  () =>{
         props.products.forEach(
             (item) => {
                 axios.get(`http://localhost:8080/api/product/getProductById/${item.id}`)
                 .then(
                     (response) => {
                         setData(
                             (prevData) => [...prevData,response.data]
                         )
                     }
                 )
             }
         )
     }

    React.useEffect(
        () => {
            getProductsById()

        },[]
    )
   
        data.forEach(
             item => {
                 array.push(
                     <tbody key={item.id}>
                         <tr>
                             <td>{item.id}</td>
                             <td><img src={item.imageUrl} alt='NA' className='productImage'/></td>
                             <td>{item.productName}</td>
                             <td>{item.price}</td>
     
                         </tr>
                     </tbody>
                 )
             }
         )
    

    return(
        <>
            {array}
        </>
    )
}

