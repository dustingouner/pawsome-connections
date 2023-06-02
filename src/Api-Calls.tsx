import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhkZjcwNWRlZTQ3ZGQ2NzUzNzE1ZDMzZTE3ZmE0ZDU5OGViMTg1OGJlOWZhNWUyMDc1YTlhMDk1OTc1YzA2ZTExNjJhNzI2MWYwOWI1M2ZlIiwiaWF0IjoxNjg1NzIzNDE3LCJuYmYiOjE2ODU3MjM0MTcsImV4cCI6MTY4NTcyNzAxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.Z07D-ZxgIJIDYpzt24fQQv4e2e94AP4_S1M0Z9XZ0aV7mZHUGSMLDnHrwz_vxQy-G4wPThe5gKjnmpn9Lago_yuPaa1E14iH6PIuycAtvJeTN5bjgZ3HH54y0k93vGFchDyLCMBK8jrf6uHKa31b1CtzVWtlGJ7mwfVLUDsdqbeyf4TT5nM9t2EN872pNJTDNPGHjiNLUgAMF_RKRTXH5wyC5x0N7VUYslibKzIMHmzC5y4mE827DvhgO7KnkN2ER8pineMQEPn2XppgFZwEtu2mJv1kS8LMFZ8octxZUZPT6LWGFbPJWzUbqxXO0e2lWQxg8NWrPntYdJlltpfyhQ",
    },
  }).then((response) => response.json());
}

const getAnimalSelected = (location: string, type: string) => {
  let url = "https://api.petfinder.com/v2/animals?age=senior";

  if (location) {
    url += `&location=${location}`;
  }

  if (type && type !== 'all') {
    url += `&type=${type}`;
  }

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhkZjcwNWRlZTQ3ZGQ2NzUzNzE1ZDMzZTE3ZmE0ZDU5OGViMTg1OGJlOWZhNWUyMDc1YTlhMDk1OTc1YzA2ZTExNjJhNzI2MWYwOWI1M2ZlIiwiaWF0IjoxNjg1NzIzNDE3LCJuYmYiOjE2ODU3MjM0MTcsImV4cCI6MTY4NTcyNzAxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.Z07D-ZxgIJIDYpzt24fQQv4e2e94AP4_S1M0Z9XZ0aV7mZHUGSMLDnHrwz_vxQy-G4wPThe5gKjnmpn9Lago_yuPaa1E14iH6PIuycAtvJeTN5bjgZ3HH54y0k93vGFchDyLCMBK8jrf6uHKa31b1CtzVWtlGJ7mwfVLUDsdqbeyf4TT5nM9t2EN872pNJTDNPGHjiNLUgAMF_RKRTXH5wyC5x0N7VUYslibKzIMHmzC5y4mE827DvhgO7KnkN2ER8pineMQEPn2XppgFZwEtu2mJv1kS8LMFZ8octxZUZPT6LWGFbPJWzUbqxXO0e2lWQxg8NWrPntYdJlltpfyhQ",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching animals:", error);
      throw error;
    });
};

export { getAnimals, getAnimalSelected };