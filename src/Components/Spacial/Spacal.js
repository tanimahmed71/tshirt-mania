import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpaa/Grandpa';

const Spacal = ({ornament}) => {
    const ring =useContext(RingContext)
    return (
        <div>
            <h5>Spacial</h5>
            <p>Gift from: {ring}</p>
        </div>
    );
};

export default Spacal;