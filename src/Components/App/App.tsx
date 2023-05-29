import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Animals from '../Animals/Animals';
import AnimalDetails from '../AnimalDetails/AnimalDetails'
import getAnimals from '../../Api-Calls';
import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
 

type Animal = {
  id: number;
  primary_photo_cropped: {
    full: string,
    large: string,
    medium: string,
    small: string
 } | null;
 url: string,
  age: string,
  breeds: {
    mixed: boolean,
    primary: string,
    secondary: string,
    unknown: boolean
  },
  contact: {
    address: {
      address1: string,
      address2: string,
      city: string,
      country: string,
      postcode: string,
      state: string
    }
    email: string,
    phone: string
  }
  description: string,
  gender: string,
  name: string,
  size: string,
  species: string,
  type: string,
  status: string,
  attributes: {
    house_trained: boolean,
    spayed_neutered: boolean,
    shots_current: boolean,
  },
  photos: [{
    0: {
      small: string,
    }

  }
  ]
};
 
// async function App() {
//   const [animals, setAnimals] = useState<Animal[]>([]);
//   const [error, setError] = useState('')


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

  // useEffect(() => {
  //   getAnimals()
  //     .then((data) => {
  //       setAnimals(data.animals)
  //       console.log(data, "data")
  //       console.log(data.animals, "DA")
  //     })
  //     .catch((error) => {
  //       setError(error)
  //       console.log(error)
  //     })
  //   },[])
  //   console.log(animals, "animals")
  
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
          <>
          <Header />
          <Form />
          <Animals animals={animals} />
          </>
        {/* ) : null} */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
