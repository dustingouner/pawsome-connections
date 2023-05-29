
// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token





import React from "react";

const getAnimals = () => {
     return fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjlmM2M2ZGMzNWRhM2MxMzYwZDE0N2E5ZmQ5ZTI5YWJiZDY2MDk2YzZkZjAwOTY4MWRjZmIzODIyZDA3ZGZkYzNmODdlNWRkNWQ3NDY4ODJkIiwiaWF0IjoxNjg1Mzg2MTUxLCJuYmYiOjE2ODUzODYxNTEsImV4cCI6MTY4NTM4OTc1MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.f4pXwJIsAlnzdlnrNNX68Dn1PifGP0NPBGCaTMBR0kmJf5X4BdGxB2cr8-NEefz1bI3T8HmkF2qQk_Y8yI_QphLUOFw5Xq9009gKWJ-0aa0q0MuuGR80EscEdbC8htbsSHjU-_cF6kQER0k7zYMfhMkbIX9bQRtIiJ6mDAG58mSh-LHppGmLXHcgGdB0YYUcllioGqBgqXtJPxqOpgHJrBt7ejYiObBEQ-HuMSuVV7RxheRbFEFAugqlq_zOpH3g57ueOEza9sPuJkkC_-da-dP9q-ng1hgKTvPtIHpJrubr4jJV5OhFLwStAefml6SgFWusuQuBAeTycwiS0akTNw",
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