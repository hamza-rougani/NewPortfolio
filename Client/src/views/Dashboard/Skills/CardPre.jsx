import React from 'react'
import { Link } from 'react-router-dom'

function CardPre(e) {
  return (
  
 <div className='language'>
 <div className='logo'>
   <img src={e.data.image} alt="" />
 </div>
 <div className='text'>
 <h4>{e.data.title}</h4>
 <div className='span'>{e.data.desc}</div>
 <Link to={e.data.resource}><button>Explore</button></Link>
 </div>
</div>

  )
}

export default CardPre
