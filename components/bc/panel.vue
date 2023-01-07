<template>
  <div class="bc-panel icons--bc-page">
    <NuxtLink to="/bc_lib/login" class="bc-panel__button">
      <img class="icon" src="/icons/user.png" alt="user icon" />
    </NuxtLink>
    <button class="button button--sign-out">logout</button>
    <NuxtLink to="/bc_lib/db" class="bc-panel__button">
      <img class="icon" src="/icons/database.png" alt="database icon" />
    </NuxtLink>
    <NuxtLink to="/bc_lib/tags" class="bc-panel__button">
      <img class="icon" src="/icons/hashtag.png" alt="hashtag icon" />
    </NuxtLink>
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
  outline: solid 2px black;
}
</style>