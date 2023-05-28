import React from "react";
import './Animals.css'
import AnimalCard from '../AnimalCard/AnimalCard'

type Animal = {
  id: number;
  primary_photo_cropped: {
    full: string,
    large: string,
    medium: string,
    small: string
 },
  url: string;
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
  animals: Animal[]
}

const Animals:React.FC<AnimalProps> = (props:AnimalProps) => {
  const { animals } = props

  if (animals.length === 0) {
    return <p>Please hang tight while we find your perfect pet...</p>; 

  }
  const testId: any = animals[1].description

  return (
    <div>
      {animals.map(animal => (
        <AnimalCard 
        key={animal.id}
        animalDetails={animal} />
      ))}
    </div>
  )
}

export default Animals;

