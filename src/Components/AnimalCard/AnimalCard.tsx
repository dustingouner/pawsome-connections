import React from "react";
import './AnimalCard.css'

const AnimalCard = () => {
  return (
    <section className='animal-card'>
      <img/>
      <h2>Animal Name</h2>
      <div>
        <p>Age</p>
        <p>Breed</p>
        <p>etc</p>
      </div>
    </section>
  )
}

export default AnimalCard;