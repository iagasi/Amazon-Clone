import React from 'react'
import "./Product.css"
function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>g product descriptioninfirmation og product description</p>
        <p className='product__price'>
          <small>$</small>
          <strong>11.99</strong>
        </p>
        <div className='product__raiting'>
<p> &#9734;</p>
<p> &#9734;</p>
<p> &#9734;</p>
        </div>
      </div>
<img 
className='product__image'
src="https://images-na.ssl-images-amazon.com/images/I/91oy4zw56KL.jpg"></img>
    <button>Add to basket</button>
    </div>

  )
}

export default Product