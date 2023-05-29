import React from "react";
import { Animal } from '../../types';

interface AnimalProps {
  animals: Animal[]
}

const AnimalDetails:React.FC<AnimalProps> = (props:AnimalProps) => {
  return (
    <div>
      <h1>Pet Name</h1>
      <div>
        <img/>
        <section className="animal-info">
          <p>Adoptable:</p>
          <p>Gender:</p>
          <p>Breed:</p>
          <p>Color:</p>
          <p>Coat:</p>
          <p>Spayed/Neutered:</p>
          <p>House Trained:</p>
          <p>Description:</p>
        </section>
        <section className="contact-info">
          <p>Email:</p>
          <p>Phone Number:</p>
        </section>
      </div>
    </div>
  )
}

export default AnimalDetails