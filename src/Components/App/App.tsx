import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Animals from '../Animals/Animals';
import AnimalDetails from '../AnimalDetails/AnimalDetails'
import getAnimals from '../../Api-Calls';
import {useState, useEffect} from 'react'
import { Route, Switch
 } from 'react-router-dom';
 
 type Animal = {
  id: number,
  url:string,
  // "age":string,
  // breeds: object,
  // contact:object,
  // description:string,
  // gender:string,
  // name:string,
  // size: string,
  // species: string,
  // type: string,
 }
 
function App() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [error, setError] = useState('')
  useEffect(() => {
    getAnimals()
      .then((data) => {
        setAnimals(data.animals)
        console.log(data, "data")
        console.log(data.animals, "DA")
        console.log(animals, "animals")
      })
      .catch((error) => {
        setError(error)
        console.log(error)
      })
  },[])
  
  return (
    <div className="App">
      <Header />
      <Route exact path="/:id">
        <AnimalDetails />
      </Route>
      <Route exact path="/">
        <Form />
        <Animals animals={animals} />
      </Route>
    </div>
  );
}

export default App;
