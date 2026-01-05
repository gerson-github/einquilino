import request from "./api"; // your request helper

export async function getListNames() {
  // Call your backend API
  const data = await request("/names"); // adjust endpoint if needed
  // data should be { names: ["gerson","saulo","laura"] }
  return data.names;
}
