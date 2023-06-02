import React from "react";

const getAnimals = () => {
  return fetch("https://api.petfinder.com/v2/animals?age=senior", {
    method: "GET",
    headers: {
      Authorization:

        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6Ijg1N2ZkOWQ5MTUwY2VkNDU5ZmI5ZDk1ZmQyNTkyZmIzMGNkMTE1ZTU0NjQwZTI0MDdiMWRjYjA5ZjZiZmY5MWJiNDgyOGE3NmE0MDc2MTliIiwiaWF0IjoxNjg1NzM4NjU2LCJuYmYiOjE2ODU3Mzg2NTYsImV4cCI6MTY4NTc0MjI1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.T7nY_4TBltOOsizTTfm6c__2yph9CcbUqFvYqAkZs56He3D6gLseYzCYT5YK9RGNPI81zpMt4x3de_ae0BStLmVrY_PART6tjR6VQxTOe1WWGbl1rp51KXSXEChFG2Lyb4jyzp-xtdXqZOK5uY-mW97Xx8vNh8zovAn-qrbXkaZn2HbpL293KgQJuuTSzErmkMYWHHU78ZOpTk4tOTl7yLrqOm2Hve4ov00AuKjG6ZY8G-WmjzOduNTE8rIshnsG0WXloh_CkjrdABny9gd2zzBKQrBKkUgzI_6pfe29IZyH2ZR3Ymz2gWFNtAgRpvtStQNLB33lT7NhaWyxdeBRlQ",

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

        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6Ijg1N2ZkOWQ5MTUwY2VkNDU5ZmI5ZDk1ZmQyNTkyZmIzMGNkMTE1ZTU0NjQwZTI0MDdiMWRjYjA5ZjZiZmY5MWJiNDgyOGE3NmE0MDc2MTliIiwiaWF0IjoxNjg1NzM4NjU2LCJuYmYiOjE2ODU3Mzg2NTYsImV4cCI6MTY4NTc0MjI1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.T7nY_4TBltOOsizTTfm6c__2yph9CcbUqFvYqAkZs56He3D6gLseYzCYT5YK9RGNPI81zpMt4x3de_ae0BStLmVrY_PART6tjR6VQxTOe1WWGbl1rp51KXSXEChFG2Lyb4jyzp-xtdXqZOK5uY-mW97Xx8vNh8zovAn-qrbXkaZn2HbpL293KgQJuuTSzErmkMYWHHU78ZOpTk4tOTl7yLrqOm2Hve4ov00AuKjG6ZY8G-WmjzOduNTE8rIshnsG0WXloh_CkjrdABny9gd2zzBKQrBKkUgzI_6pfe29IZyH2ZR3Ymz2gWFNtAgRpvtStQNLB33lT7NhaWyxdeBRlQ",

    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching animals:", error);
      throw error;
    });
};

export { getAnimals, getAnimalSelected };