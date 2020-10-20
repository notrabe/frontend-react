import React, {useState, useContext} from 'react';
import {TruckContext} from '../context/TruckContext'
import AddMenuItem from './AddMenuItem'

function AddTruck () {

    const [trucks, setTrucks] = useContext(TruckContext)
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [rating, setRating] = useState('')

    const postNewTruck = (e) => {
        e.preventDefault()
        setTrucks(prevTrucks => [...prevTrucks, {name: name, cuisine: cuisine}])
    }

    const updateName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const updateCuisine = (e) => {
        e.preventDefault()
        setCuisine(e.target.value)
    }

    return(
        <div>
            <form onSubmit = {postNewTruck}>
                <label> Truck Name:
                    <input type = 'text' name = 'truck-name' value = {name} onChange = {updateName}/>
                </label>

                <label> Cuisine Type: 
                        <input type = 'text' name ='cuisine' value = {cuisine} onChange={updateCuisine}/>
                </label>

                <button>Submit</button>

            </form>

        </div>
    );
}

export default AddTruck