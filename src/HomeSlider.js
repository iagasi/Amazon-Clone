import React, { useEffect, useRef, useState } from 'react'
import "./HomeSlider.css"
function HomeSlider() {
    const [move, setMove] = useState(0)
    const timerRef = useRef(0)

    function reset() {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = 0
        }
    }
    useEffect(() => {
        reset()
        timerRef.current = setTimeout(() => moveHandler(true), 5500)

    }, [move])

    if (move >= 4500) { setMove(0); }
    const moveHandler = (switcher) => {
        if (switcher) { setMove((prev) => prev + 1500) }
        if (!switcher) { setMove((prev) => prev - 1500) }
    }
    return (
        <div className='home-slider__main'>

  <div style={{ transform: `translateX(-${move}px)` }} className='home-slider'>
            <img className='home-slider__mainImage' src="https://www.apple.com/v/iphone-13/d/images/meta/iphone-13_overview__fpjuzw2ncqmy_og.png?202111170918"></img>

            <img className='home-slider__mainImage' src="https://images.ctfassets.net/t014ej9w3ur1/FhRESVijDw74LIkHIPxE2/081c5cc577116f61636fee7af2287fce/shutterstock_1569353527.jpg"></img>
            <img className='home-slider__mainImage' src="https://cdn.mos.cms.futurecdn.net/yYAwGNkXjtN4un5UyPyhP6.jpg"></img>

        </div>
  

        </div>
      )  
}

export default HomeSlider