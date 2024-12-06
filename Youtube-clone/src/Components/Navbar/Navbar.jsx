import React from 'react'
import './Navbar.css'
import Menu_icon from '../../assets/menu.png'
import logo2 from '../../assets/logo2.png'
import Search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'



const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img clssName='menu_icon' src={Menu_icon} alt="menu"/>
            <img className='logo' src={logo2} alt="logo"/>

        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input type="text" placeholder='Search'/>
            <img src={Search_icon} alt="" />
            </div>
            

        </div>
        <div className ="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile_icon} alt="" />


        </div>
      
    </nav>
  )
}

export default Navbar
