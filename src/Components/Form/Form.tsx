import React from "react";
import { useState } from "react";
import './Form.css'

const Form = () => {
  const [animalType, setAnimalType] = useState('')
  const [location, setLocation] = useState(0)
  
  return (
    <form className='form-section'>
      <select>
        <option>Dog</option>
        <option>Cat</option>
        <option>Other</option>
      </select>
      <label htmlFor="location">Find Pets by Zip Code:</label>
      <input name="location" type="number" onChange={event => setLocation(parseInt(event.target.value))} placeholder="Input Zip Code"></input>
    </form>
  )

}

export default Form;