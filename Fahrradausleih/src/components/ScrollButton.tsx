import React from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './styles/ScrollButton.scss'
import { useEffect, useState } from 'react';
  
function ScrollButton(){
  const[ScrollButton, setBackToTopButton] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        setBackToTopButton(true)
      }else{
        setBackToTopButton(false)
      }
    })

  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return <div >
    {ScrollButton &&(
      <button className='btn'
        onClick={scrollUp}
      >
        ^
      </button>
    )}
  </div>
}
  
export default ScrollButton;