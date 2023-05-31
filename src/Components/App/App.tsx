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
        {/* {animals.length > 0 ? ( */}
          {/* // second way to resolve loading is by adding the above conditional. page would only render once data has loaded. Moved Header component inside of route, otherwise it would load first while waiting on the data.  */}
          <Header />
          <Form setLocation={setLocation} />
          <Animals animals={animals} favoriteAnimals={favoriteAnimals} />
        {/* ) : null} */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
