import React from 'react';
import DinerDasboard from './DinerDashboard'
import DDTruckList from './DDTruckList'


export default function AllTrucks ({name, location, cuisine}) {

    return(
        <div>
            <h3>{name}</h3>
            <p>{cuisine}, {location}</p>

        </div>
    )
}