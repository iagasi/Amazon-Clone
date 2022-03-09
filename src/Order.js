import { collection, doc, onSnapshot, query, } from 'firebase/firestore'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import "./Orders.css"
import { db } from './firebase.config'
import { useStateValue } from './StateProvider'
import BasketProduct from "./BasketProduct"
function Order() {
  const [{ user }, dispatch] = useStateValue()
  const [order, setOrder] = useState([])

  console.log("ll");
  useEffect(() => {

    const q = query(collection(db, "users/" + user?.uid + '/orders'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push(doc.data())


      },[]);
      setOrder(temp)
    });






  }, [])
  
  return (
    <div className='order'>
      <h1 >Your orders  :   {order.length}</h1>

      <div >
        {order.map((singleOrder) =>

          <div className='order__all' >
            <h2>Order items: {singleOrder.basket.length}</h2>
            Order Created at :{moment.unix(singleOrder.created).format("MMM Do YYYY, h:mma")}
            <div className='order__bottom'>
{
singleOrder.basket.map((bItem)=><BasketProduct style={{}} props={bItem} hideButton={true}/>)

}


            </div>

          </div>

        )}
      </div>
    </div>
  )
}

export default Order