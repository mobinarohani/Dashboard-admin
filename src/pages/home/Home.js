import React from 'react'
import './Home.css'
import Features from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import {xAxisdata} from '../../dataCharts.js'
import Seller from '../../components/Seller/Seller.jsx'
export default function Home() {
  return (
    <div className='containerHome'>
      <Features/>
      <Chart grid  title="فروش ماهانه"  data={xAxisdata} dataKey="Sale"/>
      <Seller/>
    </div>
  )
}
