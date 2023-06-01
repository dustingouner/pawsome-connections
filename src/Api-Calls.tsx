import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhlZmQyZGY5MTA3MjMyNDQ3Yjk2MDA1M2NiY2QzMjdkNTc5ZjVlNTg1ZjgwYmM1Y2FlZTBmYmY0NGZlNjZhZjc4NGE2MzQ5YTJmYjI2YzZmIiwiaWF0IjoxNjg1NjU4MjEwLCJuYmYiOjE2ODU2NTgyMTAsImV4cCI6MTY4NTY2MTgxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.cKUkfx3jntavvPXH-_FMZ-C33uQ7uKHutw8wM9MwJB39upcg7GH2ve7WQiwf7uUQ411gEl8of8wkuZvRk8f5KyVfRTia_jA0iyjFm03wIk5mYINlK9cFH4XIdiGokriwzInACHvZLr8K2u3vhUzuLJwMWb2pPOsBE0Y7wrxamfHKvPRztMBF96df0Tfo26IGvpYZfTsZJSoQKQSCW6jOyKaxPxdvkUw_etwF31BwHCk_jFI4FUYul1b27cC-ClXN2NJ8OurBrwB6ksHvnM6iBjZZWkK8mhz69BCjS13MJXSKDKAIwR8YIsFqVXKtxZikpdUKqxA_OmG0RZiv19XWCQ",
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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjhlZmQyZGY5MTA3MjMyNDQ3Yjk2MDA1M2NiY2QzMjdkNTc5ZjVlNTg1ZjgwYmM1Y2FlZTBmYmY0NGZlNjZhZjc4NGE2MzQ5YTJmYjI2YzZmIiwiaWF0IjoxNjg1NjU4MjEwLCJuYmYiOjE2ODU2NTgyMTAsImV4cCI6MTY4NTY2MTgxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.cKUkfx3jntavvPXH-_FMZ-C33uQ7uKHutw8wM9MwJB39upcg7GH2ve7WQiwf7uUQ411gEl8of8wkuZvRk8f5KyVfRTia_jA0iyjFm03wIk5mYINlK9cFH4XIdiGokriwzInACHvZLr8K2u3vhUzuLJwMWb2pPOsBE0Y7wrxamfHKvPRztMBF96df0Tfo26IGvpYZfTsZJSoQKQSCW6jOyKaxPxdvkUw_etwF31BwHCk_jFI4FUYul1b27cC-ClXN2NJ8OurBrwB6ksHvnM6iBjZZWkK8mhz69BCjS13MJXSKDKAIwR8YIsFqVXKtxZikpdUKqxA_OmG0RZiv19XWCQ",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching animals:", error);
      throw error;
    });
};

export { getAnimals, getAnimalSelected };