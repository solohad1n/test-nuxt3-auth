import { useAuth } from '@/composables/useAuth';

export default defineNuxtRouteMiddleware((to, from) => {
  const { getToken } = useAuth();

  if (!getToken() && to.path !== '/') {
    return navigateTo('/');
  }
});