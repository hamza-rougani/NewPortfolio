import React, { useEffect, useRef, useState } from 'react'
import Menu from "../views/Dashboard/Menu"
import { Outlet } from 'react-router-dom'
import WhoIaM from '../views/notification/WhoIaM'
import CardOfilmage from '../views/CardOfilmage'
import { useStateContext } from '../Context/Provider'

function Dashboard() {
  const [Dis,setDis] = useState(false)
  const {ActiveImage} = useStateContext()
  console.log(ActiveImage)
  useEffect(()=>{
    window.addEventListener("click",handelClicked)
    setTimeout(()=>{
        setDis(true)
    },3000)
  },[])
  const handelClicked = (e)=>{
    if(!document.querySelector(".menuBtn").contains(e.target)){
      document.body.classList.remove("menuAc")
    }
  }
  return (
    <div className='Dashboard'>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <Menu/>
      <div className='fakemenu'></div>
      <button   className='menuBtn' onClick={()=>document.body.classList.toggle("menuAc")}><i class='bx bx-menu'></i><i class='bx bx-x' ></i></button>
      <div className='container'>
      <Outlet/>
      </div>
      {Dis?<WhoIaM/>:""}
      <CardOfilmage image = {ActiveImage ?ActiveImage:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}/>
    </div>
  )
}

export default Dashboard 
