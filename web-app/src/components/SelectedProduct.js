import React from 'react'
import ScrollingProducts from './ScrollingProducts'
import ProductDetails from './ProductDetails'



export default function SelectedProduct(props) {

	React.useEffect(
		() => {
			window.scrollTo(0,0)
		}
	)

    const art = [ //Fetch the images from DB.
		'images/art0.jpg',
		'images/art1.jpg',
		'images/art2.jpg',
		'images/art3.jpg',
		'images/art4.jpg',
		'images/art5.jpg',
		'images/art6.jpg',
		'images/art7.jpg',
		'images/art8.jpg',
		'images/art9.jpg',
		'images/art10.jpg',
		'images/art11.jpg',
		'images/art12.jpg',
		'images/art13.jpg',
		'images/art14.jpg',
		'images/art15.jpg'
	]

	const paintings = [
		'images/paintings0.jpeg',
		'images/paintings1.jpeg',
		'images/paintings2.jpeg',
		'images/paintings3.jpeg',
		'images/paintings4.jpeg',
		'images/paintings5.jpeg',
		'images/paintings6.jpeg',
		'images/paintings7.jpeg',
		'images/paintings8.jpeg',
		'images/paintings9.jpeg',
		'images/paintings10.jpeg',
		'images/paintings11.jpeg',
		'images/paintings12.jpeg',
		'images/paintings13.jpeg',
		'images/paintings14.jpeg',
		'images/paintings15.jpeg'
	]

	let data =[]

	if (props.kind === '0'){
		data = [
			props.firstImage,
			art[Math.floor(Math.random()*16)],
			art[Math.floor(Math.random()*16)],
			art[Math.floor(Math.random()*16)]
		]
	}else{
		data = [
			props.firstImage,
			paintings[Math.floor(Math.random()*16)],
			paintings[Math.floor(Math.random()*16)],
			paintings[Math.floor(Math.random()*16)]
		]
	}

	

  return (
      <div>
        <ProductDetails 
            data={data} 
        />
        <ScrollingProducts 
			handleProductClick = {props.handleProductClick}
		/>
      </div>
   
  )
}
