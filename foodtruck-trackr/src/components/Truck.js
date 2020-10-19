import React from 'react';

const Truck = ({name, cuisine}) => {

    return(
        <div>
            <h3>{name}</h3>
            <p>{cuisine}</p>
        </div>
    )
}

export default Truck