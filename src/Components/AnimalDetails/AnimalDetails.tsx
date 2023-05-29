import React from "react";
import { useParams } from "react-router-dom"
import './AnimalDetails.css'

type Animal = {
  id: number;
  primary_photo_cropped: {
    full: string,
    large: string,
    medium: string,
    small: string
 } | null;
 url: string,
  age: string,
  breeds: {
    mixed: boolean,
    primary: string,
    secondary: string,
    unknown: boolean
  },
  contact: {
    address: {
      address1: string,
      address2: string,
      city: string,
      country: string,
      postcode: string,
      state: string
    }
    email: string,
    phone: string
  }
  description: string,
  gender: string,
  name: string,
  size: string,
  species: string,
  type: string,
  status: string,
  attributes: {
    house_trained: boolean,
    spayed_neutered: boolean,
    shots_current: boolean,
  }
};

interface AnimalProps {
  animals: Animal[]
}

const AnimalDetails:React.FC<AnimalProps> = (props:AnimalProps) => {
  const { animals } = props
  const { id } = useParams<{id: string }>()

  const selectedAnimal = animals.find(animal => animal.id === Number(id))

  if (!selectedAnimal) {
    return <p>We're sorry, we could not locate this pet.</p>
  }

  const { primary_photo_cropped, age, status, breeds, contact, description, gender, name, size, type, attributes} = selectedAnimal
  const imgSrc = primary_photo_cropped?.small
  const fallBackImage = require('../../assets/pawsome.png')
  console.log('petDetails', animals)
  return (
    <div className="animal-details-container">
        <h1 className="pet-name">{name}</h1>
      <div className="animal-details">
        <div className="image-container">
           <img className="pet-photo" src={imgSrc || fallBackImage} alt={`${name}'s photo` || 'Pet photo not available, logo image shown'}/>
        </div>
        <section className="animal-info">
          <p className="description">Description: {description}</p>
          <p>Adoption Status: {status} </p>
          <p>Species: {type}</p>
          <p>Gender: {gender}</p>
          <p>Breed: {breeds.primary}</p>
          <p>Age: {age} </p>
          <p>Size: {size}</p>
          <p>Spayed/Neutered: {attributes.spayed_neutered && 'yes' || 'no'}</p>
          <p>House Trained: {attributes.house_trained && 'yes' || 'no'}</p>
          <p>Spayed/Neutered: {attributes.spayed_neutered && 'yes' || 'no'}</p>
        </section>
        <section className="contact-info">
          <p>Location: {contact.address.city}, {contact.address.state}</p>
          <p>Email: {contact.email}</p>
          <p>Phone Number: {contact.phone}</p>
        </section>
      </div>
    </div>
  )
}

export default AnimalDetails