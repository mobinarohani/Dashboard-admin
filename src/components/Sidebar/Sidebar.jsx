import React from 'react'
import './Sidebar.css'
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">داشبورد</h3>
                <ul className="sidebarList">
                    <NavLink to="/" className="link">
                    <li className="sidebarListItem">
                        خانه    
                        <LineStyleIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                    <NavLink to="" className="link">
                    <li className="sidebarListItem">
                        ارزیابی فروش    
                        <TimelineIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">دسترسی سریع</h3>
                <ul className="sidebarList">
                    <NavLink to="/userlist" className="link">
                    <li className="sidebarListItem">
                        کاربران    
                        <PermIdentityIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                    <NavLink to="/newuser" className="link">
                    <li className="sidebarListItem">
                        کاربر جدید   
                        <PermIdentityIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                    <NavLink to="/products" className="link">
                    <li className="sidebarListItem">
                        محصولات  
                        <StorefrontIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                    <NavLink to="" className="link">
                    <li className="sidebarListItem">
                        گزارشات  
                        <BarChartIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">پیغام ها</h3>
                <ul className="sidebarList">
                    <NavLink to="" className="link">
                    <li className="sidebarListItem">
                        تیکت ها   
                        <ChatBubbleOutlineIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                    <NavLink to="" className="link">
                    <li className="sidebarListItem">
                        نظرات  
                        <DynamicFeedIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                    <NavLink to="" className="link">
                    <li className="sidebarListItem">
                        ایمیل  
                        <MailOutlineIcon className='sidebarIcon'/>
                    </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}
