<template>
  <section class="signup">
    <form class="signup__form form-signup" @submit.prevent="handleSubmit">
      <input class="form-signup__email" v-model="email" type="email" required placeholder="Email" />
      <input class="form-signup__password" v-model="password" type="password" required placeholder="Password" />
      <button class="form-signup__btn">Регистрация</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

const email = ref("");
const password = ref("");
const { error, signup } = useSignup();

const successSignup = defineEmits(["successSignup"]);

const handleSubmit = async () => {
  await signup(email.value, password.value);

  if (!error.value) {
    successSignup("successSignup");
  } else {
    console.error(error.message);
  }
};
</script>