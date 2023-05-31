// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token

import React from "react";

const getAnimals = () => {
  return fetch(
    "https://api.petfinder.com/v2/animals?age=senior",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjI5OTMxYTc2YjYxMzMxOTE5MWFjOGU3ZGYwMWQ0ZTI4MjE2ODYyMGEyZjA0OGY0ODRmODZjNjU3MGM1MjE3ZWM3NzdjNjcxYmRkMmViMTBlIiwiaWF0IjoxNjg1NDg3NDE2LCJuYmYiOjE2ODU0ODc0MTYsImV4cCI6MTY4NTQ5MTAxNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.SuQEVFxvtgT2nQlpvc0d4DfuqaQXdkxt-qalviYCKqxceU0583VW662c1n1WO5mQ6yowD7AaM-YKATCdPKVjLG10iF6kaTc7AGoiq4caxtbCqmI-kI6r6N-C48oRnxh3yTyJWvVfbAQJ58LQk5Cl8qSuCZCR8hWmsL2YQjTEgU3WomItfMBEGWCGh3_sft4JRnoFxFzec5-kxGA2DITBVMQSDXhGrCumo3RCp9w-p1kZisOek_u7Zpl9wQY8b8AKC7QjYiGQd2by9veM6hU09JbuSXnrx76zQuurCha3W_pEqZbXqIUXIbTvFmUQt2AY_P-QbNnXyk66LoEDcyrcKA",
      },
    }
  ).then((response) => response.json());
}

const getLocation = (zipCode:string) => {
  console.log("this is fetching!")
  return fetch(
    `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjI5OTMxYTc2YjYxMzMxOTE5MWFjOGU3ZGYwMWQ0ZTI4MjE2ODYyMGEyZjA0OGY0ODRmODZjNjU3MGM1MjE3ZWM3NzdjNjcxYmRkMmViMTBlIiwiaWF0IjoxNjg1NDg3NDE2LCJuYmYiOjE2ODU0ODc0MTYsImV4cCI6MTY4NTQ5MTAxNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.SuQEVFxvtgT2nQlpvc0d4DfuqaQXdkxt-qalviYCKqxceU0583VW662c1n1WO5mQ6yowD7AaM-YKATCdPKVjLG10iF6kaTc7AGoiq4caxtbCqmI-kI6r6N-C48oRnxh3yTyJWvVfbAQJ58LQk5Cl8qSuCZCR8hWmsL2YQjTEgU3WomItfMBEGWCGh3_sft4JRnoFxFzec5-kxGA2DITBVMQSDXhGrCumo3RCp9w-p1kZisOek_u7Zpl9wQY8b8AKC7QjYiGQd2by9veM6hU09JbuSXnrx76zQuurCha3W_pEqZbXqIUXIbTvFmUQt2AY_P-QbNnXyk66LoEDcyrcKA",
      },
    }
  ).then((response) => response.json());
}

export { getAnimals, getLocation };