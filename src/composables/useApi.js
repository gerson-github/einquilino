/* 
Generic service to interact with my API node server
*/

import { ref } from "vue";

export function useApi() {
  const loading = ref(false);
  const error = ref(false);

  const get = async (url) => {
    loading.value = true;
    error.value = true;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      error.value - err.message || "Unknown error";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const post = async (url, data) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      error.value = err.message || "Unknown error";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const put = async (url, data) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      error.value = err.message || "Unknown error";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const del = async (url) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      error.value = err.message || "Unknown error";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return { loading, error, get, post, put, del };
}
