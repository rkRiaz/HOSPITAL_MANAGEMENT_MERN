import React from 'react'
import './TopBar.css'
import { 
         LocalHospitalOutlined,
         MenuOutlined, 
         SearchOutlined, 
         PersonOutlineOutlined,
         FullscreenOutlined,
         NotificationsOutlined
        } from '@material-ui/icons';

          
function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar__logo">
                <LocalHospitalOutlined/> HMS 
            </div>
            <div className="topbar__icons">
                <MenuOutlined className="topbar__iconsBurgerIcon"/>
                <FullscreenOutlined/>
                <SearchOutlined/>
                <NotificationsOutlined/>
                <PersonOutlineOutlined/>
            </div>
        </div>
    )
}

export default TopBar
