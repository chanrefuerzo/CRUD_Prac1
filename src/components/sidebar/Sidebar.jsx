import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';

export default function Sidebar() {
      const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">PokeDex</span>
            </Link>
            
        </div> 
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
            
                <p className="title">LIST</p>
                <Link to="/users" style={{textDecoration: "none"}}>

                <li>                    
                    <PersonOutlineIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}}>
                <li>
                    <StoreIcon className='icon' />
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <ShoppingCartCheckoutIcon className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li>

                <p className="title">USEFUL</p>

                <li>
                    <QueryStatsIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className='icon' />
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>

                <li>
                    <HealthAndSafetyIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <StickyNote2Icon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon' />
                    <span>Settings</span>
                </li>

                <p className="title">USER</p>

                <li>
                    <ManageAccountsIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon' />
                    <span>Logout</span>
                </li>
            
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
            <div className="colorOption"></div>

        </div>
    </div>
  )
}
