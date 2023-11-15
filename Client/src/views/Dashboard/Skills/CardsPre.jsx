import React from 'react'
import CardPre from './CardPre'

function CardsPre(e) {
  return (
    <div className='languages'>
      {e.skills.map((data,index)=><CardPre key={index} data={data}/>)}
    </div>
  )
}

export default CardsPre
