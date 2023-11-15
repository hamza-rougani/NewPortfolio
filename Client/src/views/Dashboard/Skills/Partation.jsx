import React from 'react'
import CardsPre from "./CardsPre"
function Partation(e) {
  return (
    <div className='front-end'>
        <h2>{e.title}</h2>
        <span>{e.desc}</span>
        <br />
        <CardsPre skills={e.data}/>
      </div>
  )
}

export default Partation
