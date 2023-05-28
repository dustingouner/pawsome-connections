import React from "react";
import './AnimalCard.css'


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
};

interface AnimalProps {
  animalDetails: Animal
}

const AnimalCard:React.FC<AnimalProps> = (props:AnimalProps) => {
  const { animalDetails } = props
  const fallBackImage = require('../../assets/pawsome.png')  
  const imgSrc = animalDetails.primary_photo_cropped?.small

  return (
    <section className="animal-card">
        <img className="animal-img" src={imgSrc || fallBackImage} alt="Photos are in the works!" />
        <h2 className="animal-name">{animalDetails.name}</h2>
        <p>{`${animalDetails.age} | ${animalDetails.breeds.primary} | ${animalDetails.contact.address.city}, ${animalDetails.contact.address.state}`}</p>
    </section>
  );
}

export default AnimalCard;