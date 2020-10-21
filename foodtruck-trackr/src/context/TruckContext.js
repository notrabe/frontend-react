import React, { useState, createContext } from 'react';

export const TruckContext = createContext();

export const TruckProvider = (props) => {
    const [trucks, setTrucks] = useState ([
        {
            name: '',
            cuisine: '',
            rating: '',
            menu: [{
                itemName: '',
                price: '',
                description: '',
                rating: '',
            }],
            location: '',
        }
    ])

    return (
        <TruckContext.Provider value = {[trucks, setTrucks]}>
            {props.children}
        </TruckContext.Provider>
    )
}