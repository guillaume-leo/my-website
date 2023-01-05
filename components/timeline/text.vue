<template>
  <div class="phase__text card">
    <h1 class="card__title">
      {{ title }}
    </h1>
    <p class="card__description">
      {{ description }}
    </p>
    <h2 v-show="mission"> Mission </h2>
    <p v-show="mission" class="card__mission">
      {{ mission }}
    </p>
    <h2 v-show="technos"> Technos </h2>
    <ul v-show="technos" class="card__technos technos">
      <li v-for="t in technos" class="technos__techno">{{ t }}</li>
    </ul>
    <h2 v-show="links"> Links </h2>
    <ul v-show="links" class="card__links links">
      <li v-for="l in links" class="links__link"><a target="_blank" :href="l.url">{{ l.text }}</a></li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  mission: String,
  technos: Array,
  links: Array
})
</script>