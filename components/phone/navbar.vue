<template>
  <nav ref="navBar" class="page__header page__header--phone nav nav--phone">
    <button @click="handleNav" class="nav__menu-button">
      <img v-if="!isNavOpen" class="icon" src="/icons/hamburger.png" alt="menu icon">
      <img v-else class="icon" src="/icons/close.png" alt="menu icon">
    </button>
    <div v-show="isNavOpen" class="links links--phone">
      <NuxtLink @click="handleClick" class="link" to="/">Home</NuxtLink>
      <NuxtLink @click="handleClick" class="link" to="/cv">cv web</NuxtLink>
      <NuxtLink @click="handleClick" class="link" to="/projects">projects</NuxtLink>
      <!-- <NuxtLink @click="handleClick" class="link" to="/bc_lib">bancamp lib</NuxtLink> -->
      <!-- <NuxtLink @click="handleClick" class="link" to="/art">Art</NuxtLink> -->
      <NuxtLink @click="handleClick" class="link" to="/contact">Contact</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const isNavOpen = ref(false)
const navBar = ref(null)

const handleClick = () => {
  isNavOpen.value = false;
  navBar.value.style.minHeight = isNavOpen.value ? '100%' : 'auto';
}

const handleNav = () => {
  isNavOpen.value = !isNavOpen.value
  navBar.value.style.minHeight = isNavOpen.value ? '100%' : 'auto';
}
</script>

<style scoped>
.links {
  padding-block-start: 40px;
  padding-inline-start: 15px;
}

.link {
  font-size: 16px;
  text-align: left;
}
</style>