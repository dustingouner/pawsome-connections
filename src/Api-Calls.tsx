import React from "react";

const getAnimals = () => {
     return (fetch(
       "https://api.petfinder.com/v2/animals?location=60521&type=dog&age=senior",
       {
         method: "GET",
         headers: {
           Authorization:
             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJvMzRDd0g2anF3QWdMQ2JZY2VjNHQwWlJSeFdTckwwR3lFQm5OM3dSVUxVdGFNMWI0QiIsImp0aSI6IjcyNDRhN2ZiMmI3N2FlMGZhMDdmM2Y4ZWM3YTlhN2U4ZTJkOWJkNWU2ZTMzNDc4ZWU5NzE2NWVmNDgyNTYxNDE4M2UxMWY0NTdlMWQ5NmM2IiwiaWF0IjoxNjg1MjEyNDA0LCJuYmYiOjE2ODUyMTI0MDQsImV4cCI6MTY4NTIxNjAwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.z1Kb6mHnpHU0K5YmB0RKzPshPqu79w4jwU1vNGVqqzCbBk__mskqM1GA52LjTBVyizrlTAkaUttXtYkgfyyIPhwfSNIodcUHfz33Y9FCUutHdmo-dtEsCHt28yB_Zi-1QsKmhiGRg1zsJRKBCHP6TEjQzYUAAapU6_udKQVNLXPOk0Z0kN5eU1zVTpDITfQk1eu5kMZY_qmYM7SmT9mFKBZMBv2CMzth0tptZfuJWKr1sgMEmGNtYKktgYXBjT5H7gX9qF-crvrydcwLDlnFm1zvdmRERJCXvMonOixzpPDWlX7MuDazGt_-190q3PJE2EXKoofgaGFiZ9L1s6IVkw",
         },
       }
     )
       .then((response) => response.json())
    //    .then((data) => {
    //      // Handle the response data
    //      console.log(data);
    //    })
    //    .catch((error) => {
    //      // Handle any errors
    //      console.error("Error:", error);
    //    });
     )
}

export default getAnimals;