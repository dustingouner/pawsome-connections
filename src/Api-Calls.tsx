// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token

import React from "react";

const getAnimals = () => {
  return fetch(
    "https://api.petfinder.com/v2/animals?location=60521&age=senior",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjgxMzFkZmI2ZWE0M2E1YjZmZDg2ZTAwMDEzM2UzMjRkM2Q2NTA2ZmFjMzRlOWE2N2VjZjUyMzU4ZDk2NjliOWQ3MTM0ODJhNmUwMTYzYzM5IiwiaWF0IjoxNjg1MzE5OTkyLCJuYmYiOjE2ODUzMTk5OTIsImV4cCI6MTY4NTMyMzU5Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.Z4i5z6pxqXPiy_FkiiiZV7WLHx2qHXHPAnYFZK6qSL7qZdpdWy4bzENPVz5LCHUsEYYWTjp79EAIToeXlW7D_mKDENn5Eu3DhxRDCqVrHZtV_SYF-mXjjA_YW0gpJivtOB_TOJBjsj7H4VcXIS7bGQgSZHX1K8OauIDZeMStFDcsq0CxG2XRAcaY4z286mUKH3C_Mx9Bt7UBBvP028lam2IETlUSA4r1zXi0QnrQeuFEo8lBn-S74AR-Cim_npFucDm_9d1hI4q3ePKdqPzOp6l7EOhGMpUVUVhOeOyOtV0HZgPzi3IHsdyHXv5ajMqpDfMANGFDwKLEfZKKpPsQ1Q",
      },
    }
  ).then((response) => response.json());
}

const getLocation = (zipCode:number) => {
  return fetch(
    `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjgxMzFkZmI2ZWE0M2E1YjZmZDg2ZTAwMDEzM2UzMjRkM2Q2NTA2ZmFjMzRlOWE2N2VjZjUyMzU4ZDk2NjliOWQ3MTM0ODJhNmUwMTYzYzM5IiwiaWF0IjoxNjg1MzE5OTkyLCJuYmYiOjE2ODUzMTk5OTIsImV4cCI6MTY4NTMyMzU5Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.Z4i5z6pxqXPiy_FkiiiZV7WLHx2qHXHPAnYFZK6qSL7qZdpdWy4bzENPVz5LCHUsEYYWTjp79EAIToeXlW7D_mKDENn5Eu3DhxRDCqVrHZtV_SYF-mXjjA_YW0gpJivtOB_TOJBjsj7H4VcXIS7bGQgSZHX1K8OauIDZeMStFDcsq0CxG2XRAcaY4z286mUKH3C_Mx9Bt7UBBvP028lam2IETlUSA4r1zXi0QnrQeuFEo8lBn-S74AR-Cim_npFucDm_9d1hI4q3ePKdqPzOp6l7EOhGMpUVUVhOeOyOtV0HZgPzi3IHsdyHXv5ajMqpDfMANGFDwKLEfZKKpPsQ1Q",
      },
    }
  ).then((response) => response.json());
}

export { getAnimals, getLocation };