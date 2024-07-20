import React from 'react'
import './Analytics.css'
import AnalyticsSeller from '../../components/AnalyticsSeller/AnalyticsSeller'
import AnalyticsProduct from '../../components/AnalyticsProduct/AnalyticsProduct'
import Chart from '../../components/Chart/Chart'
export default function Analytics() {
 

  return (
    <div className='Analytics'>
        <div className="AnalyticsTop">
            <AnalyticsProduct  title="پر فروش ترین محصولات" info='Analyticsproduct'/>
            <AnalyticsSeller info='Seller' />
        </div>
        <div className='AnalyticsBottom'>
           <Chart grid title="محصولات" data='Analyticsproduct' dataKey="price"/>
        </div>
    </div>
  )
}
