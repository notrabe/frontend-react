import React from 'react';
import AddMenuItem from './AddMenuItem'

const Truck = ({name, cuisine, location}) => {

    return(
        <div>
            <h3>{name}</h3>
            <p>{cuisine}</p>
            <p>{location}</p>

        </div>
    )
}

export default Truck