import React from 'react';
import AddMenuItem from './AddMenuItem'

const Truck = ({name, cuisine, menu}) => {
    console.log(menu)

    return(
        <div>
            <h3>{name}</h3>
            <p>{cuisine}</p>

        </div>
    )
}

export default Truck