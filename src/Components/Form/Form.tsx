import React from "react";
import { useState } from "react";
import './Form.css'

interface FormProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setAnimal: React.Dispatch<React.SetStateAction<string>>;
  // setLocation: React.Dispatch<
  //   React.SetStateAction<{ animalType: string; zipCode: string }>
  // >;
}

const Form:React.FC<FormProps> = (props:FormProps) => {
  const [animalType, setAnimalType] = useState('')
  const [zipCode, setZipCode] = useState("")
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.setLocation(zipCode)
    props.setAnimal(animalType)
    console.log(animalType, "ANIMAL TYPE")
  }

  return (
    <form className='form-section' onSubmit={event => handleSubmit(event)}>
      <select id="animalTypeSelected" defaultValue="all" onChange={event => setAnimalType(event.target.value)}>
        <option value="all">All Pets</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
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