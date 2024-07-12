import React ,{useState , useEffect} from 'react'
import './Analytics.css'
import AnalyticsSeller from '../../components/AnalyticsSeller/AnalyticsSeller'
import AnalyticsProduct from '../../components/AnalyticsProduct/AnalyticsProduct'
import Chart from '../../components/Chart/Chart'
export default function Analytics() {

  const[getSellerData,setgetSellerData]=useState([])
  const[getProductData,setgetProductData]=useState([])
  const[chartdata,setchartData]=useState()
  useEffect(()=>{
    async function fetchSellerData(){
      await fetch('http://localhost:3000/Seller')
      .then(respons=>respons.json())
      .then(data=>setgetSellerData(Object.entries(data)))
    }
    fetchSellerData()
  },[])

  useEffect(()=>{
    async function fetchProductData(){
      await fetch('http://localhost:3000/Analyticsproduct')
      .then(respons=>respons.json())
      .then(data=>setgetProductData(data))
    }
    fetchProductData()
  },[])

  useEffect(()=>{
    async function fetchchartData(){
      await fetch('http://localhost:3000/xAxisdata')
      .then(respons=>respons.json())
      .then(data=>setchartData(data))
  } 

    fetchchartData()
  },[])

  console.log(getProductData);

  return (
    <div className='Analytics'>
        <div className="AnalyticsTop">
            <AnalyticsProduct info={getProductData}/>
            <AnalyticsSeller info={getSellerData}/>
        </div>
        <div className='AnalyticsBottom'>
           <Chart grid title="محصولات" data={getProductData} dataKey="price"/>
        </div>
    </div>
  )
}
