import React from 'react'
import '../WidgetBg/WidgetBg.css'
import useFetch from '../../Hooks/useFetch'
export default function AnalyticsSeller({info}) {

    const{getData , isPending}=useFetch(info)


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
                {isPending && <div>Loding ...</div>}
                {getData.map(item => (
                    <tr className='widgetBgTr'>
                        <td className='widgetBgItem'>
                          {item.status}
                        </td>
                        <td className='widgetBgItem'>{item.transaction}</td>
                        <td className='widgetBgItem'>{item.email}</td>
                        <td className='widgetBgItem'>
                            <span className='widgetBgCustomer'>{item.username}</span>
                            <img src={item.img} alt="" className='widgetBgProfile' />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
