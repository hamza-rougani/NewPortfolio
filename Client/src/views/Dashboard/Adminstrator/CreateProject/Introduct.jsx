import React, { useState } from 'react'
import { useStateContext } from '../../../../Context/Provider'
import { useParams } from 'react-router-dom'

function Introduct(e) {
  const {id} = useParams()
  const {setintroduct,setImage,introduct,Image} = useStateContext()
  // const [info,setinfo] = useState(e.p?e.p:{title:"",desc:"",tools:""}) 
  const [info,setinfo] = useState(e.p?e.p:introduct ? introduct.title.length>0 ? introduct:{title:"",desc:"",tools:""}:{title:"",desc:"",tools:""}) 
  const [image,setImageI] = useState(e.p?e.p.image:Image ? Image:"") 

  const handleConfirme = ()=>{
    setImage(image)
    setintroduct(info)
  }
console.log(info)
  return (
    <div className='Overview introduct'>
      <div className='addline'>
        <div className='flex'>
        <div className='addform'>
          <form encType='multipart/form-data'>
          <input onChange={(e)=>setinfo({...info,title:e.target.value})} value={info.title} id='i' type="text" placeholder='title'/>
          <input onChange={(e)=>setinfo({...info,desc:e.target.value})} value={info.desc} id="i" placeholder='Description'></input>
          <input onChange={(e)=>setinfo({...info,tools:e.target.value})} value={info.tools} id="i" placeholder='tools'></input>
          <input onChange={(e)=>setImageI(e.target.files[0])} type="file" name="image" id='image' style={{display:"none"}}/>
          <label htmlFor="image"><div className='addImage'><div id='icons'><img src={`${import.meta.env.VITE_API_BASE_URL}/images/photos.png`} alt="" /></div>Add image</div></label>
          </form>
          <div className='btns'> 
          
          <button className="btn clean" onClick={()=>setinfo({title:"",desc:"",tools:"",image:""})}>Clean</button>
          <button className="btn add" onClick={handleConfirme}>Confirme</button>
          </div>
        </div>
        <div className='languages'>
    <div className='language'>
 <div className='logo'>
   <img src={id ?
       typeof(image)=="string"?
       `${import.meta.env.VITE_API2_BASE_URL}/${info.image}`
       :URL.createObjectURL(image) 
       :image.length!=0 ? 
       URL.createObjectURL(image):"https://actogmbh.com/files/no-product-image.png"} alt="" />
 </div>
 <div className='text'>
 <h4>{info.title!="" ?info.title:"title"}</h4>
 <div className='span'>{info.desc!="" ?info.desc:"description"}</div>
 <div className='tools'>{info.tools!="" ?info.tools:"xxx,xxx,xxx"}</div>
 <button>Explore</button>
 </div>
 </div>
</div>
    </div>
      </div>
    </div>
  )
}

export default Introduct





