import { ref } from 'vue';

const error = ref(null);

const signup = async (email, password) => {
  error.value = null;
  try {
    const response = await fetch('https://dev-erpfit.risoma.ru/api/v1/users/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;