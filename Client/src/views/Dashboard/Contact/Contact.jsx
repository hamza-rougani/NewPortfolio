import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='Contact gen'>
       <h2>Contact me :</h2>
       <div className='c'><div id="Gicons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/gmail-new-icon5198.jpg`} alt="" /></div>hamzarougani501@gmail.com</div>
       <div className='c'><div id="Gicons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/6596115.png`} alt="" /></div>0767287673</div>
       <div className='c'><div id="Gicons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/702300.png`} alt="" /></div><Link id='linkW' to="https://www.linkedin.com/in/hamza-rougani-4ab627294/">hamza rougani</Link></div>
       <div className='c'><div id="Gicons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/github-icon-2048x1988-jzvzcf2t.png`} alt="" /></div><Link id='linkW' to="https://github.com/hamza-rougani">hamza-rougani</Link></div>
    </div>
  )
}

export default Contact
