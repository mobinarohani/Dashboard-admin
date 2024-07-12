import React, { useState ,useEffect} from 'react'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BoxAccess from '../BoxAccess/BoxAccess';
import './WidgetSm.css';
export default function WidgetSm(info) {
    const [boxInfo, setBoxInfo] = useState([
        { id: 1, icon: <Inventory2Icon className='boxAccessIcon' />, title: 'پر فروش ترین محصول', color: '#FCDC94' },
        { id: 2, icon: <AccountCircleIcon className='boxAccessIcon' />, title: 'کاربران فعال ', color: '#C8CFA0' },
        { id: 3, icon: <StoreIcon className='boxAccessIcon' />, title: 'انبار', color: '#78ABA8' }
    ])

   const[newUserSM,setnewUserSM]=useState([])

   useEffect(()=>{

    if(info.info){
        setnewUserSM(info.info)
    }
        
   })
    
    return (
        <div className='widgetContainer'>
            <div className="boxContainer">
                {boxInfo.map(item => (
                    <BoxAccess {...item} />
                ))}
            </div>
            <div className='widgetSm'>
                <span className="widgetSmTitle">کاربران جدید</span>
                <ul className="widgetSmList">
                    {
                        newUserSM.map(user => (
                            <li className="widgetSmListItem">
                                <img src={user[1].img} alt="profile" className='widgetSmProfile' />
                                <div className="widgetSmInfo">
                                    <span className="widgetSmUsername">{user[1].username}</span>
                                    <span className="widgetSmJob">{user[1].job}</span>
                                </div>
                                <button className="widgetSmbtn">
                                    <VisibilityIcon className='widgetsmIcon' />
                                </button>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
