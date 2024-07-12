import React ,{useState,useEffect} from 'react'
import './Home.css'
import Features from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import Seller from '../../components/Seller/Seller.jsx'
import WidgetSm from '../../components/WidgetSm/WidgetSm.jsx'
import WidgetBg from '../../components/WidgetBg/WidgetBg.jsx'
export default function Home() {

  const[chartdata,setchartData]=useState()
  const[newUsers,setnewUsers]=useState()
  const[usertransActions,setusertransActions]=useState()

  useEffect(()=>{
    async function fetchchartData(){
      await fetch('http://localhost:3000/xAxisdata')
      .then(respons=>respons.json())
      .then(data=>setchartData(data))
  } 

    fetchchartData()
  },[])


  useEffect(()=>{
      async function fetchnewUsers(){
        await fetch('http://localhost:3000/NewUsers')
        .then(respons=>respons.json())
        .then(data=>setnewUsers(Object.entries(data)))
      } 
  
      fetchnewUsers()
    },[])

    useEffect(()=>{
      async function fetchusertransActions(){
          await fetch('http://localhost:3000/transActions')
          .then(respons=>respons.json())
          .then(data=>setusertransActions(Object.entries(data)))
      }
      fetchusertransActions()
    },[])

    console.log(chartdata);

  return (
    <div className='containerHome'>
      <Features/>
      <Chart grid  title="فروش ماهانه"  data={chartdata} dataKey="Sale"/>
      <Seller/>
      <div className='homeWidget'>
        <WidgetSm info={newUsers}/>
        <WidgetBg info={usertransActions}/>
      </div>
    </div>
  )
}
