import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Animals from '../Animals/Animals';
import AnimalDetails from '../AnimalDetails/AnimalDetails'
import { getAnimals, getLocation } from '../../Api-Calls';
import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import { Animal } from '../../types';

  function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [error, setError] = useState<any>('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAnimals();
          setAnimals(data.animals);
          console.log(data, "data");
          console.log(data.animals, "DA");
        } catch (error) {
          setError(error);
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    console.log(animals, "animals");
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/:id" >
          <Header />
          <AnimalDetails animals={animals}/>
        </Route>
        <Route exact path="/"> 
        {/* {animals.length > 0 ? ( */}
          {/* // second way to resolve loading is by adding the above conditional. page would only render once data has loaded. Moved Header component inside of route, otherwise it would load first while waiting on the data.  */}
          <Header />
          <Form />
          <Animals animals={animals} />
        {/* ) : null} */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
