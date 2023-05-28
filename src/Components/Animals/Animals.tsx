import React from "react";
import './Animals.css'
import AnimalCard from '../AnimalCard/AnimalCard'
import { Link } from 'react-router-dom'

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

const Animals:React.FC<AnimalProps> = (props:AnimalProps) => {
  const { animals } = props

  if (animals.length === 0) {
    return <p>Please hang tight while we find your perfect pet...</p>; 

  }
  const testId: any = animals[1].description

  return (
    <div>
      {animals.map(animal => (

        <Link to={`/${animal.id}`} style={{ textDecoration: 'none' }} > 
        <AnimalCard 
        key={animal.id}
        animalDetails={animal} />
        </Link>
      ))}
    </div>
  )
}

export default Animals;

