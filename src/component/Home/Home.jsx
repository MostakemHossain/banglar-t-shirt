import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const tshirts= useLoaderData();
    const [cart,setCart]=useState([])
    const handleAddTocart= (tshirts)=>{
        const exist= cart.find(ts => ts._id==tshirts._id)
        if(exist){

            toast("This T shirt is Already Added !");
        }else{

            const newCart= [...cart,tshirts]
            setCart(newCart)
        }
        
    }
    const removeFromCart=(id)=>{
        const remaining=cart.filter(ts => ts._id!==id);
        setCart(remaining)
    }

    return (
        <div className='container'>
            <div className='tshirt-container'>
                {
                    tshirts.map( tshirt => <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddTocart}
                    ></Tshirt>)
                }
            </div>

            <div>
                <Cart
                removeFromCart={removeFromCart}
                 cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;