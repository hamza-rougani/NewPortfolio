import React from 'react'
import { Link } from 'react-router-dom'

function CardTwo(e) {
  return (
    <div className='CardTwo'>
      <div className='image'>
        <img src={e.data.image} alt="" />
      </div>
      <div className='info'>
        <div className='p'>{e.data.tools}</div>
        <div className='title'>{e.data.title}</div>
    <div className='desc'>{e.data.desc}</div>
    <Link to={`/details/${e.id}`}><button>Explore more</button></Link>
      </div>
    </div>
  )
}

export default CardTwo
