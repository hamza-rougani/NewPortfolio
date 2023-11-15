import React, { useState } from 'react'
import Container1 from './Container1'
import Container2 from './Container2'
function Overview(e) {
  const [change,setChange] = useState(false)

  return (
    <div className='Overview'>
      <div className='informationP'>
          
      {e.p.title?
      e.p.title.map((o,index)=>{
        return (
          <>
      {
        index % 2==1?
        <Container2 title = {o} desc={e.p.desc[index]} index={index} />
        :
        <Container1 title = {o} desc={e.p.desc[index]} index={index} />
      }
      
     </>)
    })
      :""}
      
      
</div>
    </div>
  )
}

export default Overview
