import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
function Product({ props }) {
  const { img, price, name, id, title } = props
  console.log(title);
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        img: img,
        description: ""
      }
    })
  }
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__raiting'>
          <p> &#9734;</p>
          <p> &#9734;</p>
          <p> &#9734;</p>
        </div>
      </div>
      <img
        className='product__image'
        src={img}></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>

  )
}

export default Product