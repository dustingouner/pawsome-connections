
// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token





import React from "react";

const getAnimals = () => {
     return fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjQyN2VjNTQzZGMzY2U4MDk2ZGYzMjA0NTVhYjQ4MGE0Y2RlZjdhYzEzMzcxODYwYThiODc1M2M4OGY4ZTAwMzU1MTEwOGVjM2ZlYmQ1MjAxIiwiaWF0IjoxNjg1MzEwOTM1LCJuYmYiOjE2ODUzMTA5MzUsImV4cCI6MTY4NTMxNDUzNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.wQwGmjads94BWmJGHJbMzvv3jYGi94v_sHwmkRynm0wJKjN9AVDX6l30aM3gjZNiJ-FSHhX4KQshAQG9Opq_MZ6GqrFUvfSKnWj7V0GmVrxDtjAcebgBNV6BWc1r5Mpyz9VyLsVQyUmizoEAisKEzUbVDi7dxb-47B-g3DL4NNIrZFlIL8gCkm3I3NSQsdSIV3Am5cpH7csUCHAHFFW4iM5PL1hMCK5kViSKSHW03z8jH-Xz5wlebENgWv7TYTXpZZnAHFzUNr7Y_fklavlIoo83wWd652JSjKOUiJnUHFqPOC7N-L7b18SNYrMR7fkrjSdbukXF2P3SYKItBXL3lA",
         },
       }
     ).then((response) => response.json());
     //    .then((data) => {
     //      // Handle the response data
     //      console.log(data);
     //    })
     //    .catch((error) => {
     //      // Handle any errors
     //      console.error("Error:", error);
     //    });
}

export default getAnimals;