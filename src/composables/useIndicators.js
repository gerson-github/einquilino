import { ref } from "vue";
import { getMonthlyIndicators } from "@/services/indicators.service";

export function useIndicators() {
  // ✅ Inicialize com uma estrutura segura.
  // O template pode acessar 'indicators.data' sem erro.
  // const indicators = ref({
  //   data: null // ou {} ou [] dependendo do que 'data' será
  // });

  const indicators = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const loadIndicators = async () => {
    loading.value = true;
    error.value = null;
    try {
      // A sua função 'request' já deve retornar o JSON,
      // então 'response' aqui já é o objeto de dados.
      const response = await getMonthlyIndicators();

      // Agora você pode atribuir o valor com segurança.
      // A sua lógica com '??' é boa para garantir que 'indicators.value'
      // sempre tenha um objeto.
      //indicators.value = response.data ? { data: response.data } : { data: response };
      //indicators.value = response.data ?? response; // Atribui diretamente

      indicators.value = await getMonthlyIndicators();


    } catch (err) {
      error.value = err.message || "Failed to load indicators";
    } finally {
      loading.value = false;
    }
  };

  return {
    indicators,
    loading,
    error,
    loadIndicators,
  };
}
