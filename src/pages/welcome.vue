<template>
  <div class="container">
    <div class="wrapper">
      <Navbar/>
      <section class="post">
        <div class="post__item" v-for="index in 10" :key="index">Пост {{ index }}</div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";

definePageMeta({
  middleware: 'auth'
});
</script>

<style>
  .post {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    grid-gap: 10px;
  }
  .post__item {
    border: 1px solid green;
    border-radius: 10px;
  }
  .wrapper {
    padding: 10px;
  }
</style>