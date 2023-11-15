import React, { useEffect } from 'react'

function CardOfilmage(e) {
    useEffect(()=>{
        document.querySelector(".xx").addEventListener("click",handelX)
    })
    const handelX = ()=>{
        document.body.classList.remove("imageActive")
    }
  return (
    <div className='CardOfilmage'>
        <i class='bx bx-x xx'></i> 
      <div className='ImageC'>
        <img src={e.image} alt="" />
      </div>
    </div>
  )
}

export default CardOfilmage
