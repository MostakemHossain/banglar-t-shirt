import React from 'react';

const Cart = ({cart,removeFromCart}) => {
    let message;
    if(cart.length===0){
        message=<p>Please Add some product</p>;
    }else{
        message=<p>Fokir how</p>
    }
    return (
        <div>
            <h1>Cart {cart.length}</h1>
            {message}
            {
                cart.length>2
                ?<span>Aro kino</span>
                :<span>Fokir</span>
            }

            {
                cart.map( tshirt => <p
                key={tshirt._id}
                > {tshirt.name} <button 
                onClick={()=>removeFromCart(tshirt._id)}
                >X</button></p>)
            }
            {
                cart.length===2 && <p>Double added</p>
            }
            {
                cart.length===3 || <p>Three product not added</p>
            }
        </div>
    );
};

export default Cart;