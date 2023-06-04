import React from "react";

const getAnimals = (location: string, type: string) => {
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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImRhMTgyNDA3YjVhNzc2MjZiZjY4ZjA4MDM2NTRhMzQ5Y2UxOWUzOTIwYmVhZDYyMDRmOWI2Njg4YTRlZWZhNGUwN2ExNjQwOWVmYmU2NGQ1IiwiaWF0IjoxNjg1ODQ4MjIxLCJuYmYiOjE2ODU4NDgyMjEsImV4cCI6MTY4NTg1MTgyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.NYKpIK_e0vvJCYL1FBOPfB7_ERgfihcHXd7c0NLx7bzJyH3gRK6ZJoRkqIJk40Mj2zrXF2e21QC9-n2IxFn2-NnFqHAHvvRmOY2Plyh2A6kIQ6r6OJLkRnaq6csLUZYz8IN4dfxJ5RVqqc4yNxs3kqH7nzsG8of-HS5GyfdLvOKCW21sNT_TphvxlXxISOXx7f1-d6UN6czm1lyvY-pJEcCcBwCYgpkWaQq7HkbmkBJHbkR1Cz_Wqslr5sMuoqMMZmKiCGmuXO4D9dI7mjcW50d3PH8h0p6suyif66u6EjyTLjUfIQy15wyhODYd0IPoMpF8s7JJBCL_su7DaNVz_Q",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error ("Failed to Fetch") 
      } else {
        return response.json()
      }
    })
};

export { getAnimals };