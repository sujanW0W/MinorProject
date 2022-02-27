import React from 'react'
import './ProductDetails.css'


export default function ProductDetails(props) {

    const [value,setValue] = React.useState(0)

    const handleImageClick= (event, newValue) => {
        setValue(newValue);
    }

  return (
    <div>
        <section className="product-details">
            <div className="image-slider">
                <img src={process.env.PUBLIC_URL+props.data[value]} alt="" className='fullImg'/>
                <div className="product-images" >
                    <img 
                        src={process.env.PUBLIC_URL+props.data[0]} 
                        className="active" 
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
                </div>
            </div>
            <div className="details">
                <h2 className="product-brand">Art & Craft</h2>
                <p className="product-short-des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate
                    aliquam non, voluptates ratione nostrum, dolorum esse dolores similique necessitatibus odio tenetur eius
                    reiciendis fugiat quisquam sit, architecto nam expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quod possimus est incidunt velit exercitationem quo modi ea! Dicta dolore eius culpa ratione suscipit incidunt magni distinctio tempore blanditiis eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio quae debitis nihil et adipisci, temporibus dolore nobis eligendi, enim o</p>
                <div>
                    <span className="product-price">$99</span>
                    <span className="product-actual-price">$199</span>
                    <span className="product-discount">( 50% Off)</span> 
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
                <div style={{marginTop:'auto'}}>
                    <button className="btn cart-btn">add to cart</button>
                    <button className="btn">add to wishlist</button>  
                </div>
               
            </div>
        </section>

        <section className="detail-des">
            <h2 className="heading">Description</h2>
            <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum voluptatibus facere odit, a
                blanditiis id veritatis aspernatur perspiciatis neque? Velit ipsa, voluptatem cum obcaecati illo placeat
                atque eos Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias corporis quisquam nihil quos
                nisi quidem incidunt alias officiis impedit numquam rerum aut, sequi hic assumenda, ut laudantium odit eum
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore distinctio officiis voluptates
                blanditiis, magnam dolorem beatae repellendus corrupti est quisquam corporis necessitatibus rem nisi
                quibusdam dolores vero esse? Excepturi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                maxime sit rem vel dolorum natus modi consectetur esse quo ratione officiis dicta ullam quidem illo,
                repellendus quae hic nesciunt veniam!
            
            </p>
        </section>
    </div>
  )
}
