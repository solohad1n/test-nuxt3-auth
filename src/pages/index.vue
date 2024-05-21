<template>
  <div class="welcome container">
    <h2 class="welcome__title">Добро пожаловать</h2>
    <section class="welcome__signup signup-welcome" v-if="showForm">
      <h3 class="signup-welcome__title">Регистрация</h3>
      <SignUp @successSignup="enterLogin" />
      <p class="signup-welcome__switch">
        Уже зарегистрированы?
        <span @click="showForm = false">Вход</span>
      </p>
    </section>
    <section class="welcome__login login-welcome" v-else>
      <h3 class="login-welcome__title">Вход</h3>
      <Login @successLogin="enterWelcome" />
      <p class="login-welcome__switch">
        Еще нет аккаунта?
        <span @click="showForm = true">Зарегистрируйтесь</span>
      </p>
    </section>
  </div>
</template>
<script setup>
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const showForm = ref(false);
const router = useRouter();

const enterWelcome = () => {
  router.push("/welcome");
};

const enterLogin = () => {
  showForm.value = false
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  max-width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>