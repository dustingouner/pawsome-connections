import React from "react";

const getAnimals = () => {
  return fetch(
    "https://api.petfinder.com/v2/animals?age=senior",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjUzYmU2ZjNlMmYzOTk0OWFiOWVmYTBlNGE3ZjM4ZDBkZjc5ZDFmNzQwMDMyMWE2NzQ2ZDg2NDFhNzI4ODExNjk3ODIyMWFmMTA5ZTMyMWVjIiwiaWF0IjoxNjg1NTcyNTQ1LCJuYmYiOjE2ODU1NzI1NDUsImV4cCI6MTY4NTU3NjE0NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.K7IGse2cTOfV_YsJsenqMn1UeycsXmAfEPXXLyvBYrdddoSfFmGdWn488rjtgxdqc_B_DZbfeCUgoPDaxLaa_ECMLFBZZLhp3ulUNxrOVTd-tp5sCXlo4H-DBiF6qQkeZYOdPtdoRtdyoLOfsDJMX5TIKK3mcwMUoFTtkP1hCSNl1wgvD2wne_iNiLY41dwyRTIH1GnN3kKcUci8xwTtnRrjsGeIqNx8AKqxjl1bFr7-bnkQoBPcrgaEt7xTtRUtQ8IY5sAi3YSp-b5CE_xlBE7_JPgc8cYUzxl9B0usd19U_or9v5EJmzmatAYwNJNaExLDA0VsTDaa80oGBxmdYg",
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
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjUzYmU2ZjNlMmYzOTk0OWFiOWVmYTBlNGE3ZjM4ZDBkZjc5ZDFmNzQwMDMyMWE2NzQ2ZDg2NDFhNzI4ODExNjk3ODIyMWFmMTA5ZTMyMWVjIiwiaWF0IjoxNjg1NTcyNTQ1LCJuYmYiOjE2ODU1NzI1NDUsImV4cCI6MTY4NTU3NjE0NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.K7IGse2cTOfV_YsJsenqMn1UeycsXmAfEPXXLyvBYrdddoSfFmGdWn488rjtgxdqc_B_DZbfeCUgoPDaxLaa_ECMLFBZZLhp3ulUNxrOVTd-tp5sCXlo4H-DBiF6qQkeZYOdPtdoRtdyoLOfsDJMX5TIKK3mcwMUoFTtkP1hCSNl1wgvD2wne_iNiLY41dwyRTIH1GnN3kKcUci8xwTtnRrjsGeIqNx8AKqxjl1bFr7-bnkQoBPcrgaEt7xTtRUtQ8IY5sAi3YSp-b5CE_xlBE7_JPgc8cYUzxl9B0usd19U_or9v5EJmzmatAYwNJNaExLDA0VsTDaa80oGBxmdYg",
      },
    }
  ).then((response) => response.json());
}

export { getAnimals, getLocation };