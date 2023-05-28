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
  breeds: object,
  contact:object,
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
  console.log(animalDetails.primary_photo_cropped?.full, 'here')
  return (
    <section className='animal-card'>
      <img src={animalDetails.primary_photo_cropped?.full}/>
      <h2>name:{animalDetails.name}</h2>
      <div>
        <p>{animalDetails.age}</p>
        {/* <p>{animalDetails.breeds}</p> */}
        <p>etc</p>
      </div>
    </section>
  )
}

export default AnimalCard;