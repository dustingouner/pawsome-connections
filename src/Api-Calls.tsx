import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:

        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjBjZGE0NTkxZDllNTcxOTllYjFhN2Y5NTczMDhmYWFiZjQwMmM0YjM5NDgyNGFlNzI1NDFjMzJlODc4NTdiZmNhODM0YThjOWI3NDg0YWRkIiwiaWF0IjoxNjg1ODIyMjg0LCJuYmYiOjE2ODU4MjIyODQsImV4cCI6MTY4NTgyNTg4NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.fEDbiLLjJbkRKJBbcHMllLlurlRcnKJNPuxWqYgq54dwNUJKOlQurvXFpy6SMSDmaC6CxA1mk3Ik75mZFlt4y8Rrj6RZhP-IdcPSf-nWWD68j0ItRakDXVBbjZoEn0uz504QSgJiuCUi_jYVzM6DH0yAPJMBo46GgaCAwavNBfdgG9cygZi0GsWL-nNhIKO_3x24l-WaDCbpqAlDSAhir23vzvGomcIKDdWjg5VsDgo9lZkJuuzLCIHQi-6JKta7E3rV1-zh72FB-vxQDplvSRewUKEtQXnxFhGLbv_HWXJy9pYoJ2JJJfiElD9VH-5rR7GHeoj8PtYWPIJuv49hfw",

    },
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error ("Failed to Fetch") 

  } else {
    return response.json()
  }})

  .catch((error) => {
    console.error("Error fetching animals:", error);
    throw error;
  });
}

const getAnimalSelected = (location: string, type: string) => {
  let url = "https://api.petfinder.com/v2/animals?age=senior";

  if (location) {
    url += `&location=${location}`;
  }

  if (type && type !== 'all') {
    url += `&type=${type}`;
  }

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization:

        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjBjZGE0NTkxZDllNTcxOTllYjFhN2Y5NTczMDhmYWFiZjQwMmM0YjM5NDgyNGFlNzI1NDFjMzJlODc4NTdiZmNhODM0YThjOWI3NDg0YWRkIiwiaWF0IjoxNjg1ODIyMjg0LCJuYmYiOjE2ODU4MjIyODQsImV4cCI6MTY4NTgyNTg4NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.fEDbiLLjJbkRKJBbcHMllLlurlRcnKJNPuxWqYgq54dwNUJKOlQurvXFpy6SMSDmaC6CxA1mk3Ik75mZFlt4y8Rrj6RZhP-IdcPSf-nWWD68j0ItRakDXVBbjZoEn0uz504QSgJiuCUi_jYVzM6DH0yAPJMBo46GgaCAwavNBfdgG9cygZi0GsWL-nNhIKO_3x24l-WaDCbpqAlDSAhir23vzvGomcIKDdWjg5VsDgo9lZkJuuzLCIHQi-6JKta7E3rV1-zh72FB-vxQDplvSRewUKEtQXnxFhGLbv_HWXJy9pYoJ2JJJfiElD9VH-5rR7GHeoj8PtYWPIJuv49hfw"
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error ("Failed to Fetch") 

    } else {
      return response.json()
    }})
  
    .catch((error) => {
      console.error("Error fetching animals:", error);
      throw error;
    });
};

export { getAnimals, getAnimalSelected };