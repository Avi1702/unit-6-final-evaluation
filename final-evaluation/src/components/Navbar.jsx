import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { LogOut_success } from '../Redux/auth/action';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';


export default function Navbar() {

 
    const dispatch=useDispatch()
    const {token}=useSelector(state=>state)
    const [state, setState] = React.useState({
  
        left: false
        
      });
    
    
      const handleLogOut=()=>{
        dispatch(LogOut_success())
      }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Home</Link>
         
          {/* <Link to="">Login</Link> */}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Link to="/cart" style={{marginRight:"10%"}} ><ShoppingCartSharpIcon  /><span style={{marginTop:"-10px"}}>0</span></Link>
    
          {token?<button style={{borderRadius:"8px",border:"none", padding:"5px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} onClick={handleLogOut}>LOG OUT</button>:  <Link to="/login">LOGIN</Link>}
        
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
