import React from "react";
import './AnimalCard.css'
import { Animal } from "../../types";

interface AnimalProps {
  animalDetails: Animal
}

const AnimalCard:React.FC<AnimalProps> = (props:AnimalProps) => {
  const { animalDetails } = props
  const fallBackImage = require('../../assets/pawsome.png')  
  const imgSrc = animalDetails.primary_photo_cropped?.small

  return (
    <section className='animal-card'>
      <img src={imgSrc || fallBackImage} alt="Photos are in the works!"/>
      <h2>{animalDetails.name}</h2>
        <p>{`${animalDetails.age} | ${animalDetails.breeds.primary} | ${animalDetails.contact.address.city}, ${animalDetails.contact.address.state}`}</p>
    </section>
  )
}

export default AnimalCard;