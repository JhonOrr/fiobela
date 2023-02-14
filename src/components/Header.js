import React from 'react';
import { AppBar , Toolbar, Tabs, Tab, useMediaQuery,useTheme } from '@mui/material';
import { useState } from 'react';
import DrawerComp from './DrawerComp';
import Logo from '../images/logo_fiobela.png';
import { Link } from 'react-router-dom';



const Header = ()=>{

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const[value, setValue] = useState([]);
    return(
        <div >
            <AppBar sx={{background:'#000'}} position="static">
            <Toolbar sx={{display:'flex' ,justifyContent:'space-between'}}>
                    {
                        isMatch ? (
                            <>
                                <img src={Logo} width='74px' alt='logo'/>
                                <DrawerComp/>
                            </>
                        ) : (
                            <>
                                <img src={Logo} width='74px' alt='logo'/>
                                <Tabs sx={{marginLeft:'auto'}} textColor='inherit' value={value} 
                                indicatorColor='primary' onChange={(e,value)=>{setValue(value)}}>                                  
                                    <Tab label='Home' component={Link} to= '/'/>
                                    <Tab label='About us' component={Link} to= '/about'/>
                                    <Tab label='Services' component={Link} to= '/services   '/>
                                    <Tab label='Contact us' component={Link} to='/contact'/>                            
                                </Tabs>
                            </>
                        )
                    }      
            </Toolbar>  
        </AppBar>
        </div>   
    )
}

export default Header;