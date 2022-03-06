
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase.config';
import Header from "./Header"
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
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
 })}  
      
     
    })
    console.log(state.user);
  }, [])
  return (

    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
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
