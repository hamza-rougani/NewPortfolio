import React from 'react'
import { useStateContext } from '../../../Context/Provider'
const Icons = [
    "one.png",
    "number-2.png",
    "number-3.png",
    "four.png",
    "number-5.png",
    "six.png",
    "seven.png",
    "number-8.png",
    "number-9.png",
]
function Container1(e) {
  const {setActiveImage} =  useStateContext()
  const handelImage = (ev)=>{
    document.body.classList.add("imageActive")
    setActiveImage(ev)
  }
  return (
    <div className='part'>
    <div className='pa'>
      <div className='logo'>
        <img id="pic" src="http://localhost:3001/images/crayon.png" alt="" />
      </div>
      <div className='imagePr testtest'>
        {e.image ?
      <img onClick={()=>handelImage(e.image)} id="pic" src={e.image} alt="" />
        :
      e.title}
      </div>
      
    </div>
    <div className='pa2'>
      <div className='logo'>
        <img src={`http://localhost:3001/images/numbers/${Icons[e.index]}`} alt="" />
      </div>
      <h4>{e.title}</h4>
  {e.desc.split("//").length>=2? 
        <ul id='ulPost'>
        {
      e.desc.split("//").map((l,index)=>{
        return(
          <li id='spanPPP'>{l}</li>
        )
      })
    }
      </ul>
      : <span id='spanPPP'>{e.desc}</span>
      }
        
     
    </div>
  </div>
  )
}

export default Container1
