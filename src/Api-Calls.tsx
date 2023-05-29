
// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token





import React from "react";

const getAnimals = () => {
     return fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImRmNTYyOWE1MjM3OGE1ZTlhNDJhZWUzYTAxMmE2ZWUyMDJlODgyNjExM2Y0Y2JkZmU4NGZlYTlkZWYwMzk3ZTY4OWFmM2UxZDJkMTliNzU1IiwiaWF0IjoxNjg1Mzc5NDYyLCJuYmYiOjE2ODUzNzk0NjIsImV4cCI6MTY4NTM4MzA2Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.OWgzLHHa4Krb162_goW7LwMQf_1Jpuzo4ym0nONrYNIE9GZG_1Hy9ynuYjXjPCRrWzs-dPhlyDtw4laH-QpmCu90tzbuyqZaUqfsLmhua8D7KLifFy0Nls4U6h7OaOCHjiybzOLlRHHXT3kopmQjCAQFETeoKjXABSGuyzamxGKCtSyaCzuMa3ZP3yGQZxlDh4ojV_a9cuce90vuipxrc3amGTOvxNwtx-Mm23iYzObOFjSgl4fHsskIRqDAZLySjF575oLN7h7lgO9TNPsw8akTg4ZFa7_dxJ7UPtScFuCESDVo94EmiBUvi8qPI0BIFruLeMrsVTDdgsTz0e2bqg",
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