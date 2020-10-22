import React, {useState, useContext} from 'react';
import {TruckContext} from '../context/TruckContext'
import AddMenuItem from './AddMenuItem'
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialFormValues = {
    name: '',
    cuisine:'',
}

function AddTruck (props) {

    const [trucks, setTrucks] = useContext(TruckContext)
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [city, setCity] = useState('')
    const [rating, setRating] = useState('')
    const [formValues, setFormValues] = useState(initialFormValues)

    

    const postNewTruck = (e) => {
        e.preventDefault();
        const postData = {
            name: name,
            cuisine: cuisine,
            city: city,
        }
        
        axiosWithAuth()
        .post(`/api/trucks`, postData)
        .then(res => {
            console.log(res)
            localStorage.getItem('token')
            })
            .catch(err => {
                console.log(err)
            })
        alert('Truck added successfully!')

    }

    const updateName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const updateCuisine = (e) => {
        e.preventDefault()
        setCuisine(e.target.value)
    }

    const updateCity = (e) => {
        e.preventDefault()
        setCity(e.target.value)
    }

    return(
        <div className="truck-form-container">
            <form onSubmit = {postNewTruck} className="truck-form">
                <div className="tForm-input-container">
                    <label> Truck Name:
                        <input type = 'text' name = 'truck-name' value = {name} onChange = {updateName}/>
                    </label>

                    <label> Cuisine Type:
                            <input type = 'text' name ='cuisine' value = {cuisine} onChange={updateCuisine}/>
                    </label>

                    <label>Location:&nbsp;
                        <input type = 'text' name= 'location' value = {city} onChange={updateCity}/>    
                    </label>
                </div>

                <button >Add your Truck!</button>

            </form>

        </div>
    );
}

export default AddTruck