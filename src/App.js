
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase.config';
import Header from "./Header"
import Home from './Home';
import Login from './Login';
import Order from './Order';
import Payment from './Payment';
import Register from './Register';
import { useStateValue } from './StateProvider';


function App() {

  const promise = loadStripe("pk_test_51KaOJBIQVZV5fkN4HcsBRXcTlt32Tevnrk7ErwhRsByFh4aF1xbQVmqekaUZsAaLf8Bo8t8EfaadEQ4myNrP9JH30008QQ9Kkj")


  const [state, dispatch] = useStateValue()
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user
        })
      }

      else {
        dispatch({
          type: "DELETE_USER",
        })
      }


    })
    console.log(state.user);
  }, [])
  return (

    <div className="app">
      <BrowserRouter>


        <Header />
        <Routes>
          <Route path='/orders' element={<Order/>}/>
          <Route path={"/payment"} element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }></Route>


          <Route path="login" element={<Login />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/' element={<> <Home /></>}>
          </Route>
        </Routes>




      </BrowserRouter>
    </div>

  );
}

export default App;
