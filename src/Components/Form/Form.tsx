import React from "react";
import { useState } from "react";
import './Form.css'

interface FormProps {
  setLocation: React.Dispatch<React.SetStateAction<number>>;
}

const Form:React.FC<FormProps> = (props:FormProps) => {
  const [animalType, setAnimalType] = useState('')
  const [location, setLocation] = useState(0)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(parseInt(event.target.value))
    props.setLocation(location)
  }

  return (
    <form className='form-section'>
      <select id="animalTypeSelected">
        <option>Dog</option>
        <option>Cat</option>
        <option>Other</option>
      </select>
      <label htmlFor="location">Find Pets by Zip Code:</label>
      <input id="locationInput" name="location" type="number" onChange={event => handleChange(event)} placeholder="Input Zip Code"></input>
    </form>
  )

}

export default Form;