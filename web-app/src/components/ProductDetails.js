import axios from 'axios';
import React from 'react'
import CustomerRating from './CustomerRating';
import './ProductDetails.css'


export default function ProductDetails(props) {

    // const [value, setValue] = React.useState(0)
    const [product, setProduct] = React.useState([])

    // const handleImageClick = (event, newValue) => {
    //     setValue(newValue);
    // }

    React.useEffect(
        () => {
            window.scrollTo(0, 0)
        }
    )

    React.useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        axios.get(`http://localhost:8080/api/product/getProductById/${props.id}`)
            .then((data) => { 
                console.log(data)
                setProduct(data.data)
             })
    }

    return (
        <div>
            <section className="product-details">
                <div className="image-slider">
                    <img src={process.env.PUBLIC_URL+product.imageUrl}  alt="" className='fullImg' />
                    {/* <div className="product-images" >
                    <img 
                        src={process.env.PUBLIC_URL+props.data[0]}  
                        alt="NA" 
                        onClick={() => handleImageClick('event',0)}
                        
                    /> 
                    <img 
                        src={process.env.PUBLIC_URL+props.data[1]} 
                        alt="NA" 
                        onClick={() => handleImageClick('event',1)}
                    />
                    <img 
                        src={process.env.PUBLIC_URL+props.data[2]} 
                        alt="NA" 
                        onClick={() => handleImageClick('event',2)}
                    />
                    <img 
                        src={process.env.PUBLIC_URL+props.data[3]} 
                        alt="NA" 
                        onClick={() => handleImageClick('event',3)}
                    />
                </div> */}

                </div>
                <div className="details">
                    <h2 className="product-brand">{product && product.productName}</h2>
                    <p className="product-short-des">{product && product.productDescription}</p>

                    <div style={{ width: '100%', position: 'absolute', bottom: '0px' }}>
                        <div>
                            <span className="product-price">Rs {product && product.price}</span>

                        </div>


                        {/* <p className="product-sub-heading">select size</p> */}

                        {/* onChange Handler chaiyo. state banaidine. products ma view button rakhne and tyo click garyo ki yo component render huncha */}


                        {/* <input type="radio" name="size" value="s" checked hidden id="s-size" />
                    <label className="size-radio-btn check">s</label>
                <input type="radio" name="size" value="m" hidden id="m-size" />
                    <label className="size-radio-btn">m</label>
                <input type="radio" name="size" value="l" hidden id="l-size" />
                    <label className="size-radio-btn">l</label>
                <input type="radio" name="size" value="XL" hidden id="XL-size" />
                    <label className="size-radio-btn">XL</label>
                <input type="radio" name="size" value="XXL" hidden id="XXL-size" />
                    <label className="size-radio-btn">XXL</label> */}
                        <div>
                            <button className="btn cart-btn" onClick={() => props.handleAddToCart('event', props.id)}>add to cart</button>
                            {/* <button className="btn">add to wishlist</button>   */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='rating'>
                <h2 className='ratingHead'>Rating</h2>
                <CustomerRating
                    id={props.id}
                />
            </section>

            <section className="detail-des">
                <h2 className="heading">Description</h2>
                <p className="des">
                    {product.productDescription}
                </p>
            </section>
        </div>
    )
}
