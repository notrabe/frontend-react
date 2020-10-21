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
    const [location, setLocation] = useState('')
    const [rating, setRating] = useState('')
    const [formValues, setFormValues] = useState(initialFormValues)

    

    const postNewTruck = (e) => {
        e.preventDefault();
        const postData = {
            name: name,
            cuisine: cuisine,
            location: location,
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

    const updateLocation = (e) => {
        e.preventDefault()
        setLocation(e.target.value)
    }

    return(
        <div>
            <form onSubmit = {postNewTruck}>
                <label> Truck Name:&nbsp;
                    <input type = 'text' name = 'truck-name' value = {name} onChange = {updateName}/>
                </label>

                <label> Cuisine Type:&nbsp; 
                        <input type = 'text' name ='cuisine' value = {cuisine} onChange={updateCuisine}/>
                </label>

                <label>Location:&nbsp;
                    <input type = 'text' name= 'location' value = {location} onChange={updateLocation}/>    
                </label>

                <button>Submit</button>

            </form>

        </div>
    );
}

export default AddTruck