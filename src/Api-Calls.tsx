import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjNjZjVlNTBlMDAzODgxMDcyMDg4M2VlZDI2Nzc1ZjA0YWM0ZjNiYzk5NTg3MDRiODllNDBkY2EyOTdmZjQ2MDBmYmMwZDlhZjI2NTA4NWU1IiwiaWF0IjoxNjg1NjYyMDI2LCJuYmYiOjE2ODU2NjIwMjYsImV4cCI6MTY4NTY2NTYyNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.CerrEvO3b8x3TQz-i-fbgmp8YU3J_Ivs_Y85d8LR3oDuU_V5eG0oF-j8N_h8nvDXofaFJlXXiC2RGHmk9jPQtwL_MWUW1LIYWWeGPxxMiq-O3M5qfE87yX-BF4SK1KSa9bJ089gijAevOSwHkqW8MHOWp8NnY22hFjYXxEbbU-_X-qS132wyO3c7a_x1Uz51iSwlmBY6FGxF002LN7QUGdPhaDtweEh7bSG-Swwwn8HRGpWKmhtd8yWkzT9QbxW-hDVYXSvrRCQYuvdA9J1IDJTLsAQCDZlCPUu4ygPICkjaaeX8Fk-K4XSZydveXgjnAzmZzp_UGb2QOWx4WKItfg",
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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjNjZjVlNTBlMDAzODgxMDcyMDg4M2VlZDI2Nzc1ZjA0YWM0ZjNiYzk5NTg3MDRiODllNDBkY2EyOTdmZjQ2MDBmYmMwZDlhZjI2NTA4NWU1IiwiaWF0IjoxNjg1NjYyMDI2LCJuYmYiOjE2ODU2NjIwMjYsImV4cCI6MTY4NTY2NTYyNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.CerrEvO3b8x3TQz-i-fbgmp8YU3J_Ivs_Y85d8LR3oDuU_V5eG0oF-j8N_h8nvDXofaFJlXXiC2RGHmk9jPQtwL_MWUW1LIYWWeGPxxMiq-O3M5qfE87yX-BF4SK1KSa9bJ089gijAevOSwHkqW8MHOWp8NnY22hFjYXxEbbU-_X-qS132wyO3c7a_x1Uz51iSwlmBY6FGxF002LN7QUGdPhaDtweEh7bSG-Swwwn8HRGpWKmhtd8yWkzT9QbxW-hDVYXSvrRCQYuvdA9J1IDJTLsAQCDZlCPUu4ygPICkjaaeX8Fk-K4XSZydveXgjnAzmZzp_UGb2QOWx4WKItfg",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching animals:", error);
      throw error;
    });
};

export { getAnimals, getAnimalSelected };