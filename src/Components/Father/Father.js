import React from 'react';
import Myself from '../Myself/Myself'
import Sister from '../sister/Sister'

const Father = ({ house,ornament }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>House{house}</p>
            <div style={{display:"flex"}}>
            <Myself house={house}ornament={ornament}></Myself>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;