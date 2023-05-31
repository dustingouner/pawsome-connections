// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token

import React from "react";

const getAnimals = () => {
  return fetch(
    "https://api.petfinder.com/v2/animals?age=senior",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhjMGViOTVkYmJiZGY2MmM0N2JmZjllYTllNTY5NTMyNWQzYjk1MzVkYjU4ODQwNGU3MzEzNTUxODUwN2I0ODk0ZGZkMTlhMWYzZTQ2Zjg4IiwiaWF0IjoxNjg1NTYyMDcwLCJuYmYiOjE2ODU1NjIwNzAsImV4cCI6MTY4NTU2NTY3MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ICs5uQlSZ8AkffcSihUS6u33x1vKsjgBspohf1dz1rfvrV--hvsLi8cp9u-0FNW1CkQbacTzwe7GJfOaAVPEICMhx1qTgXyib4oVgjdfL4OLwz3prnzB92SufWuHGcw3Krh9DQpMQ1DncLEId-GSPFVlHzC6mMR5bqPpgnZfWY4t_g3kB8tBvVCs6A7XIOkCJuquH3Wu-ZcVX5L4ZA31PfWKxHMWMJuu7MrhiVYodPsA7x9x1nVB6McsGIraMRMnLyh7-9mEBtaxKO9JDsKHaPgy8tfc31APTYkXLdr0cAcvZ7-xwK4p6urMGy2DO7SXolhLu4pvQG1dHu9zjne-aA",
      },
    }
  ).then((response) => response.json());
}

const getLocation = (zipCode:string) => {
  console.log("this is fetching!")
  return fetch(
    `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhjMGViOTVkYmJiZGY2MmM0N2JmZjllYTllNTY5NTMyNWQzYjk1MzVkYjU4ODQwNGU3MzEzNTUxODUwN2I0ODk0ZGZkMTlhMWYzZTQ2Zjg4IiwiaWF0IjoxNjg1NTYyMDcwLCJuYmYiOjE2ODU1NjIwNzAsImV4cCI6MTY4NTU2NTY3MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ICs5uQlSZ8AkffcSihUS6u33x1vKsjgBspohf1dz1rfvrV--hvsLi8cp9u-0FNW1CkQbacTzwe7GJfOaAVPEICMhx1qTgXyib4oVgjdfL4OLwz3prnzB92SufWuHGcw3Krh9DQpMQ1DncLEId-GSPFVlHzC6mMR5bqPpgnZfWY4t_g3kB8tBvVCs6A7XIOkCJuquH3Wu-ZcVX5L4ZA31PfWKxHMWMJuu7MrhiVYodPsA7x9x1nVB6McsGIraMRMnLyh7-9mEBtaxKO9JDsKHaPgy8tfc31APTYkXLdr0cAcvZ7-xwK4p6urMGy2DO7SXolhLu4pvQG1dHu9zjne-aA",
      },
    }
  ).then((response) => response.json());
}

export { getAnimals, getLocation };