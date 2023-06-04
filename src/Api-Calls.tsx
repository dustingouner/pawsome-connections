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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6Ijc2ZmFlMmRjMzM0MmFkMWFlMzkzNmQ3ODFkMTg4MWMwMTk4YTU5OTNiZGJjZjUxZGIxYTcwNGQxOTE5YWY0MmRjOTFhNGE1MTM3Zjc5Y2Q0IiwiaWF0IjoxNjg1ODkzNDMzLCJuYmYiOjE2ODU4OTM0MzMsImV4cCI6MTY4NTg5NzAzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.Ek3I3wMhh9Us-HLVw3-AvTPm9_JqfZxQYVMvjPZU_lwZDJ344bZmOTAq_CiCXZS9O56DGiCqND4BMiI0CacCK0nqucNfoIs4SCzqTzwv6HX27-f28P8o0DNZdD_sKYbx4N5fUw6gIZ06VmUTqORSxd1IZkAn6Ey9BVvLGb8pPssNHrva448mipMaNPRz7fX88XuX0mV0_fW83roWrXYPLqe0oa1m3Ci82i3-5YxaPgdRpGlc_v9zakXI8r0sK7PhaBuRnoFREEGBDjJkujacbGn7OctpIzo_J1sf-AI-89L5_RxEAKwJFRpIO3Z8UHxP1aetZBAIablIq_QV4Wj41A",
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