import React from 'react'
import CardTwo from './CardTwo'

function CardsPre(e) {
  return (
    <div className='languages'>
      {e.project.map((data,index)=><CardTwo key={index} id={data._id} data={data.Introduct}/>)}
    </div>
  )
}

export default CardsPre
