import React from 'react'
import './WidgetBg.css'
import useFetch from '../../Hooks/useFetch'
export default function WidgetBg({info}) {
    const Button = ({ type }) => {
        return <button className={"widgetBgButtton " + type}>{type}</button>
    }

    const{getData , isPending}=useFetch(info)

    return (
        <div className='widgetBg'>
            <h3 className="widgeBgtTitel">آخرین تراکنش</h3>
            <table className='widgetBgTable'>
                <tr className='widgetBgTr'>
                    <th className='widgetBgItemTh'>جزئیات</th>
                    <th className='widgetBgItemTh'>مقدار</th>
                    <th className='widgetBgItemTh'>تاریخ</th>
                    <th className='widgetBgItemTh'>مشتری</th>
                </tr>
                {isPending && <div>Loding ...</div>}
                {getData.map(item => (
                    <tr className='widgetBgTr'>
                        <td className='widgetBgItem'>
                            <Button type={item.status}/>
                        </td>
                        <td className='widgetBgItem'>{item.amount}</td>
                        <td className='widgetBgItem'>{item.data}</td>
                        <td className='widgetBgItem'>
                            <span className='widgetBgCustomer'>{item.customer}</span>
                            <img src={item.img} alt="" className='widgetBgProfile' />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
