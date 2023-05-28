
// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token





import React from "react";

const getAnimals = () => {
     return fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImI0MDY3Y2YxNzRhOTFiMzIxNDcwYjg1YWUwNzY1ZmRhYWNjMGQ1NzVmM2NhMTFjNDZmMjViZTA2MzMyNzA4NjA4NjJhNGI5NDYwZGVlMjdmIiwiaWF0IjoxNjg1MzA2ODI0LCJuYmYiOjE2ODUzMDY4MjQsImV4cCI6MTY4NTMxMDQyNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.rE4ikUjJ6hlMCxH5ZWNIa50_1KOzOOsowRaIQ4PrmqaREhC_N3bgYi0_q1enRHjMsN4uiF8LgUbj52H8kizIiiuS_4B6-jCHB-VCG0zOLCZNO5lfABGeXPOX4WVKRqqBKpwAlK_NZPKtmwqAGTg_gnhQ9hmTDuxRhzXMu6XdGyzl8Y1LIzcHxq3iLKE89J42sNt31idcqE4BDTMc5pHVMErX_YNLV3N0yAcAtOVYwSmMeJWf1g04SgehUZWa2955Ueu737igbmpLUy3pkj9KbyiwD-E7u6X58op4DGeZDhdZBQ1GC2MyfRxwwnCnOOMSU1eaucWsDb1djiGNssN6oA",
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