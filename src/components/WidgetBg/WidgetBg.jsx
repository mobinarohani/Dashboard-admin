import React ,{useState,useEffect}from 'react'
import './WidgetBg.css'
export default function WidgetBg(info) {
    const Button = ({ type }) => {
        return <button className={"widgetBgButtton " + type}>{type}</button>
    }

    const[usertransActions,setusertransActions]=useState([])

    useEffect(()=>{
        if(info.info){
            setusertransActions(info.info)
        }
    })


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
                {usertransActions.map(item => (
                    <tr className='widgetBgTr'>
                        <td className='widgetBgItem'>
                            <Button type={item[1].status}/>
                        </td>
                        <td className='widgetBgItem'>{item[1].amount}</td>
                        <td className='widgetBgItem'>{item[1].data}</td>
                        <td className='widgetBgItem'>
                            <span className='widgetBgCustomer'>{item[1].customer}</span>
                            <img src={item[1].img} alt="" className='widgetBgProfile' />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
