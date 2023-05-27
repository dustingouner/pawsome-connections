import React from "react";
type Animal = {
  id: number;
  url: string;
  // "age":string,
  // breeds: object,
  // contact:object,
  // description:string,
  // gender:string,
  // name:string,
  // size: string,
  // species: string,
  // type: string,
};

interface AnimalProps {
  animals:Animal[]
}

const Animals:React.FC<AnimalProps> = (props:AnimalProps) => {
  return (
    <section className="animals-section">
     
    </section>
  )
}

export default Animals;

