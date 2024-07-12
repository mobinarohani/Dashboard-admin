import React ,{useState,useEffect}from 'react'
import '../WidgetBg/WidgetBg.css'
export default function AnalyticsSeller(info) {

    const[userSeller,setuserSeller]=useState([])

    useEffect(()=>{
        if(info.info){
            setuserSeller(info.info)
        }
    })

    return (
        <div className='widgetBg'>
            <h3 className="widgeBgtTitel">فرشندگان برتر</h3>
            <table className='widgetBgTable'>
                <tr className='widgetBgTr'>
                    <th className='widgetBgItemTh'>وضعیت</th>
                    <th className='widgetBgItemTh'>فروش</th>
                    <th className='widgetBgItemTh'>ایمیل</th>
                    <th className='widgetBgItemTh'>نام</th>
                </tr>
                {userSeller.map(item => (
                    <tr className='widgetBgTr'>
                        <td className='widgetBgItem'>
                          {item[1].status}
                        </td>
                        <td className='widgetBgItem'>{item[1].transaction}</td>
                        <td className='widgetBgItem'>{item[1].email}</td>
                        <td className='widgetBgItem'>
                            <span className='widgetBgCustomer'>{item[1].username}</span>
                            <img src={item[1].img} alt="" className='widgetBgProfile' />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
