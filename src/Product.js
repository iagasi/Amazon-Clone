import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
function Product() {
  const [state,dispatch]=useStateValue()

  const addToBasket=()=>{
dispatch({
  type:"ADD_TO_BASKET",
  item:{
    id:"11",
    title:"title",
    price:54,
    img:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    description:"eeeeeeeeeeeee"
  }
})
  }
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
    <button onClick={addToBasket}>Add to basket</button>
    </div>

  )
}

export default Product