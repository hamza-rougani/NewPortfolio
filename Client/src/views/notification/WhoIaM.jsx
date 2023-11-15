import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
function WhoIaM() {
    
    useEffect(()=>{
  const hamza = document.querySelector(".hamza");
 const message = hamza.querySelector(".message");
 const XXXXX = hamza.querySelector(".XXXXX");
 XXXXX.onclick = ()=>{
    hamza.style.display = "none"
 }
 const btn = document.getElementById("btnH");
  var value = "Hello, I am Hamza. If you have any questions, visit my Profile page ,Thank you";
  var i = 0;

  const Interval = setInterval(()=>{
    if(i<value.length){
        message.innerHTML += value[i];
     i++
    }else{
        clearInterval(Interval)
        btn.style.display = "block"
        
    }
  },100)
  
    },[])
  return (
    <div className='hamza'>
       <i class='bx bx-x XXXXX'></i>
       <div className='logo'>
                <img src="images/DSC_0011 copie.jpg" alt="" />
            </div>
            <div className='name'>HAMZA ROUGANI</div>
            <div className='message'>
                
            </div>
            <Link id='linkW' to="/profile"><button id='btnH'>Who I am ?</button></Link>
    </div>
  )
}

export default WhoIaM
