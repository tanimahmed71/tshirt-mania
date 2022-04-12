import React, { createContext } from 'react';
import Uncle from '../Uncle/Uncle'
import Father from '../Father/Father'
import Auntuy from '../Aunty/Aunty'
import './Grandpa.css'
import { useState } from 'react';
/* 
context api
1.call createContext with a default value
2.set a variable of the context with uppercase
3.make sure you export the context to use it in other places
4.wrap your child context
5.provide a value
6. to consume the context from child component
7.useContext hook and you will need to pass the contextName
*/
export const RingContext = createContext('dimond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const handlaBuyHouse = () => {
        const newHousecount = house + 1;
        setHouse(newHousecount);
    }
    const ornament = 'dimond ring'

    return (
        <RingContext.Provider value='alur ring'>
            <div className='grandpaa'>
                <h3>Grandpaa</h3>
                <p> House: {house}</p>
                <button onClick={handlaBuyHouse}>Buy a house </button>
                <div style={{ display: "flex" }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Auntuy house={house}></Auntuy>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;