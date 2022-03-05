import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"></img>
            <div className='header__search'>
            <input className='header__searchIn' />
            <div className='header__searchIc'><SearchIcon/></div>
</div>
            <div className='header__nav'>
                <div className='header__option'>Hello
                 <span className='header__optionLineDown '> User</span>
                </div>
                <div className='header__option'>Your 
                <span className='header__optionLineDown'>Order</span>
                </div>
                <div className='header__option'>Best
                <span className='header__optionLineDown'>Prime</span>
                </div>
            </div>
            <div className='header__optionBasket'>
<ShoppingBasketIcon/>
<span className='header__basketCount'>0</span>
            </div>
        </div>
    )
}

export default Header