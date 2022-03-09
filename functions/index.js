const functions = require("firebase-functions");

const express=require("express")
const cors=require("cors");
const { response } = require("express");


const secret="sk_test_51KaOJBIQVZV5fkN4qamkj65nfVuTfeD2zFvThVKYkmUv4zT23KRE43zDaMSdKewgLYvuCexhfeKEZob72LWlYZhd007NddSIh2"
const stripe=require("stripe")(secret)
 const app=express()
 app.use(cors({origin:true}))
app.use(express.json())



app.get("/",(req,res)=>{res.send("hello world000")})


app.post('/payments/create', async (req, res) => {
   const total=req.query.total
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
        payment_method_types: ['card'],
      });
  console.log(paymentIntent.url);
  console.log(total);
    res.json( paymentIntent);
  });
exports.api=functions.https.onRequest(app)

