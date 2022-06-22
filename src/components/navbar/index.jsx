import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import "./navbar.css"
import Profile from '@mui/icons-material/AccountCircleRounded';
import {Link} from "react-router-dom"
import { Productscontext } from '../../context/Productscontext';
import { Authcontext } from '../../context/Authcontext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  display:"flex",justifyContent:"space-between",
  marginLeft:70,
    marginRight:50,

// top:0,
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 104,
  },
}));

export default function Navbar() {
const {price,count}=React.useContext(Productscontext)
const {token}=React.useContext(Authcontext)

  return (
    <Box sx={{ flexGrow: 1}} styles={{ color:'grey',}}>
      <AppBar position="fixed"   color="inherit" style={{display:"flex"}}>
        <StyledToolbar >
     <div style={{display:"flex",alignSelf:"center"}}>
      <Link to="/">
          <img src="KFC.png" alt="" className='kfc_name_logo'/>
        </Link>
           <Typography
          style={{fontSize:14,fontWeight:500,alignSelf:'center'}}
            noWrap
            component="div"
            sx={{ marginRight:5 }}
          >
             <Link to ="/menu">
            Menu
          </Link>
          </Typography>
      
           
            <Typography
          style={{fontSize:14,fontWeight:500,alignSelf:'center'}}
            noWrap
            component="div"
            sx={{ marginRight:5 }}
          ><Link to ="/deals">
            Deals
              </Link>
          </Typography>
         
          
     </div>
     
       
         <div style={{display:"flex",alignSelf:"center"}}>
             <IconButton size="large" aria-label="profile" color="inherit"  style={{fontSize:14,fontWeight:600,alignSelf:'center'}}>
            <Link to ="/login">
            <Profile/>
              </Link>
          </IconButton>
          
           <Typography
          style={{fontSize:16,fontWeight:1000,alignSelf:'center',width:"70px"}}
            noWrap
            component="div"
            sx={{ marginRight:2}}
          >
             <Link to ="/login">
              {token?"Account":"sign In"}
            
             </Link>
          </Typography>
          
          
           <div style={{height:"40px",width:"0.5px", backgroundColor:"lightgray",alignSelf:"center"}}></div>
           <p style={{ alignSelf:"center",marginLeft:"15px"}}>₹{price}</p>
           <Link to="/cartdetail" ><div className='navbar_cartcount'>{count}</div></Link>
         
         </div>
        </StyledToolbar>
                
 

      </AppBar>
      
    </Box>
  );
}