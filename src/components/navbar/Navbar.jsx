import React, { useContext } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

export default function Navbar() {
        const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon  className='icon' onClick={() => dispatch({type:"TOGGLE"})}/>
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon  className='icon'/>
            
          </div>
          <div className="item">
            <NotificationsOutlinedIcon  className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon  className='icon'/>
            <div className="counter">2</div>

          </div>
          <div className="item">
            <ListOutlinedIcon  className='icon'/>
          </div>
          <div className="item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/20220121%E2%80%94Sana_%EC%82%AC%EB%82%98_Campaign_Film%2C_Pearlygates_x_Twice_2022.jpg"
              alt=""
              className='avatar'
            />
            </div>
        </div>
      </div>
    </div>
  )
}
