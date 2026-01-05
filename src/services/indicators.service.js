// services/contracts.service.js
import request from "./api";

// export function getMonthlyIndicators() {
//   return request("/indicators/monthly");
// }

export async function getMonthlyIndicators() {
  const response = await request('/indicators/monthly');
  if (!response.ok) throw new Error('Failed to fetch indicators');
  const data = await response.json();
  return data.indicators; // apenas os valores internos
}

