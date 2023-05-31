import React from "react";

const getAnimals = () => {
  return fetch(
    "https://api.petfinder.com/v2/animals?age=senior",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjBhODIyZDhkMTUxNjQ5OTQ4NTdkZDU4ZjY5NzY1YmVmY2I5M2Y5ODQ4MWJjZmQzZDQ5ZTQ4ZjdiNWQzYzk0YWI4Zjk5YjQ4NmMzNzcyOWY0IiwiaWF0IjoxNjg1NTc2Mzg4LCJuYmYiOjE2ODU1NzYzODgsImV4cCI6MTY4NTU3OTk4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.hND6auuaQAR1bxyDdusvKD6fWKPFJI3Unm5pp6l0ozKVOn6g9bCywPa7mALiqKpBj_lD-6jq_q7bFu6zPUs5Z3AzrW684tf4eoBT0kzcU3OmCrX4fqE3M8N115zAJ4AzmTKbFaLJX8t7g5-8e45hAsomQJCd6LM3W0sbScIAXTLxO8YZ6XqNQqv_dwx8LRbMC4TEvd8XCR2Mmi2lcSnqMZt3PXoDAG2-vdiLPQnW53hkpGngXFWGeq58CFfFVXx4CIO3rHAqTIU9he2duv2Vznc0LNhuS_YZJvcJiXq9PzHODBiYHY49yiTd_48Xp1ngxQCyMBvs8kUgDqEFEEicOQ",
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
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjBhODIyZDhkMTUxNjQ5OTQ4NTdkZDU4ZjY5NzY1YmVmY2I5M2Y5ODQ4MWJjZmQzZDQ5ZTQ4ZjdiNWQzYzk0YWI4Zjk5YjQ4NmMzNzcyOWY0IiwiaWF0IjoxNjg1NTc2Mzg4LCJuYmYiOjE2ODU1NzYzODgsImV4cCI6MTY4NTU3OTk4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.hND6auuaQAR1bxyDdusvKD6fWKPFJI3Unm5pp6l0ozKVOn6g9bCywPa7mALiqKpBj_lD-6jq_q7bFu6zPUs5Z3AzrW684tf4eoBT0kzcU3OmCrX4fqE3M8N115zAJ4AzmTKbFaLJX8t7g5-8e45hAsomQJCd6LM3W0sbScIAXTLxO8YZ6XqNQqv_dwx8LRbMC4TEvd8XCR2Mmi2lcSnqMZt3PXoDAG2-vdiLPQnW53hkpGngXFWGeq58CFfFVXx4CIO3rHAqTIU9he2duv2Vznc0LNhuS_YZJvcJiXq9PzHODBiYHY49yiTd_48Xp1ngxQCyMBvs8kUgDqEFEEicOQ",
      },
    }
  ).then((response) => response.json());
}

export { getAnimals, getLocation };