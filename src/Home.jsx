import React from 'react'
import "./Home.css"
import HomeSlider from './HomeSlider'
import Product from './Product'
import { useStateValue } from './StateProvider'


function Home() {
  const [{ products }] = useStateValue()




  return (
    <div className='home'>
      <HomeSlider />


      <div className='home__container'>

        <div className='home__11'>

          {products.map((el, index) => {

            if (index <= 1) { return <div className='home__1'> <Product props={el} /></div> }

          })}
        </div>

        <div className='home__22'>

          {products.map((el, index) => {

            if (index >= 2 && index <= 4) { return <div className='home__2'> <Product props={el} /></div> }

          })}
        </div>





        {/* <div className='home__row'>
        
          <Product />
</div>

        
        <div className='home__row'>
          <Product />
          <Product />
          <Product />
          </div>
        <div className='home__row'>
        <Product />
        </div> */}
      </div>
    </div>
  )
}

export default Home