<template>
  <div class="page">
    <PhoneNavbar />
    <div class="page__content">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<script setup>

useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style lang="scss">
html {
  font-family: "Fira Code";
}
</style>