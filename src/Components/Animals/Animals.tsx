import React from "react";
import './Animals.css'
import '../AnimalCard/AnimalCard'

type Animal = {
  id: number;
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

  // if (animals.length === 0) {
  //   return <p>Please hang tight while we find your perfect pet...</p>; // Display a loading state, one way to resolve the delay with the data loading. Will need to adjust Switch in App
  // }
  // console.log("animal container", props.animals[1].url)
  const testId: any = props.animals[1].gender
  // console.log('testID', testId)
  return (
    <section className="animals-section">
      <p>{testId}</p>
    </section>
  )
}

export default Animals;

