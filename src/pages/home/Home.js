import React from 'react'
import './Home.css'
import Features from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import {xAxisdata} from '../../dataCharts.js'
import Seller from '../../components/Seller/Seller.jsx'
import WidgetSm from '../../components/WidgetSm/WidgetSm.jsx'
import WidgetBg from '../../components/WidgetBg/WidgetBg.jsx'
export default function Home() {
  return (
    <div className='containerHome'>
      <Features/>
      <Chart grid  title="فروش ماهانه"  data={xAxisdata} dataKey="Sale"/>
      <Seller/>
      <div className='homeWidget'>
        <WidgetSm/>
        <WidgetBg/>
      </div>
    </div>
  )
}
