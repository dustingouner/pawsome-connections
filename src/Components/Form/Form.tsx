import React from "react";
import { useState } from "react";
import './Form.css'

interface FormProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Form:React.FC<FormProps> = (props:FormProps) => {
  const [animalType, setAnimalType] = useState('')
  const [zipCode, setZipCode] = useState("")
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.setLocation(zipCode)
    console.log(props, "props")
    console.log(props, "location")
  }

  return (
    <form className='form-section' onSubmit={event => handleSubmit(event)}>
      <select id="animalTypeSelected">
        <option>Dog</option>
        <option>Cat</option>
        <option>Other</option>
      </select>
      <div>
        <label htmlFor="location">Find Pets by Zip Code:</label>
        <input id="locationInput" name="location" type="number" placeholder="Input Zip Code" onChange={event => setZipCode(event.target.value)}></input>
      </div>
      <input type="submit"/>
    </form>
  )

}

export default Form;