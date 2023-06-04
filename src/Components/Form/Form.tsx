import React, { useState } from "react"
import './Form.css'

interface FormProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setAnimal: React.Dispatch<React.SetStateAction<string>>;
}

const Form:React.FC<FormProps> = (props:FormProps) => {
  const [animalType, setAnimalType] = useState('')
  const [zipCode, setZipCode] = useState("")
  const [zipCodeError, setZipCodeError] = useState('')
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()


    if(zipCode.length > 0 && zipCode.length !== 5) {
      return setZipCodeError("Zip code should be 5 characters long.")
    }
      setZipCodeError('')
      props.setLocation(zipCode)
      props.setAnimal(animalType)
  }

  return (
    <form className='form-section' onSubmit={event => handleSubmit(event)}>
      <select id="animalTypeSelected" defaultValue="all" onChange={event => setAnimalType(event.target.value)}>
        <option value="all">All Pets</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <div>
        <label htmlFor="location">Find Pets by Zip Code:  </label>
        <input id="locationInput" name="location" type="number" placeholder="Input Zip Code" onChange={event => setZipCode(event.target.value)}></input>
      </div>
        {zipCodeError && <p className='zipcode-error'>{zipCodeError}</p>}
      <input id="submitForm" name="submitForm" type="submit"/>
    </form>
  )

}

export default Form;