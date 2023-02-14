import React from 'react';
import { useState } from 'react';
import { Drawer,IconButton,List,ListItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ScienceIcon from '@mui/icons-material/Science';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from 'react-router-dom';
import '../styles/drawer.css' 

const DrawerComp = () => {

  const [open, setOpen] = useState(false);
  const options = [
    {
      title: 'Home',
      icon: <HomeIcon/>,
      link: "/"
    },
    {
      title: 'About us',
      icon: <BusinessIcon/>,
      link: "/about"
    },
    {
      title: 'Services',
      icon: <ScienceIcon/>,
      link: "/services"
    },
    {
      title: 'Contact us',
      icon: <ContactPhoneIcon/>,
      link: "/contact"
    },
  ]

  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={()=>setOpen(false)}
        PaperProps={{sx: { width: '250px', background:'#000'}}}      
      >
        <List  className='sidebarList'>
            {
              options.map((value)=>{
                return(
                  <ListItem sx={{color:'#fff'}} className='row' component={Link} to={value.link}>
                  <div className='icon'>{value.icon}</div>
                  <div className='title'> {value.title}</div>
                  </ListItem>
                )
              })
            }
            
        </List>
      </Drawer>
      <IconButton 
        sx={{color:'#FFF', marginLeft:'auto'}}
        onClick={(()=>setOpen(!open))}>
        <MenuIcon color='white'/>
      </IconButton>
    </div>
  )
}

export default DrawerComp;
