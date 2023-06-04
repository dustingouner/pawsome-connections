import React, { useState, useEffect } from "react";
import './AnimalCard.css'
import { Animal } from "../../types";

interface AnimalProps {
  animalDetails: Animal,
  favoriteAnimals: Function,
  unfavoriteAnimals: Function,
}

const AnimalCard:React.FC<AnimalProps> = (props:AnimalProps) => {
  let { animalDetails, favoriteAnimals, unfavoriteAnimals } = props
  const fallBackImages = [
    require("../../assets/sorry-image.png"),
    require("../../assets/SorryCat1.png"),
    require("../../assets/Sorry3.png"),
    require("../../assets/SorryCat3.png"),
    require("../../assets/Sorry4.png"),
    require("../../assets/SorryCat.png"),
  ]; 
  const imgSrc = animalDetails.primary_photo_cropped?.small;
  const [randomFallbackImage, setRandomFallbackImage] = useState<string>("");

  useEffect(() => {
    setRandomFallbackImage(getRandomFallbackImage());
  }, []);

  const getRandomFallbackImage = () => {
    const randomIndex = Math.floor(Math.random() * fallBackImages.length);
    return fallBackImages[randomIndex];
  };

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
        <img className="animal-img" src={imgSrc || randomFallbackImage} alt="Photos are in the works!" />
        <button className="favorite-button" onClick={event => toggleFavorite(animalDetails, event)} >
        {animalDetails.favorited ? "❤️" : "🤍"}
      </button>
        <h2 className="animal-name">{animalDetails.name}</h2>
        <p className="animal-card-details">{`${animalDetails.age} | ${animalDetails.breeds.primary} | ${animalDetails.contact.address.city}, ${animalDetails.contact.address.state}`}</p>
    </section>
  );
}

export default AnimalCard;