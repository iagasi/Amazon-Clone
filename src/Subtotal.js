import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import "./Subtotal.css"
function Subtotal() {
    const[{basket}]=useStateValue()
    return (
        <div className='subtotal'>
            {/* <CurrencyFormat
                renderText={() => ( */}
                    <>
                      <p className='subtotal__total'>
                           Subtotal({basket?.length} - items)  <smal>total</smal>  $ {basket.reduce((prev,cur)=>prev+cur.price,0)}
                    </p>
                    <small className='subtotal__gift'>
                              <input type="checkbox"/>
                    This order contains Gift
                    </small>
              
                   
                    </>
                  

    {/* )} */}


{/* decimalScale={2}
                value={245} 
                displayType={'text'}
                 thousandSeparator={true}
                  prefix={'$'}
                 /> */}






<button className='subtotal__button'>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal