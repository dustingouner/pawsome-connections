import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:

        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImJhM2JiNzExMGU5ZWRkNGFkNTVlNzBkMTlhODY0NzZkMDhhMmZiOGZlZjUyNWQ4MmZkY2VhYzY3ZDA4Y2FhMzA4ODA5YTk4ZTcxY2Q5N2I5IiwiaWF0IjoxNjg1NzQyNjI1LCJuYmYiOjE2ODU3NDI2MjUsImV4cCI6MTY4NTc0NjIyNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.tA9Re3zdRHcekSqDNrBPdSj5Y5v10N1-xy3_O7w8oMYrBgzCh2GNlqaX91Nsrm5gnJHDd95AA9e2kbsCWyFZRK8EKEXbtoU04o5RZMn0Oy5H0iOmDmPzoOkaT8g50XALE0ig05Lz2cTbL4ZMRpuJq7zK1rFAs51_wd_r5PbsXfHEJ3jGRwR0EIbDM20RbocZrkruFfM5zCLg66SjUR80WsrJbDmfj-BOE-OgHJ75z1Ep7HYi3T_jvgMdjDffVbyBe5NHOmJypFjMLG7cBDZTScAUob-jxeDlUBR3_XPoGk7hbuDoziXBrqy8mr-GeckItx90bOz76HnDt_mQ1P6dkQ",

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

        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImJhM2JiNzExMGU5ZWRkNGFkNTVlNzBkMTlhODY0NzZkMDhhMmZiOGZlZjUyNWQ4MmZkY2VhYzY3ZDA4Y2FhMzA4ODA5YTk4ZTcxY2Q5N2I5IiwiaWF0IjoxNjg1NzQyNjI1LCJuYmYiOjE2ODU3NDI2MjUsImV4cCI6MTY4NTc0NjIyNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.tA9Re3zdRHcekSqDNrBPdSj5Y5v10N1-xy3_O7w8oMYrBgzCh2GNlqaX91Nsrm5gnJHDd95AA9e2kbsCWyFZRK8EKEXbtoU04o5RZMn0Oy5H0iOmDmPzoOkaT8g50XALE0ig05Lz2cTbL4ZMRpuJq7zK1rFAs51_wd_r5PbsXfHEJ3jGRwR0EIbDM20RbocZrkruFfM5zCLg66SjUR80WsrJbDmfj-BOE-OgHJ75z1Ep7HYi3T_jvgMdjDffVbyBe5NHOmJypFjMLG7cBDZTScAUob-jxeDlUBR3_XPoGk7hbuDoziXBrqy8mr-GeckItx90bOz76HnDt_mQ1P6dkQ",

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