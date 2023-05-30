import React from "react";
import './AnimalCard.css'
import { Animal } from "../../types";


interface AnimalProps {
  animalDetails: Animal
}

const AnimalCard:React.FC<AnimalProps> = (props:AnimalProps) => {
  const { animalDetails } = props
  const fallBackImage = require('../../assets/sorry-image.png')  
  const heart = require('../../assets/heart.png')  
  const imgSrc = animalDetails.primary_photo_cropped?.small

  return (
    <section className="animal-card">
        <img className="animal-img" src={imgSrc || fallBackImage} alt="Photos are in the works!" />
        <img className="heart-icon" src={heart}></img>
        <h2 className="animal-name">{animalDetails.name}</h2>
        <p className="animal-details">{`${animalDetails.age} | ${animalDetails.breeds.primary} | ${animalDetails.contact.address.city}, ${animalDetails.contact.address.state}`}</p>
    </section>
  );
}

export default AnimalCard;