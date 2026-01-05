import { ref } from "vue";
import { getListNames } from "@/services/names.service";

export function useNames() {
  const names = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const loadNames = async () => {
    loading.value = true;
    error.value = null;

    try {
      names.value = await getListNames();
    } catch (err) {
      error.value = err.message || "Failed to load names";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    names,
    loading,
    error,
    loadNames,
  };
}
