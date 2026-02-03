import request from "./api";

export async function getContract(contractId) {
  
  return await request(`/contracts/${contractId}`);
}
