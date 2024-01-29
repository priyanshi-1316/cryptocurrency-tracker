
import React, { createContext, useContext, useEffect, useState } from 'react';

const crypto=createContext();

const CryptoContext = ( {children}) => {
    const [currency,setCurrency]=useState("INR");
    const [symbol,setSynbol]=useState("₹");

    useEffect(()=>{
        if(currency==="INR") setSynbol("₹");
        else if(currency==="USD") setSynbol("$");
    },[currency]);
  return (
    <crypto.Provider value={{currency,symbol,setCurrency}}>
        {children}
    </crypto.Provider>
      
   
  )
}

export default CryptoContext;

export const CryptoState=()=>{
  return useContext(crypto);
};
