import request from "./api";

export async function getMonthlyIndicators() {
  const data = await request('/indicators/monthly');
  return data.indicators; // apenas os valores internos
}

