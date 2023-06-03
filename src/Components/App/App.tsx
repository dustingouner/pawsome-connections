import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Animals from '../Animals/Animals';
import AnimalDetails from '../AnimalDetails/AnimalDetails'
import { getAnimals, getAnimalSelected} from '../../Api-Calls';
import { useState, useEffect } from 'react'
import { Route, Link, useLocation, Switch } from 'react-router-dom';
import { Animal } from '../../types';
import ShowError from '../Error/Error';

  function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [error, setError] = useState<any>('');
    const [location, setLocation] = useState<string>('');
    const [favorites, setFavorites] = useState<Animal[]>([]);
    const [animalType, setAnimal] = useState<string>('');
    const [link, setLink] = useState<string>("favorites");
    const url:string = useLocation().pathname;

    useEffect(() => {
      const fetchData = async () => {
        try {
          let data;

          if ((animalType !== "all" || location !== "")) {
            data = await getAnimalSelected(location, animalType);
          } else if(animalType === 'all') {
            data = await getAnimals();
          }
          setAnimals(data.animals);
        } catch (error) {
          setError(error);
        }
      };

      fetchData();
    }, [location, animalType]);

    const favoriteAnimals:Function = (animal:Animal) => {
      setFavorites([...favorites, animal])
    };

    const unfavoriteAnimals: Function = (id:number) => {
      const favoriteAnimals: Animal[] = favorites.filter(animal => animal.id !== id);

      setFavorites(favoriteAnimals);
    };

    const displayFavorites: Function = () => {
      if(url === "/") {
        setLink("/favorites");
      } else if(url === "/favorites") {
        setLink("/");
      };
    };

    if(error) {
      return (
        <div>
          <Header />
       <p>{error.message}</p>
      </div>

      )
        
    } else {
    
    

  return (
  
    <div className="App">
      <Header />
      <Switch >
        <Route exact path="/favorites">
          {/* <Header /> */}
          <div className="submission-container">
            <Link to="/">
              <button
                id="showFavorites"
                className="show-favorites-btn"
                onClick={(event) => displayFavorites(event)}
              >
                Show All Pets
              </button>
            </Link>
          </div>
          <Animals
            animals={favorites}
            favoriteAnimals={favoriteAnimals}
            unfavoriteAnimals={unfavoriteAnimals}
          />
        </Route>
        <Route exact path="/animal/:id">
          {/* <Header /> */}
          <AnimalDetails animals={animals} />
        </Route>
        <Route exact path="/">
          {/* <Header /> */}
          <div className="submission-container">
            <Link to={link}>
              <button
                id="showFavorites"
                className="show-favorites-btn"
                onClick={(event) => displayFavorites(event)}
              >
                Show Favorite Pets
              </button>
            </Link>
            <Form setLocation={setLocation} setAnimal={setAnimal} />
          </div>
          <Animals
            animals={animals}
            favoriteAnimals={favoriteAnimals}
            unfavoriteAnimals={unfavoriteAnimals}
          />
        </Route>
        <Route path='*' render={() => <ShowError />}>

        </Route>
      </Switch>
    </div>
  );
}
}

export default App