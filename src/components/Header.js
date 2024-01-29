import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography,createTheme} from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {useNavigate} from "react-router-dom";
import { CryptoState } from '../CryptoContext';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const useStyles=makeStyles()(()=>{
    return {
       title:{
         flex:1,
         color:"gold",
         fontFamily:"Montserrat",
         fontWeight:"bold",
         cursor:"pointer",
       },
     };
 });

const Header = () => {

    const {classes}=useStyles();
    const navigate=useNavigate();

    const {currency,setCurrency}=CryptoState();

  return (
    <div>
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
     <Container>
        <Toolbar>
            <Typography onClick={()=>navigate('/')}className={classes.title}
            >Crypto Hunter</Typography>
            <Select
            variant='outlined'
            style={{
                width:100,
                height:40,
                marginLeft:15,
            }}
            value={currency}
            onChange={(e)=>setCurrency(e.target.value)}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
        </Toolbar>
     </Container>
    </AppBar>
    </ThemeProvider>
    </div>
  )
}

export default Header
