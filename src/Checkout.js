import React from 'react'
import BasketProduct from './BasketProduct'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const[{basket}]=useStateValue()
console.log(basket);
    return (
        <div className='checkout'>
             <div className='checkout__container'> 
            <section className='checkout__left'>
                <img className='checkout__img' src="https://cdn.andnowuknow.com/mainStoryImage/amazon_newstore_111119.png?2elFDH.NARL3RqUKy0Nq2e.e1THgJeWI"></img>

                <div className='checkout__title'>
                    <h2> Shoping Basket</h2>

    </div>
   
{            
basket.map((el,index)=><BasketProduct props={el} index={index}/>)}
            </section>

            <section className='checkout__right'>
{/* <h2> Subtotal</h2> */}
<Subtotal/>
            </section>
            </div>
        </div>
    )
}

export default Checkout