import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import { signOut } from 'firebase/auth';
import { auth } from './firebase.config';
import { Store } from '@material-ui/icons';


function Header() {

    const [state, dispatch] = useStateValue()
    const navigate = useNavigate()

    const authHandler = () => {
        if (state.user) { signOut(auth); dispatch({type:"DELETE_USER"})}
        else { navigate("/login") }

    }
    return (
        <div className="header">
            <NavLink to="/">
                <img className="header__logo" src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"></img>

            </NavLink>
            <div className='header__search'>
                <input className='header__searchIn' />
                <div className='header__searchIc'><SearchIcon /></div>
            </div>
            <div className='header__nav'>
                <div className='header__option'>Hello {state.user?.email}
                    <span onClick={authHandler} className='header__optionLineDown '>{state.user ? "Sighn-Out" : "Sighn in"}</span>


                </div>
                <NavLink className="NavLink" to="/orders">
                <div className='header__option'>Your
                    <span className='header__optionLineDown'>Order</span>
                </div></NavLink>
               
            </div>
            <NavLink to="checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__basketCount'>{state.basket?.length}</span>
                </div>
            </NavLink>

        </div>
    )
}

export default Header