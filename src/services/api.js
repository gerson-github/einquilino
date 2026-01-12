// services/api.js
const BASE_URL = import.meta.env.VITE_API_URL;

async function request(url, options = {}) {
  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

  console.log("essa e a url:", `${BASE_URL}${normalizedUrl}`);

  const response = await fetch(`${BASE_URL}${normalizedUrl}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || `Erro na requisição: ${response.statusText}`);
  }

  if (response.status === 204) return null;

  const data = await response.json();

  console.log("resposta da api:", data);

  return data;
}

export default request;

// services/api.js
//const BASE_URL = import.meta.env.VITE_API_URL;

//const BASE_URL = 'https://einquilino-api.onrender.com'

// async function request(url, options = {}) {
//   try {

//test
//   fetch("http://localhost:3000/indicators/monthly")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err));

//const response = await fetch(`${BASE_URL}${url}`, {
//     const response = await fetch(`http://localhost:3000/indicators/monthly`, {
//       ...options,
//       headers: {
//         "Content-Type": "application/json",
//         ...(options.headers || {}),
//       },
//     });
//     if (!response.ok) {
//       const errorBody = await response.text();
//       throw new Error(errorBody || "Erro na requisição");
//     }

//     // se não tiver body (204)
//     if (response.status === 204) return null;

//     return response.json();
//   } catch (error) {
//     console.error("API request error:, error");
//     throw error;
//   }
// }

// try {
//   debugger; // ⬅️ forces breakpoint
//   const response = await fetch(`http://localhost:3000/indicators/monthly`);
// } catch (err) {
//   console.error(err);
// }

// export default request;
