import React, {useState, useContext} from 'react';
import {TruckContext} from '../context/TruckContext';

function AddMenuItem () {
    const [itemName, setItemName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [menu, setMenu] = useContext(TruckContext)

    const updateItemName = (e) => {
        setItemName(e.target.value)
    }

    const updateMenuPrice = (e) => {
        setPrice(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const postNewItem = (e) => {
        e.preventDefault()
        setMenu(prevItems => [...prevItems, {itemName: itemName, price:price, description: description, rating:rating}] )
    }


     return(
        <form onSubmit={postNewItem}>

            <label> Item Name:        
                <input type = 'text' name = 'name' value = {itemName} onChange={updateItemName}/>
            </label>   
                <br></br>
            <label> Item Price:
                <input type = 'text' name = 'price' value = {price} onChange={updateMenuPrice}/>
            </label>
            <br></br>
            <label> Item Description:
                <input type = 'text' name = 'description' value = {description} onChange={updateDescription}/>
            </label>
            <button>Add Menu Item</button>
        </form>
     )
}

export default AddMenuItem