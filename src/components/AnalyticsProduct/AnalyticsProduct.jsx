import React ,{useState,useEffect}from 'react'
import './AnalyticsProduct.css'
export default function AnalyticsProduct(info) {
   const[getproduct,setgetproduct]=useState([])

   useEffect(()=>{

    if(info.info){
        setgetproduct(info.info)
    }
        
   })

   console.log(getproduct);
    
    return (
        <div className='widgetContainer'>
            <div className='widgetSm'>
                <span className="widgetproductTitle">پر فروش ترین محصولات</span>
                <ul className="widgetproductList">
                    {
                        getproduct.map(item => (
                            <li className="widgetproductListItem">
                                <span className="widgetproductUsername">{item.price}</span>
                                <div className="analyticproduct">
                                    <span className="widgetproductUsername">{item.name}</span>
                                    <img src={item.img} alt="profile" className='widgetproductProfile' />
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
