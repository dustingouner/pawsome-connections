import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImY5NGU2MGQ1NzFlYmQ2NzRmOTgwZjkwZmRjMDMxYmEwOTJkMzNlNzc3YWQ0ZTJmZTVkMDcyNjY2MGQ2ZTE1Y2YxYTUzNzNhZWY1YzhmYmVhIiwiaWF0IjoxNjg1NTg1MTUyLCJuYmYiOjE2ODU1ODUxNTIsImV4cCI6MTY4NTU4ODc1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.iLaQZhf5RyQBlJjxAA1tJBIMnIlM5vfABptirX2EZiHkTmCwDdjBbrdAd_THn-4KT3rZE_YTuX2tAbSryESKJaE9fGcILIZfqcGJWgpzZ6nkQbvoACWAh5bkjZqtgIjhUPcPgvKwd76bpgab_wn7ZPUfclWJpBmgZ5r3QcTecX0Kw2yRZ_SIdBt2AhjfEa0129zaC3TuNfd4M0srAev1X_DDQ7FtqZoJemY_3sNOdqg7A4dj20KwtWayBsC6hI7U7pbbtch8Lp10PDAg2_hDBzING1JOVh1LvtOugi6D0cJ3DmEEVGMbW2yGT395nQXuQn0lsUFEjD7ycPdHcX3pZw",
    },
  }).then((response) => response.json());
}

const getLocation = (zipCode:string) => {
  console.log("this is fetching!")
  // const zipcodeFetch = `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`
  return fetch(
    `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImY5NGU2MGQ1NzFlYmQ2NzRmOTgwZjkwZmRjMDMxYmEwOTJkMzNlNzc3YWQ0ZTJmZTVkMDcyNjY2MGQ2ZTE1Y2YxYTUzNzNhZWY1YzhmYmVhIiwiaWF0IjoxNjg1NTg1MTUyLCJuYmYiOjE2ODU1ODUxNTIsImV4cCI6MTY4NTU4ODc1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.iLaQZhf5RyQBlJjxAA1tJBIMnIlM5vfABptirX2EZiHkTmCwDdjBbrdAd_THn-4KT3rZE_YTuX2tAbSryESKJaE9fGcILIZfqcGJWgpzZ6nkQbvoACWAh5bkjZqtgIjhUPcPgvKwd76bpgab_wn7ZPUfclWJpBmgZ5r3QcTecX0Kw2yRZ_SIdBt2AhjfEa0129zaC3TuNfd4M0srAev1X_DDQ7FtqZoJemY_3sNOdqg7A4dj20KwtWayBsC6hI7U7pbbtch8Lp10PDAg2_hDBzING1JOVh1LvtOugi6D0cJ3DmEEVGMbW2yGT395nQXuQn0lsUFEjD7ycPdHcX3pZw",
      },
    }
  ).then((response) => response.json());
}

const getType = (animalType: string) => {
  // console.log(animalType, "Animaltype line 29");
  // const zipcodeFetch = `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`
  return fetch(
    `https://api.petfinder.com/v2/animals?age=senior&types/${animalType}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImY5NGU2MGQ1NzFlYmQ2NzRmOTgwZjkwZmRjMDMxYmEwOTJkMzNlNzc3YWQ0ZTJmZTVkMDcyNjY2MGQ2ZTE1Y2YxYTUzNzNhZWY1YzhmYmVhIiwiaWF0IjoxNjg1NTg1MTUyLCJuYmYiOjE2ODU1ODUxNTIsImV4cCI6MTY4NTU4ODc1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.iLaQZhf5RyQBlJjxAA1tJBIMnIlM5vfABptirX2EZiHkTmCwDdjBbrdAd_THn-4KT3rZE_YTuX2tAbSryESKJaE9fGcILIZfqcGJWgpzZ6nkQbvoACWAh5bkjZqtgIjhUPcPgvKwd76bpgab_wn7ZPUfclWJpBmgZ5r3QcTecX0Kw2yRZ_SIdBt2AhjfEa0129zaC3TuNfd4M0srAev1X_DDQ7FtqZoJemY_3sNOdqg7A4dj20KwtWayBsC6hI7U7pbbtch8Lp10PDAg2_hDBzING1JOVh1LvtOugi6D0cJ3DmEEVGMbW2yGT395nQXuQn0lsUFEjD7ycPdHcX3pZw",
      },
    }
  ).then((response) => response.json());
};

export { getAnimals, getLocation, getType };