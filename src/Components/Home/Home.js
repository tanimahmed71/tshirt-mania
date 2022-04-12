import React from 'react';
import { useState } from 'react';
import useTshirts from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tshirts,setTshirts]=useTshirts();
    const [cart,setCart]=useState([])
    
    const handleAddToCart = (selectedItem)=>{
        const exist =cart.find(tshirt=>tshirt._id===selectedItem._id);
        if(!exist){
            const newCart =[...cart,selectedItem];
            setCart(newCart);
        }
        else{
            alert('hey!!!Item already added');
        }
    } 
    const handleRemoveCart =(selectedItem)=>{
        const rest =cart.filter(tshirt=> tshirt._id!==selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt=><Tshirt key={tshirt._id}tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                 cart={cart}
                 handleRemoveCart={handleRemoveCart}
                 ></Cart>
            </div>
        </div>
    );
};

export default Home;