import React from "react";

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