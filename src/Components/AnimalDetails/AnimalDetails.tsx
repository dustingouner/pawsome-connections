import React from "react";
import { Animal } from '../../types';
import { useParams } from "react-router-dom"
import './AnimalDetails.css'
import { url } from "inspector";

interface AnimalProps {
  animals: Animal[]
}

const AnimalDetails:React.FC<AnimalProps> = (props:AnimalProps) => {
  const { animals } = props;
  const { id } = useParams<{id: string }>();
  

  const selectedAnimal = animals.find(animal => animal.id === Number(id));

  if (!selectedAnimal) {
    return <h1 className="error-message">Sorry, we cannot locate this pet!</h1>
  }

  const { primary_photo_cropped, age, status, breeds, contact, description, gender, name, size, type, attributes, url} = selectedAnimal
  const imgSrc = primary_photo_cropped?.full
  const fallBackImage = require('../../assets/sorry-image.png')
  let fixedDetails;
  if (description  && description.includes('&amp;#39;')) {
    fixedDetails = description.split('&amp;#39;').join("'")
  }

  return (
    <div className="animal-details-container">
        <h1 className="pet-name">{name}</h1> 
      <div className="animal-details">
        <div className="image-container">
          <img className="pet-photo" src={imgSrc || fallBackImage} alt={`${name}'s photo` || 'Pet photo not available, logo image shown'}/>
        </div>
        <section className="animal-info">
          <h2 className="animal-info-header">Pet Details</h2>
          <p className="description">{fixedDetails || description}  <a href={url} aria-label="Link to pet's information">
          See more details
        </a></p>
          <section className="animal-stats">
            <p className="stats">Adoption Status: {status} </p>
            <p className="stats">Species: {type}</p>
            <p className="stats">Gender: {gender}</p>
            <p className="stats">Breed: {breeds.primary}</p>
            <p className="stats">Age: {age} </p>
            <p className="stats">Size: {size}</p>
            <p className="stats">Spayed/Neutered: {attributes.spayed_neutered && 'yes' || 'no'}</p>
            <p className="stats">House Trained: {attributes.house_trained && 'yes' || 'no'}</p>
          </section>
        </section>
        <section className="contact-info">
          <h2 className="contact-info-header">Contact Information</h2>
          <section className="contact-details">
          <p>Location: {contact.address.city}, {contact.address.state}</p>
          <p>Email: {contact.email}</p>
          <p>Phone Number: {contact.phone}</p>
          </section>
        </section>
      </div> 
    </div>
  )
}

export default AnimalDetails