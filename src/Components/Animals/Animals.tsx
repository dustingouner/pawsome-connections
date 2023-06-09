import React from "react";
import './Animals.css'
import AnimalCard from '../AnimalCard/AnimalCard'
import { Animal } from '../../types';
import { Link } from 'react-router-dom'

interface AnimalProps {
  animals: Animal[],
  favoriteAnimals: Function,
  unfavoriteAnimals: Function,
}

const Animals:React.FC<AnimalProps> = (props:AnimalProps) => {
  const { animals, favoriteAnimals, unfavoriteAnimals } = props
  if (!animals) {
    console.log(animals, "animals line 16")
    return <p>Please hang tight while we find your perfect pet...</p>; 
  }

  return (
    <div className="animals-container">
      {animals.map(animal => (

        <Link key={animal.id} to={`/animal/${animal.id}`} style={{ textDecoration: 'none' }} > 
        <AnimalCard
        favoriteAnimals={favoriteAnimals}
        unfavoriteAnimals={unfavoriteAnimals}
        key={animal.id}
        animalDetails={animal} />
        </Link>
      ))}
    </div>
  )
}

export default Animals;

