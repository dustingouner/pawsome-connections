import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Animals from '../Animals/Animals';
import AnimalDetails from '../AnimalDetails/AnimalDetails'
import { getAnimals, getAnimalSelected} from '../../Api-Calls';
import {useState, useEffect} from 'react'
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { Animal, EventHandler } from '../../types';

  function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [error, setError] = useState<any>('');
    const [location, setLocation] = useState<string>('');
    const [favorites, setFavorites] = useState<Animal[]>([]);
    const [button, setButton] = useState<string>('Show Favorites');
    const [animalType, setAnimal] = useState<string>('')
    const [link, setLink] = useState<string>("favorites")
    const url:string = useLocation().pathname

    useEffect(() => {
      const fetchData = async () => {
        try {
          let data;

          if (
            (animalType !== "all" ||
            location !== "")
          ) {
            data = await getAnimalSelected(location, animalType);
          } else if(animalType === 'all') {
            data = await getAnimals();
            console.log(data, "data");
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
      console.log(favorites)
      console.log(animal)
    }

    const unfavoriteAnimals: Function = (id:number) => {
      const favoriteAnimals: Animal[] = favorites.filter(animal => animal.id !== id)

      setFavorites(favoriteAnimals)
    }

    const displayFavorites: Function = () => {
      if(url === "/") {
        setButton("Show All")
        setLink("/")
        console.log(favorites, "favorites line 64")
        console.log(link, "link line 65")
        console.log(url)
      } else if(url === "/favorites") {
        setButton("Show Favorites")
        setLink("/favorites")
        console.log(link, "link 70")
        console.log(animals, "animals")
      }
    }
  return (
    <div className="App">
        <Route exact path="/favorites">
          <Header />
          <div className="submission-container">
            <Link to="/">
              <button
                id="showFavorites"
                className="show-favorites-btn"
                onClick={(event) => displayFavorites(event)}
              >
                {button}
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
          <Header />
          <AnimalDetails animals={animals} />
        </Route>
        <Route exact path="/">
          <Header />
          <div className="submission-container">
            <Link to={link}>
              <button
                id="showFavorites"
                className="show-favorites-btn"
                onClick={(event) => displayFavorites(event)}
              >
                {button}
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
    </div>
  );
}

export default App