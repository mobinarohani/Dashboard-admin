import React, { useState, useEffect } from 'react'
import './AnalyticsProduct.css'
import useFetch from '../../Hooks/useFetch'
export default function AnalyticsProduct({ title, info }) {

    const{getData , isPending}=useFetch(info)

    return (
        <div className='widgetContainer'>
            <div className='widgetSm'>
                <span className="widgetproductTitle">{title}</span>
                <table className='widgetBgTable'>
                    <tr className='widgetBgTr'>
                        {getData.length!=0 && getData[1].number && <th className='widgetBgItemTh'>تعداد</th>}
                        <th className='widgetBgItemTh'>قیمت</th>
                        <th className='widgetBgItemTh'>محصول</th>
                    </tr>
                    {getData.map(item => (
                        <tr className='widgetBgTr'>
                            {item.number && <td className='widgetBgItem'>{item.number}</td>}
                            <td className='widgetBgItem'>{item.price}</td>
                            <td className='widgetBgItem'>
                                <span className="widgetproductUsername">{item.name}</span>
                                <img src={item.img} alt="profile" className='widgetproductProfile' />
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
