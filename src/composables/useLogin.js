import { ref } from 'vue';
import { useAuth } from './useAuth';

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  const { setToken } = useAuth();

  try {
    const response = await fetch('https://dev-erpfit.risoma.ru/api/v1/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    setToken(data.token);
    return data;
  } catch (err) {
    error.value = err;
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;