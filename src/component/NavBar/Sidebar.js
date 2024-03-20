// import React from 'react'

//import {FaAccusoft, FaAd, FaAddressBook, FaAnchor, FaCalendar, FaHome,  FaRegEnvelopeOpen, FaSchool, FaTruck, FaWhatsapp} from 'react-icons/fa'
import * as React from 'react';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Sidebar = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
         
        >
          <List>
            {['DashBoard', 'Academy', 'Send email', 'Ecommerce'].map((text, index) => (
              <ListItem key={text} disablePadding  className="hover:bg-purple-800 hover:text-white">
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <DashboardIcon /> : <SchoolIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Chat', 'Calendar', 'User'].map((text, index) => (
              <ListItem key={text} disablePadding className="hover:bg-purple-800 hover:text-white">
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <WhatsAppIcon /> : <CalendarMonthIcon /> }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
  return (
   
    <div className='flex  p-4 m-0 h-13 justify-between items-center bg-gray-600 bg-opacity-5 rounded-md'>
  
      
         <div>
        <MenuIcon onClick={
            toggleDrawer("left",true)
        }/>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
        </div>
        <div className='flex p-3 gap-6'>
            <SearchIcon/>
            <DarkModeIcon  />
        <NotificationsIcon />
        <AccountCircleIcon />
        </div>

  
  </div>
 
    // <div className={`${sidebarToggle? " hidden " : " block "}w-64 bg-white-800 fixed h-full px-4 py-2`}>
    //   <div className='my-5 mb-7'>
    //     <h1 className='text-2x text-gray font-bold'>Admin Dashboard</h1>
    //   </div>
    //   <hr/>
    //   <ul className='mt-3 text-gray  font-light text-lg'>
    //     <li className='mb-2 rounded hover:shadow hover:bg-white-500 py-2'>
    //         <a href='#' className='px-3'>
    //             <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>Dashboards</a>
    //     </li>
        
    //     <li className='mb-2 rounded hover:shadow hover:bg-white-500 py-2'>
    //         <a href='#' className='px-3'>
    //         <FaAddressBook className='inline-block w-5 h-5 mr-2 -mt-2'></FaAddressBook>Front Pages</a>
    //     </li>
       
    //     <li className='mb-2 rounded hover:shadow hover:bg-white-500 py-2'>
    //         <a href='#' className='px-3'>
    //         <FaAccusoft className='inline-block w-5 h-5 mr-2 -mt-2'></FaAccusoft>Ecommmerce</a>
    //     </li>
      
    //     <li className='mb-2 rounded hover:shadow hover:bg-white-500 py-2'>
    //     <FaSchool className='inline-block w-5 h-5 mr-2 -mt-2'></FaSchool>   <a href='#' className='px-3'>Academy</a>
    //     </li>
    //     <li className='mb-2 rounded hover:shadow hover:bg-white-500 py-2'>
    //     <FaTruck className='inline-block w-5 h-5 mr-2 -mt-2'></FaTruck>    <a href='#' className='px-3'>Logistics</a>
    //     </li>
    //     <li className='mb-2 rounded hover:shadow hover:bg-white-500 py-2'>
    //     <FaRegEnvelopeOpen className='inline-block w-5 h-5 mr-2 -mt-2'></FaRegEnvelopeOpen>   <a href='#' className='px-3'>Email</a>
    //     </li>
    //     <li className='mb-2 rounded hover:shadow hover:bg-white-500 py-2'>
    //     <FaWhatsapp className='inline-block w-5 h-5 mr-2 -mt-2'></FaWhatsapp>   <a href='#' className='px-3'>Chat</a>
    //     </li>
    //     <li className='mb-2 rounded hover:shadow hover:bg-white-500 py-2'>
    //     <FaCalendar className='inline-block w-5 h-5 mr-2 -mt-2'></FaCalendar>    <a href='#' className='px-3'>Calender</a>
    //     </li>

    //   </ul>
    // </div>

  )
}

export default Sidebar
