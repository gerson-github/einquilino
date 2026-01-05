// services/testes.service.js
import request from "./api";

export async function getMonthlyIndicators() {
  console.log('getMonthlyIndicators called'); 
  return request("/indicators/monthly");
}

