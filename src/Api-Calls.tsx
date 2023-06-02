import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhmMjI4NTQ1NTI1ODAzNTJjYTI0MmExNTc3NjZmZWVlM2YzMWE2YzQwMDhlMGQ4MzE2ZDQzYWYzYTY2YTcyZGUwYzM4MzBmY2RiYmM4MzY1IiwiaWF0IjoxNjg1NzMxMjU2LCJuYmYiOjE2ODU3MzEyNTYsImV4cCI6MTY4NTczNDg1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.wFpbyUDv1a9luupohwNiktfiTyKy_ZcdaRL5U1tdNjw2g7PMMj6YDLn1t1plD-TayG7_KKj0rNtoZZc38IDmpvZWbwPb6HE6PEWSdf-yIEsZZiA1fGOJbHT3rZoFu2Y3EF1hlM08OrRKJ43Foy-ohNQy6vD-OdDxwsMwpwSUH5-cKe6PGJPBrB5lQ9XXRiVjKpJG4HQv5eF4Excfay6P8bCh74wciMxbNXG2kk6oG2Zt77HoTSJy8tXyFonG7ZnoHXOLd6-dsI9sKDE9oJGsUhXdOR_UNvPoEdjuIo0mFiGvkRcETPMo95j290r8oJeEZHyBaVLvBUv20goACSd-IA",
    },
  }).then((response) => response.json());
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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhmMjI4NTQ1NTI1ODAzNTJjYTI0MmExNTc3NjZmZWVlM2YzMWE2YzQwMDhlMGQ4MzE2ZDQzYWYzYTY2YTcyZGUwYzM4MzBmY2RiYmM4MzY1IiwiaWF0IjoxNjg1NzMxMjU2LCJuYmYiOjE2ODU3MzEyNTYsImV4cCI6MTY4NTczNDg1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.wFpbyUDv1a9luupohwNiktfiTyKy_ZcdaRL5U1tdNjw2g7PMMj6YDLn1t1plD-TayG7_KKj0rNtoZZc38IDmpvZWbwPb6HE6PEWSdf-yIEsZZiA1fGOJbHT3rZoFu2Y3EF1hlM08OrRKJ43Foy-ohNQy6vD-OdDxwsMwpwSUH5-cKe6PGJPBrB5lQ9XXRiVjKpJG4HQv5eF4Excfay6P8bCh74wciMxbNXG2kk6oG2Zt77HoTSJy8tXyFonG7ZnoHXOLd6-dsI9sKDE9oJGsUhXdOR_UNvPoEdjuIo0mFiGvkRcETPMo95j290r8oJeEZHyBaVLvBUv20goACSd-IA",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching animals:", error);
      throw error;
    });
};

export { getAnimals, getAnimalSelected };