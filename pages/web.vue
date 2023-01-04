<template>
  <nav class="nav nav--web-page">
    <NuxtLink class="link--web-page" to="/web/projects">projects</NuxtLink>
    <NuxtLink class="link--web-page" to="/web/cv">cv</NuxtLink>
  </nav>
  <div class="page__content--web-page">
    <NuxtPage page-key="someKey" />
  </div>
</template>

<script setup>

</script>