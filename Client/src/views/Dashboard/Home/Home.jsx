import React, { useEffect, useState,useRef } from 'react'
import CardP from './CardP'
import axios from 'axios'
import Noresult from '../../noresult'
import LoadingProjects from '../../Loading/LoadingProjects/LoadingProjects'
import CardsPre from '../Skills/CardsPre'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CardsTwo from './CardsTwo'
import Favo from './Favo'
import LoadingCards from '../../Loading/LoadingProjects/LoadingCards'
import LoadingDisplay from '../../Loading/LoadingProjects/LoadingDisplay'

function Home() {
    const [project,setProject] = useState([])
    const [loading,setLoading] = useState(false)
    const [ProductActive,setPrActive] = useState(0)
    const [search,setSearch] = useState([])
    const [pat,setPat] = useState("")
    const [keys,setKeys] = useState([])
    const [display,setdisplay] = useState(false)
    const Location = useLocation()
    const searchParams =new URLSearchParams(Location.search)
    const Params = searchParams.get("search")
    const Navigate = useNavigate()
    var searchBar = useRef(null)
    const doc = useRef(null)
    const toolsB1 = ["HTML","CSS","Javascript","React","jQuery"]
    const toolsB2 = ["Laravel","PHP","Nodejs","Ajax","Python","MYSQL","Mongodb"]
    useEffect(()=>{
        setLoading(false)
        axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/project`)
        .then(({data})=>{
          setProject(data.data)
          setSearch(data.data)
          // console.log(data.data[0]._id)
          setLoading(true)
        })
        .catch(err=>console.log(err))
        window.addEventListener('click',handleClickout)
      },[])

    useEffect(()=>{
        setInterval(()=>{
            setPrActive((el)=>{return el+1})
        },5000)

    }
    
    ,[])
    if(loading){
        if(ProductActive>=project.length){
            setPrActive(0)
        }
    }
    
    useEffect(()=>{
        if(Params){
          let filter = project.filter((s,i)=>s.Introduct.title.toLowerCase().includes(Params.toLowerCase()) || s.Introduct.tools.toLowerCase().includes(Params.toLowerCase()))
          setSearch(filter)
        }else{
            setSearch(project)
        }
      },[Params])

    const  handleClickout=(ev)=>{
        if(searchBar && searchBar.current.contains(ev.target)){
         if(window.location.pathname!="/projects"){
           var searchBar = useRef(null)
         }
        }else{
         setdisplay(false)
        }
       }
       const handelsearch = (e)=>{
        let item  = e.target.value
        if(item.length>0){
          setdisplay(true)
        }else{
          setdisplay(false)
        }
        setPat(item)
        console.log(item)
         let filter = project.filter((i,index)=>i.Introduct.title.toLowerCase().includes(item.toLowerCase()))
         setKeys(filter)
        }
  return (
    <div className='Home gen' ref={doc}>
      <header>
        <ul id='ulSpe'>
            <li id='searchM'><i class='bx bx-search-alt'></i>
            <div className='searchBard'>
            <input ref={searchBar} type="text" placeholder='Search everything ...' onChange={(e)=>handelsearch(e)}/>
            {display ? 
          <div className='resultbb'>
            <ul>
           {keys.length>0?keys.map((k,i)=><Link id="link" to={`?search=${k.Introduct.title}`}  key={i}><li>{k.Introduct.title}</li></Link>):<div className='pasRe'>No Result</div>}
            </ul>
          </div>
          :""}
            </div>
            
            </li>
            {toolsB1.map((t,i)=><li key={i} onClick={()=>Navigate(`?search=${t.toLowerCase()}`)}>{t}</li>)}
            <li><div className='prof'>H</div></li>
        </ul>
      </header>
      <div className='containerHome'>
        
        <div className='swiperHome' style={{backgroundImage:`url(${loading && project[ProductActive]? project[ProductActive].Introduct.image :""})`}}>
       {loading ?
        <div className='contMM'>
            <div className='info'>
            <div className='logo'>
                {/* <img src="images/combination-of-node.js-with-react-js-removebg-preview.png" alt="" /> */}
                <span>{loading && project[ProductActive]? project[ProductActive].Introduct.tools.toUpperCase().split(",")[0] :""}</span>
                <span>{loading && project[ProductActive]? project[ProductActive].Introduct.tools.toUpperCase().split(",")[1] :""}</span>
            </div>
            <div className='title'>
            {loading && project[ProductActive]? project[ProductActive].Introduct.title :""}
            </div>
            <div className='desc'>
            {loading && project[ProductActive]? project[ProductActive].Overview.desc[0].slice(0,200) :""} ...
            </div>
            <div className='btn'>
                <button>SEE DETAILS</button>
            </div>
            </div>
        </div>
        :<LoadingDisplay/>}
        </div>
        
        <div className='part2'>
        {loading ? project.length>0 ? project.map((e,index)=><CardP setPrActive={setPrActive} ProductActive={ProductActive} index={index} value={e}/>):<Noresult res={e.Params}/>:<LoadingCards/>}
        </div>
      </div>
      <div className='projects'>
        <h3>My simple projects</h3>
        {/* {Params ?
        <div className='res'>
        <b>
        {'Result: '+Params}
        </b>
        <button onClick={()=>Navigate("/projects")}>All</button>
        </div>
        :""}  */}
        {/* {loading ? project.length>0 ?<CardsPre project={search}/>:<Noresult res={e.Params}/>:<LoadingProjects/>} */}
        {loading ? search.length>0 ?<CardsTwo project={search}/>:<Noresult res={Params}/>:<LoadingProjects/>}
        {/* <Favo/> */}
        </div>
    </div>
  )
}

export default Home
