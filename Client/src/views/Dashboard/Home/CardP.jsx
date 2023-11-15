import React from 'react'

function CardP(e) {
   
  return (
    <div className={e.index==e.ProductActive ? 'car active' :'car'} onClick={()=>e.setPrActive(e.index)}>
                <div className='imgZ'>
                    <img src={e.value.Introduct.image} alt="" />
                </div>
                <div className='title'>
                    <span className='to'>Free Movies for you</span>
                    <span className='to'>2023-4-13</span>
                </div>
            </div>
  )
}

export default CardP
