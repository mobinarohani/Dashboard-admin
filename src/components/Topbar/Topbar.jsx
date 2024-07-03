import React from 'react'
import './Topbar.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
export default function
    () {
    return (
        <div className='Topbar'>
            <div className="topbarElement">

                <div className="topbarRight">
                    <img src="logo192.png" alt="logo" className='Avatar' />
                    <div className="TopbarRight_Icon">
                        <SettingsOutlinedIcon />
                    </div>
                    <div className="TopbarRight_Icon">
                        <LanguageOutlinedIcon />
                        <span className="TopbarRight_Icon_value">2</span>
                    </div>
                    <div className="TopbarRight_Icon">
                        <NotificationsNoneOutlinedIcon />
                        <span className="TopbarRight_Icon_value">2</span>
                    </div>
                </div>
                <div className="topbarLeft">
                    <img src="logo.png" alt="logo" className='logosit' />
                </div>
            </div>
        </div>
    )
}
