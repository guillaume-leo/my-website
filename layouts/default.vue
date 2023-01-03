<template>
  <div class="page">
    <PhoneNavbar />
    <div class="page__content">
      <slot></slot>
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
      href: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swapp',
      crossorigin: ''
    }
  ]
})
</script>

<style lang="scss">
html {
  font-family: "Share Tech Mono";
}
</style>