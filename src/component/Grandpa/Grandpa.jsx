import React, { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext= createContext('gold')
export const MoneyContext= createContext(0);

const Grandpa = () => {
   
  const [money,setMoney]=useState(0)
    
    return (
        <div className='grandpa'>
            
            <h2>Grandpa</h2>
            <p>Money: {money}</p>
            
           <MoneyContext.Provider value={[money,setMoney]}>
           <RingContext.Provider value='golden ring'>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
            </RingContext.Provider>
           </MoneyContext.Provider>
            
        </div>
    );
};

export default Grandpa;

/**
 1. create context and export
 2.create a provider and pass a value
 3.use context to receive
 * 
 */