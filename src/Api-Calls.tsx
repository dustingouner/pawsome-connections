
// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token





import React from "react";

const getAnimals = () => {
     return fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjE3ODI1ZjEwNWY3OTQ4Mjk4OWRlMzlhMDYwYjBkODUyOTcyMDEyMjg3YTIwM2Y2MGI5NTMzODZhNDE1MDlhNzUwNTMwMDZhYWZlNGM2OTU3IiwiaWF0IjoxNjg1MzAxODUzLCJuYmYiOjE2ODUzMDE4NTMsImV4cCI6MTY4NTMwNTQ1Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.S5GEsj_fIHiXVubqUV2wMKM10fhMUMUvKE157UaMpj5NEXT2kkGZ3JUfVqqI-icE7rrmk8OKeR1jLVm7mmxV6jrMak2AiLdc-reeAYBKHAPyC4T1mF8yhFsa8RQbVchLwYPdPayCy-hAigDIsvOzWQp6V5F-hx25r77h92a0b5GLfpDjgGOV25SJPa-4zdtTnmcdujzg_lIk9s1iZFGLg2Zo4b1fP_JkN6EZnttr0Vxzu8SVlw4AxBXxiHMe6aQ2nNYhSggXTbfLJx0WvspbdaHdlWSCZoVRTs9ZoH1qEbffl5wN2xumtaAEygHevrNfgVz8UqnV5o6yLOlBj980lw",
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