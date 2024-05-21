import { ref } from 'vue';

const token = ref(null);

export const useAuth = () => {
  const setToken = (newToken) => {
    token.value = newToken;
  };

  const clearToken = () => {
    token.value = null;
  };

  const getToken = () => {
    return token.value;
  };

  return {
    setToken,
    clearToken,
    getToken,
  };
};