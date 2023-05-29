// curl -d "grant_type=client_credentials&client_id=o34CwH6jqwAgLCbYcec4t0ZRRxWSrL0GyEBnN3wRULUtaM1b4B&client_secret=Sn6nsQvDYN6gEwsAuXQmS9cLFxFcLf9LVkv8ndsE" https://api.petfinder.com/v2/oauth2/token

import React from "react";

const getAnimals = () => {
  return fetch(
    "https://api.petfinder.com/v2/animals?location=60521&age=senior",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjVjMzk2ODQyYTlkNzBhYmRjZDkwZjUzYTRkMWYxN2VlZWU1MDc4YjVjMTEwZGZkNmM2YTM0MWM5NDE2M2ZkYzA3Zjk2NWVkZTgxMmU5ZGIxIiwiaWF0IjoxNjg1MzE1NDgzLCJuYmYiOjE2ODUzMTU0ODMsImV4cCI6MTY4NTMxOTA4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.f3WEKDA3JuOa1xaNLRjQS6O5JGRAfmO5iQHyXN6cs09aUJ7w8akPTjoVdaONx81JqLCk-tVPcMgWeOmLaWjEaiIFz65QVypg49fU7EIONkr7TPlOuJovrEWyfNWs56zn-JRQN0DwBNF88ISn5xLdSBIXHCbfqT8cGHb7ikMoRRO6fCza708XmkQfmVc4195tMiVnOwNQaDC-A3vVcS0zYyo6_o1CtUYS9TF9M8Z7xJVYFSEie-kx7E3wPVXRDTU7-3lh2UHCjFSGKSYsVTEIy5yrwzjvYyPfVvprBvp16blFMffmVJsqPws9EDjIoOpotDFm92DSnTli_XmX48BFcw",
      },
    }
  ).then((response) => response.json());
}

const getLocation = (zipCode:number) => {
  return fetch(
    `https://api.petfinder.com/v2/animals?age=senior&location=${zipCode}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjVjMzk2ODQyYTlkNzBhYmRjZDkwZjUzYTRkMWYxN2VlZWU1MDc4YjVjMTEwZGZkNmM2YTM0MWM5NDE2M2ZkYzA3Zjk2NWVkZTgxMmU5ZGIxIiwiaWF0IjoxNjg1MzE1NDgzLCJuYmYiOjE2ODUzMTU0ODMsImV4cCI6MTY4NTMxOTA4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.f3WEKDA3JuOa1xaNLRjQS6O5JGRAfmO5iQHyXN6cs09aUJ7w8akPTjoVdaONx81JqLCk-tVPcMgWeOmLaWjEaiIFz65QVypg49fU7EIONkr7TPlOuJovrEWyfNWs56zn-JRQN0DwBNF88ISn5xLdSBIXHCbfqT8cGHb7ikMoRRO6fCza708XmkQfmVc4195tMiVnOwNQaDC-A3vVcS0zYyo6_o1CtUYS9TF9M8Z7xJVYFSEie-kx7E3wPVXRDTU7-3lh2UHCjFSGKSYsVTEIy5yrwzjvYyPfVvprBvp16blFMffmVJsqPws9EDjIoOpotDFm92DSnTli_XmX48BFcw",
      },
    }
  ).then((response) => response.json());
}

export { getAnimals, getLocation };