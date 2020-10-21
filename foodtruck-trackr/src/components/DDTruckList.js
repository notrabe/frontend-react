import React, {useState} from 'react';

function DDTruckList(){
    const [currentTrucks, setCurrentTrucks] = useState()
    
    axiosWithAuth()
        .get(`/api/trucks`)
        .then(res => {
            console.log(res)
            setCurrentTrucks(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    return(
        <div>
            {currentTrucks.map(truck => (
                <AllTrucks  name = {truck.name}/>))}
        </div>
    )
}