import React from 'react'
import "./BasketProduct.css"
import { useStateValue } from './StateProvider'
function BasketProduct({props,index}) {

    const [state,dispatch8]=useStateValue()
    const {img,description,price,id}=props
 const deleteFromBasket=(e)=>{

    dispatch8({
        type:"DELETE_FROM_BASKET",
        index:index
    })

 }
    return (
        <div className='basket-product'>
            <section className='basket-product__left'>

                <img src={img} />
            </section>
            <section className='basket-product__right'>
                <div> <h2>{description}</h2>
                    <div className='basket-product__price'><small>$</small> {price}</div>
                    <p>{index}</p>

                </div>

                <button onClick={(e)=>deleteFromBasket(e)}>Remove from Basket</button>
            </section>
        </div>
    )
}

export default BasketProduct