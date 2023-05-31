// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token

import React from "react";

const getAnimals = () => {
  return fetch(
    "https://api.petfinder.com/v2/animals?age=senior",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImE0N2YyMTliNmY1NzRkYmI2ZWM1MjJlYmY0YTUwOGIzYTRkZTEwNWNmNDg4OWRhMzc1N2NjOWI0Yzk4OWE5YjUxNzFjYTQ2NzYzOTY1NmRkIiwiaWF0IjoxNjg1NTUzMTk3LCJuYmYiOjE2ODU1NTMxOTcsImV4cCI6MTY4NTU1Njc5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.ZFiI37dwVhtS21TUH8sj5Ipvno4tfMvtUWiFR6KfLEBTInWYwNtXwuKpuGrOh1EW_FU6MjViv-kWkzt9aoKyGhqovw10wu09BzA6PhzlIyo-EAuEgMMuLj8MTXZh_yf59WcoekB1auJwAmYC2JY5naNHpH9V0mwiL37r4PJz612s6qBpFazpWkrXPXkP-GaqQ-B3cyiK3OLTqI35rI5-xFZUIHLgSsTRzflAwbH8Sj7Jd4Fw_90VELG7qJ8mcf80vjuN0xAcN1NBBxngCXrl-l3kl_zpzwJoDnbfPxC0-1xJComATHWWp1DIEagPxgnq7Lg2GgI-gGJzSGfLN1VShA",
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
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6ImE0N2YyMTliNmY1NzRkYmI2ZWM1MjJlYmY0YTUwOGIzYTRkZTEwNWNmNDg4OWRhMzc1N2NjOWI0Yzk4OWE5YjUxNzFjYTQ2NzYzOTY1NmRkIiwiaWF0IjoxNjg1NTUzMTk3LCJuYmYiOjE2ODU1NTMxOTcsImV4cCI6MTY4NTU1Njc5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.ZFiI37dwVhtS21TUH8sj5Ipvno4tfMvtUWiFR6KfLEBTInWYwNtXwuKpuGrOh1EW_FU6MjViv-kWkzt9aoKyGhqovw10wu09BzA6PhzlIyo-EAuEgMMuLj8MTXZh_yf59WcoekB1auJwAmYC2JY5naNHpH9V0mwiL37r4PJz612s6qBpFazpWkrXPXkP-GaqQ-B3cyiK3OLTqI35rI5-xFZUIHLgSsTRzflAwbH8Sj7Jd4Fw_90VELG7qJ8mcf80vjuN0xAcN1NBBxngCXrl-l3kl_zpzwJoDnbfPxC0-1xJComATHWWp1DIEagPxgnq7Lg2GgI-gGJzSGfLN1VShA",
      },
    }
  ).then((response) => response.json());
}

export { getAnimals, getLocation };