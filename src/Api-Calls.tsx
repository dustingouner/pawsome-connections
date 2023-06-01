import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjdjODkwNDAwMjgxY2QxMGNmMjQ5YzA2ZDEwYjcwMWYyODk5MDc0YjdlMWM4MjYxMWExZGNjMTQ1M2I2M2I5OWVjZWVlYjM3NWI1YTg5ZDE5IiwiaWF0IjoxNjg1NjUwMjc4LCJuYmYiOjE2ODU2NTAyNzgsImV4cCI6MTY4NTY1Mzg3OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.VaupLZsq2MQR8K8zvLMf7nmWor6cEWcSiCam-wC1qTglNbXjXhmk8Pe4AtRt2Zh74rfwl9hwDmk7MdNfcGntgzbZUgglLOo-PELGapzmwVhLS5SD4CQmBkg91DPgh3c1sDo7epsLmuA6NV2dPn9fxgr8kmj-Tlnm0lOQIZUBmHcFYyDpVyh-RBBvd3LQbFpIdmsEvzmsNAIl9lzMjCMS4VRylkQX5agVRTWjPPt9bMpDdlDzUy8f3Mrilg-g8PzVP7HI7U6IqMXT78JobuawnqtzrNBlNVUFKjN51WaUb-SHa_BEVKGjAhpT_DqTb55fhDzAntLsovxzAK5d1aPOGg",
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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjdjODkwNDAwMjgxY2QxMGNmMjQ5YzA2ZDEwYjcwMWYyODk5MDc0YjdlMWM4MjYxMWExZGNjMTQ1M2I2M2I5OWVjZWVlYjM3NWI1YTg5ZDE5IiwiaWF0IjoxNjg1NjUwMjc4LCJuYmYiOjE2ODU2NTAyNzgsImV4cCI6MTY4NTY1Mzg3OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.VaupLZsq2MQR8K8zvLMf7nmWor6cEWcSiCam-wC1qTglNbXjXhmk8Pe4AtRt2Zh74rfwl9hwDmk7MdNfcGntgzbZUgglLOo-PELGapzmwVhLS5SD4CQmBkg91DPgh3c1sDo7epsLmuA6NV2dPn9fxgr8kmj-Tlnm0lOQIZUBmHcFYyDpVyh-RBBvd3LQbFpIdmsEvzmsNAIl9lzMjCMS4VRylkQX5agVRTWjPPt9bMpDdlDzUy8f3Mrilg-g8PzVP7HI7U6IqMXT78JobuawnqtzrNBlNVUFKjN51WaUb-SHa_BEVKGjAhpT_DqTb55fhDzAntLsovxzAK5d1aPOGg",
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