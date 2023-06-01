import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjZiYThhMTY2M2MxMGY2M2Q2NzFjZDZlZmE0MTQwYTM4NGRjMTFkMTM4NTZmNDQ4ODgwOTliMGI2ZmM4MGI5OGU3MzNkNzExZTlhMGNkMGZjIiwiaWF0IjoxNjg1NjQ2Mzc0LCJuYmYiOjE2ODU2NDYzNzQsImV4cCI6MTY4NTY0OTk3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.V43FPLen5KVy9jdJyi6JYExu6zZTmeRQMef_wUCzDM9LLTI9trhSkDE-u1AuS5j2hT0wKFMvN0mBeLrQRj3Lr7N2Gp760F6H6C5D84uLgzfRuJ2o9rlkBX_hLx5a-XlL5q-UuniqyDvB3PnKmFVnSQIvDEvvS_EQWFxEv964IKqNdtUbnujmIfK0wJFXuBcX__nKyZ3vcWBzN43Pl1VlUJhlKKS9biKVGilK8U93HUMSK4ZvQ6Qll0lc2qW6kUScTLMvGs9aq544cLvInpFcpWw1LKjJF5wqhuc7pUW-6szZqoLICZ20M4ZlTIcH8S9R2XlsOwDAI4LkRUjMXY_45A",
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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjZiYThhMTY2M2MxMGY2M2Q2NzFjZDZlZmE0MTQwYTM4NGRjMTFkMTM4NTZmNDQ4ODgwOTliMGI2ZmM4MGI5OGU3MzNkNzExZTlhMGNkMGZjIiwiaWF0IjoxNjg1NjQ2Mzc0LCJuYmYiOjE2ODU2NDYzNzQsImV4cCI6MTY4NTY0OTk3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.V43FPLen5KVy9jdJyi6JYExu6zZTmeRQMef_wUCzDM9LLTI9trhSkDE-u1AuS5j2hT0wKFMvN0mBeLrQRj3Lr7N2Gp760F6H6C5D84uLgzfRuJ2o9rlkBX_hLx5a-XlL5q-UuniqyDvB3PnKmFVnSQIvDEvvS_EQWFxEv964IKqNdtUbnujmIfK0wJFXuBcX__nKyZ3vcWBzN43Pl1VlUJhlKKS9biKVGilK8U93HUMSK4ZvQ6Qll0lc2qW6kUScTLMvGs9aq544cLvInpFcpWw1LKjJF5wqhuc7pUW-6szZqoLICZ20M4ZlTIcH8S9R2XlsOwDAI4LkRUjMXY_45A",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching animals:", error);
      throw error;
    });
};

// const getLocation = (zipCode:string) => {
//   console.log("this is fetching!")
//   // const zipcodeFetch = `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`
//   return fetch(
//     `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhhYjU5ZjBhODc5YzJlNDJhNGUxM2I2NWY2N2RlNTJkYzFkOWVjOGI5NWNmNTk0YTg1YjU0NGQ5ZWZiMzNmNzg2M2JlMGU3YTFkZGMwNWU3IiwiaWF0IjoxNjg1NjI1NTQ1LCJuYmYiOjE2ODU2MjU1NDUsImV4cCI6MTY4NTYyOTE0NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.JCGXQ4Uq6NvmGO_Rw-ba59GOsBcplSRq53lazxx5DxbfQIhgiksTrUMTGT7f7A5FZpFb07B9lF9cKX0jqo5X-nplr5UPZFzMZpfKD2VUXy1jbuf-i72JrXNsIJzekqaV6U9PaKBbkQbMdO6GJs-ap0rd0WsoEqmungFdsfXC19cJVN8L5GbzBwSOxNZyMa5wmRuXVNoAJ7-_jwwiuNi6q9uHkKDd3gPFv3b0qrQhaRbkdEkpFH8beKaOt4WDdmq6Darlf76Ryd9u-UdjpQHDY9jJROVOPhkZgkfnUYWrHZCd62Ziq_MEXAgA8ROdLT5RYgHpw-B6a_D58iU5DTH7Vg",
//       },
//     }
//   ).then((response) => response.json());
// }

// const getType = (animalType: string) => {
//   // console.log(animalType, "Animaltype line 29");
//   // const zipcodeFetch = `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`
//   return fetch(
//     `https://api.petfinder.com/v2/animals?age=senior&types/${animalType}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhhYjU5ZjBhODc5YzJlNDJhNGUxM2I2NWY2N2RlNTJkYzFkOWVjOGI5NWNmNTk0YTg1YjU0NGQ5ZWZiMzNmNzg2M2JlMGU3YTFkZGMwNWU3IiwiaWF0IjoxNjg1NjI1NTQ1LCJuYmYiOjE2ODU2MjU1NDUsImV4cCI6MTY4NTYyOTE0NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.JCGXQ4Uq6NvmGO_Rw-ba59GOsBcplSRq53lazxx5DxbfQIhgiksTrUMTGT7f7A5FZpFb07B9lF9cKX0jqo5X-nplr5UPZFzMZpfKD2VUXy1jbuf-i72JrXNsIJzekqaV6U9PaKBbkQbMdO6GJs-ap0rd0WsoEqmungFdsfXC19cJVN8L5GbzBwSOxNZyMa5wmRuXVNoAJ7-_jwwiuNi6q9uHkKDd3gPFv3b0qrQhaRbkdEkpFH8beKaOt4WDdmq6Darlf76Ryd9u-UdjpQHDY9jJROVOPhkZgkfnUYWrHZCd62Ziq_MEXAgA8ROdLT5RYgHpw-B6a_D58iU5DTH7Vg",
//       },
//     }
//   ).then((response) => response.json());
// };

export { getAnimals, getAnimalSelected };