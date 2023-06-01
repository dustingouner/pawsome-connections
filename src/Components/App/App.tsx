import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Animals from '../Animals/Animals';
import AnimalDetails from '../AnimalDetails/AnimalDetails'
import { getAnimals, getLocation, getType } from '../../Api-Calls';
import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import { Animal, EventHandler } from '../../types';

  function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [error, setError] = useState<any>('');
    const [location, setLocation] = useState<string>('');
    const [favorites, setFavorites] = useState<Animal[]>([]);
    const [button, setButton] = useState<string>('Show Favorites');
    const [animalType, setAnimal] = useState<string>('')

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       let data;
          
    //       if(location !== "") {
    //         data = await getLocation(location)
    //       } else {
    //         data = await getAnimals()
    //         console.log(data, "data")
    //       }
        
    //       setAnimals(data.animals);

    //       } catch (error) {
    //         setError(error);
    //       }
    //   };
  
    //   fetchData();
    // }, [location]);


     useEffect(() => {
       const fetchData = async () => {
         try {
           let data;
           if (animalType !== "all") {
             data = await getType(animalType);
           } else if (location !== "") {
             data = await getLocation(location);
           } else {
             data = await getAnimals();
           }
           setAnimals(data.animals);
         } catch (error) {
           setError(error);
         }
       };

       fetchData();
     }, [animalType, location]);


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

    const displayFavorites: Function = () => {
      if(favorites && favorites !== animals) {
        setAnimals(favorites)
        setButton("Show All")
      } else if(favorites ) {
        getAnimals()
        .then(data => setAnimals(data.animals))
        setButton("Show Favorites")
      }
    }
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/:id" component  ={AnimalDetails}>
          <Header />
          <AnimalDetails animals={animals}/>
        </Route>
        <Route exact path="/"> 
          <Header />
          <div className="submission-container">
          <button id="showFavorites" className='show-favorites-btn' onClick={event => displayFavorites(event)}>{button}</button>
          <Form setLocation={setLocation} setAnimal={setAnimal} />
          </div>
          <Animals animals={animals} favoriteAnimals={favoriteAnimals} unfavoriteAnimals={unfavoriteAnimals}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
