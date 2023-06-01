import React, { useState } from "react";
import './AnimalCard.css'
import { Animal } from "../../types";


interface AnimalProps {
  animalDetails: Animal,
  favoriteAnimals: Function,
  unfavoriteAnimals: Function,
}

const AnimalCard:React.FC<AnimalProps> = (props:AnimalProps) => {
  let { animalDetails, favoriteAnimals, unfavoriteAnimals } = props
  const fallBackImage = require('../../assets/sorry-image.png')  
  // const heart = require('../../assets/heart.png')  
  const imgSrc = animalDetails.primary_photo_cropped?.small
  

  const toggleFavorite = (animal: Animal, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if(animalDetails.favorited) {
      animalDetails.favorited = false
      unfavoriteAnimals(animal)
    } else {
      animalDetails.favorited = true
      favoriteAnimals(animal)
    }
  }

  return (
    <section className="animal-card">
        <img className="animal-img" src={imgSrc || fallBackImage} alt="Photos are in the works!" />
        {/* <img className="heart-icon" src={heart}></img> */}
        <button className="favorite-button" onClick={event => toggleFavorite(animalDetails, event)} >
        {animalDetails.favorited ? "❤️" : "🤍"}
      </button>
        <h2 className="animal-name">{animalDetails.name}</h2>
        <p className="animal-card-details">{`${animalDetails.age} | ${animalDetails.breeds.primary} | ${animalDetails.contact.address.city}, ${animalDetails.contact.address.state}`}</p>
    </section>
  );
}

export default AnimalCard;