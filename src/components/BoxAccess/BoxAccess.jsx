import React from 'react'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import "./BoxAccess.css"
export default function BoxAccess(props) {
    return (
            <div className='box' style={{backgroundColor:props.color}}>
                <span className='boxTitle'>{props.title}</span>
                {props.icon}
            </div>
    )
}
