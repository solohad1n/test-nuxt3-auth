<template>
  <div class="navbar">
    <nav class="nav">
      <div class="nav__title">
        <p>Добро Пожаловать</p>
      </div>
      <button class="nav__btn" @click="handleClickLogout">Выйти</button>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const router = useRouter();
const { clearToken } = useAuth();

const handleClickLogout = () => {
  clearToken();
  router.push('/');
};
</script>

<style>
.nav {
  text-align: center;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed black;
  margin-bottom: 20px;
}
</style>