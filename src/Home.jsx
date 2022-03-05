import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <img className='home__mainImage' src="https://cdn.mos.cms.futurecdn.net/yYAwGNkXjtN4un5UyPyhP6.jpg"></img>

      <div className='home__container'>


        <div className='home__row'>
          <Product />
          <Product />


        </div>
        <div className='home__row'>
          <Product />
          <Product />
          <Product /></div>
        <div className='home__row'>
        <Product />
        </div>
      </div>
    </div>
  )
}

export default Home