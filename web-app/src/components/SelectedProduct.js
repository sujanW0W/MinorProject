import React from 'react'
import ScrollingProducts from './ScrollingProducts'
import ProductDetails from './ProductDetails'



export default function SelectedProduct() {
    const data = [ //Fetch the images from DB.
        'imgTemp/card1.png',
        'imgTemp/card2.png',
        'imgTemp/card3.png',
        'imgTemp/card4.png'
    ]
  return (
      <div>
        <ProductDetails 
            data={data} 
        />
        <ScrollingProducts />
      </div>
   
  )
}
