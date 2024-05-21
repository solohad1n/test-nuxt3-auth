<template>
  <section class="login">
    <form class="login__form form-login" @submit.prevent="handleSubmit">
      <input class="form-login__email" v-model="email" type="email" placeholder="Email" required />
      <input class="form-login__password" v-model="password" type="password" placeholder="Password" required />
      <p class="form-login__error" v-if="error">Ошибка входа</p>
      <button class="form-login__btn" type="submit">Вход</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import useLogin from '@/composables/useLogin';

const router = useRouter();
const { login, error: loginError } = useLogin();
const { setToken } = useAuth();

const email = ref('');
const password = ref('');
const error = ref(null);

const handleSubmit = async () => {
  const response = await login(email.value, password.value);

  if (response && response.token) {
    setToken(response.token);
    router.push('/welcome');
  } else {
    error.value = loginError.value;
  }
};
</script>