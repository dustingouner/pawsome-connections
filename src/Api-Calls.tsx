import React from "react";

const getAnimals = () => {
     return fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjIyYzZjNjE5ZjJkMTI2MjQ2NDdlMDY2NjQ1ZTE1NGU0ZDg0N2M2YTU4NzdhNzM2NjY0NmQwYzlhYjUxYjQzNTMxNTkwYjAyODQ4M2E3MDdhIiwiaWF0IjoxNjg1MjE1OTYwLCJuYmYiOjE2ODUyMTU5NjAsImV4cCI6MTY4NTIxOTU2MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.OdFVYiE6wVZ9dl0QUQdnVykSwB3Q1Tflo1ENuaxyamHmHaKCuQExesPuyZQSzYvJZxyzK6-8-8Z6yZz1-87SysnBQZMJogKoJxLybjydHjlWXQxmYu13MQRUEwmTc_Nhg9cNlXZpQHWv4Nuhp_a-3zoQ68qJSHZ7AR8PMqrlhunkBAYQgiJMtCgn_P4jtn6lfPw4iva_4KNowDGAOC0nFZJ_hvOtoEXm8gTTPANOhrDNwssG3kQSj-cFfQDS4vgA4pWpNb04rHANMLmYq58THJLJ9fz9RWcrV8fIDz-GqYhRvjlbtJc1q73Iibz63PPfbQkSU7hDqZnYuesZDrUEYA",
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