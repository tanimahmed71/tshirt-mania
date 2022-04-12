import React from 'react';
import Spacal from '../Spacial/Spacal';

const Myself = ({house,ornament}) => {
    return (
        <div>
            <h4>It's me </h4>
            <p>house{house}</p>
            <Spacal ornament={ornament}></Spacal>
        </div>
    );
};

export default Myself;