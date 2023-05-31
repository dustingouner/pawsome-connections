import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Animals from '../Animals/Animals';
import AnimalDetails from '../AnimalDetails/AnimalDetails'
import { getAnimals, getLocation } from '../../Api-Calls';
import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import { Animal, EventHandler } from '../../types';

  function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [error, setError] = useState<any>('');
    const [location, setLocation] = useState<string>('');
    const [favorites, setFavorites] = useState<Animal[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          let data;
          
          if(location !== "") {
            data = await getLocation(location)
          } else {
            data = await getAnimals()
          }
        
          setAnimals(data.animals);

          } catch (error) {
            setError(error);
          }
      };
  
      fetchData();
    }, [location]);


    const favoriteAnimals:Function = (id:number) => {
      const findAnimal: Animal | undefined = animals.find(animal => animal.id === id);

      if(findAnimal) {
        setFavorites([...favorites, findAnimal])
      }
    }

    const unfavoriteAnimals: Function = (id:number) => {
      const favoriteAnimals: Animal[] = favorites.filter(animal => animal.id !== id)

      setFavorites(favoriteAnimals)
    }

  console.log(favorites, 'favoriteseeeese')
  console.log(location, "line 60")
  console.log(animals, "animals");
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/:id" component  ={AnimalDetails}>
          <Header />
          <AnimalDetails animals={animals}/>
        </Route>
        <Route exact path="/"> 
          <Header />
          <Form setLocation={setLocation} />
          <Animals animals={animals} favoriteAnimals={favoriteAnimals} unfavoriteAnimals={unfavoriteAnimals}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
