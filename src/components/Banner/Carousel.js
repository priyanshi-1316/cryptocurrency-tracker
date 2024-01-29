import React, { useEffect, useState } from 'react'
import { makeStyles } from 'tss-react/mui';
import axios from "axios";
import { CryptoState } from '../../CryptoContext';
import { TrendingCoins } from '../../config/api';
const useStyles=makeStyles()(()=>{
    return {
    carousel: {
       height: "50%",
       display:"flex",
       alignItems:"center",
    },
     };
 });

const Carousel = () => {
    const [trending,setTrending]=useState([]);
    const {classes}=useStyles();

    const{currency}=CryptoState();

    const fetchTradingCoins=async ()=>{
        const {data}=await axios.get(TrendingCoins(currency));

        setTrending(data);
    };
    
    console.log(trending);

    useEffect(()=>{
        fetchTradingCoins();
    },[currency]);
  return (
    <div className={classes.carousel}>
      Carousel
    </div>
  )
}

export default Carousel
