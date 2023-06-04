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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImRiOGRkNGQ4ZDkwOTA5NDMxNzg5N2MxYmQ3YmRjMzI4NzJiOTEyNTBhMDY4ZmYxNWM2ZWMwYWVhN2YzNDk1ZWY5YzJlNDFkZGRjNTEyM2VjIiwiaWF0IjoxNjg1ODA2OTU0LCJuYmYiOjE2ODU4MDY5NTQsImV4cCI6MTY4NTgxMDU1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.lmvEwSTeFZAFqRDYa5wD3MnjjdEqZVXipzn7AE1cB3hMh9eeVybIlw8Leo_vd9U_oQ9RCbHKka6rsCuHZhP7d1I2d-xMrY_0_MEkF5YRcOTh8GhihYL8aXuqOLOQh6C-HqWJqnifWwLfS17Y38jfO3EumJOSN1TYpzLMxGba6hSTeAww-MbtXIFVmZ7Xon_VBHOZvQ_9zyJSbGgvk2L35iiIyr46QDOQsS5o3WNI4uK2VMmRmtedolzO598SdVB8Yg7H-EalPHGStM6SNJ7MKrgBu2raopHhGqF4W9a5Ty9tL3o5jsV6vbclSrAHU5upIxehNYdvPRFjd7EAIIlVwQ",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error ("Failed to Fetch") 
      } else {
        return response.json()
      }
    })
};

export { getAnimals };