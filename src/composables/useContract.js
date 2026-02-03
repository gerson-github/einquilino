import { ref } from "vue";
import { getContract } from "@/services/contracts.service";

export function useContract() {
  const contract = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const loadContract = async (contractId) => {
    loading.value = true;
    error.value = null;

    try {
      // const response = await getContract(contractId);
      // contract.value = response.data;
      contract.value = await getContract(contractId);

    } catch (err) {
      error.value = err.message || "Failed to load contract";
    } finally {
      loading.value = false;
    }
  };

  return {
    contract,
    loading,
    error,
    loadContract
  };
}
