import { DoorBack } from '@mui/icons-material'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BasketProduct from './BasketProduct'
import http from './http/axios'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import { db } from './firebase.config'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
function Payment() {
    const navigate = useNavigate()
    const [{ user, basket }, dispatch] = useStateValue()
    const basketTotal = basket.reduce((prev, curr) => prev + curr.price, 0)
    

    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setClientSecret] = useState()
    const [processing, setProcessing] = useState()

    const [suceeded, setSuceeded] = useState()

    const [paymentResponse, setPaymentResponse] = useState()

    const handleSubmit = async (e) => {
        console.log(!user);
   if(!user){
setError("You must be logged in to make payments")
return
   }


        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(async ({ paymentIntent, error }) => {

            if (paymentIntent) {
                setSuceeded(true)
                setError(null)
                setProcessing(false)
                try {

                    const docref = doc(db, `users/${user?.uid}/orders/${paymentIntent.id}`)
                    setDoc(docref, { 
                        basket:basket,
                        amount:paymentIntent.amount,
                        created:paymentIntent.created
                     })
                 
                 
                    dispatch({ type: "EMPTY_BASKET" })
                    navigate("/orders")
                }
                catch (e) { console.log(e); }


            }
            if (error) {
                setSuceeded(false)
                setError(error)
                alert(error.message);
            }

        })
    }


    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }



    useEffect(() => {
        const getClientSecret = async () => {
            const response = await http.post(`/payments/create?total=${basketTotal * 100}`)
            setClientSecret(response.data.client_secret)
        }
        getClientSecret()
    }, [basket])



    console.log(clientSecret);
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout ({basket?.length})</h1>
                <small style={{color:"red"}}>test Card number -is  4242 4242 4242 4242   csv$date any </small>
                <section className='payment__section'>

                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className='payment__adress'>
                        <p> email:  {user?.email}</p>
                        <p> Mc Droud 13</p>
                        <p> New Yourk</p>
                    </div>
                </section>




                <section className='payment__section'>
                    <div className='payment__title'>
                        <h3> Rewiew Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item, index) => <BasketProduct props={item} index={index} />)}
                    </div>
                </section>
                <section className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment method</h3>

                    </div>
                    <div className='payment__details'>

                        <CardElement onChange={handleChange} />

                        <div className='paymant__priceContiner'>
                            <h3>Order Total:  {basketTotal}  $</h3>

                        </div>

                    </div>
                    <button onClick={handleSubmit} disabled={disabled}><h2>PAY</h2></button>

                </section>
                <h1 style={{ color: "red" }}> {error}</h1>
                <h1 style={{ color: "blue" }}> {paymentResponse}</h1>
            </div>
        </div>
    )
}

export default Payment