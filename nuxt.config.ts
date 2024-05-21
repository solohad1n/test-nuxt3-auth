export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  pages: true,
  router: {
    middleware: 'auth',
  },
  srcDir: 'src/',
});