import React from 'react';
import { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>Grandpa money={money}</p>
            <button onClick={()=>setMoney(money+1000)}>Sent Money  1000</button>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin>Nebir</Cousin>
                <Cousin>Nafi</Cousin>
            </section>
        </div>
    );
};

export default Uncle;