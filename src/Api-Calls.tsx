
// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token





import React from "react";

const getAnimals = () => {
     return fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImU5NTViOTJiYTcwZWRkMzE2YjA4YjcyODg4NGQxZWU5NDYwMTc0MDZjM2E4YTY4MDY1Y2Y0MWZkMGJmNzFkYjYzOTgzNmRlYzI0MTkyNThhIiwiaWF0IjoxNjg1MzM5NDgyLCJuYmYiOjE2ODUzMzk0ODIsImV4cCI6MTY4NTM0MzA4Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.gDH_1MHB1Wdnnw9shI1rczPLvzbFTZd9v8CGZW2r8xYrB0wuoRbiKIoMS5vETQXjZEWiiUHZnPvLD-4qtYFqrEOL7wCalTsRoqdZFTPRmzZQhgpW-DgGIizpspU6RkmVC4juT7Y3RdVrabUtwnJ6GcvlYnYfMBe5ukSR51Dpe4yaKYseaV-E51qq_o4BuqE_UNbmYJ3d2VRUI6YLqKQ738HYLlf9HvQYkeQ5EoZuCdzxkRzNhwPPkc0ZxGcktZJc4dzyXhPpoE5n57sJyqtGRXvLO2uxtACamFKjRn3w8474Volcp6rTWkz4Kpgz6BuIXUXW5cEe5uro4GUd59tfvw",
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