import React from "react";

const getAnimals = (location: string, type: string) => {
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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjVjY2FhNzY1MmJmMjEwY2Y0ZjViODk4ODRhMzU5MjUxMWNiNGVjYmNiYWQ4YWQ5YmQyNzZhOWFlMzUwMzAxODk1MjczNWJhZjhjNTg3ZDMwIiwiaWF0IjoxNjg1ODYxNzI0LCJuYmYiOjE2ODU4NjE3MjQsImV4cCI6MTY4NTg2NTMyNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.L5yCJXx9A0vVy7Vl6wQ1plpLEBr9UdFiXu5EfgiQZcpnII10CCXqP3QwgtxunNNctut30ZdATdtAVYrHBZZq1NMlAxq6wX5EMW4CScqxrJ5jmR2y8EsdjV5gBCcyjdQyzhtE_zY63399a9K33AmcoBLkUX0OoK6eSOcSYZsPIWdRfNtgV82rC-YsZVz7YMei5BT7m_AfvqLK-aMFNSSbFsOCrmvejFPcEfnouWxjFX3tUrNd6fdsnJvFZ1QMVXe0Bt039hzzG4g_TF0NfEzo2iLWO6G5KVRlYglRTUVlyGjE8tO3K7sAR_PBzNHyJ4kbIkhp8pumwn1Rn6xXDV0P6Q",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to Fetch");
    } else {
      return response.json();
    }
  });
};

export { getAnimals };