
// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token





import React from "react";

const getAnimals = () => {
     return fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjdhNjdjYTg5YjA5MmUyODcxOGJhZGFkOTllNTc2MzBmOTEwNmYzNWVjMzBkNTkwOTUxNmI3NGY1OGI5MmViYzdiN2ViYzBjZGI2NjQ2MjYwIiwiaWF0IjoxNjg1MjI2ODgyLCJuYmYiOjE2ODUyMjY4ODIsImV4cCI6MTY4NTIzMDQ4Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.tMtwb6O94JMuDWow1nblJ8Pjon2yOUcZIISYjH7osVxPbTfPEtb39m_vR3h5MaZEmmFXO5fMSrriTLwCGMz5CVkvtMZQo11Sxq8lQpdLD6Z2VgsKW2pbIEHqem5vBU9EFPYKPzZJTQDM32mKyzM9BEbMiaZDirlG99t3a_Xo1ZX6MwbtqiOUe82DGQh6EPGi1SfQZyRXdJeZ31rnuNjYDeWEJTJ9s1aCUmG_dNN5_txijA49ZhGtIPRcQiv6oy5zdIoh3tI9WQVmqrYT6_uMqG_cPI9-3eIXBxuGQBBjRJSNvDbHbYVzU81mUPc53YQY9YAqqWx0299NJxTqTZNqbA",
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