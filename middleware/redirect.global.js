export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name == 'web') return navigateTo('/web/projects');
  console.log(to, from);
});
