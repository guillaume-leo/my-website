<template>
  <div class="projects__project project">
    <hr class="project__separator">
    <h1 class="project__title"> {{ title }}</h1>
    <p class="project__date"> {{ date }}</p>
    <img v-show="screenshot" :src="screenshot" alt="project screenshot" class="project__screenshot">
    <p class="project__description"> {{ description }}</p>
    <h2 class="project__section">Technologies</h2>
    <ul class="project__technnologies technos">
      <li v-for="t in technologies" class="technos__techno"> {{ t }}</li>
    </ul>
    <h2 class="project__section">Links</h2>
    <ul class="project__links links links--project">
      <li v-for="l in links" class="links__link link link--project"> <a target="_blank" :href="l.url">{{ l.text }}</a>
      </li>
    </ul>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  screenshot: String,
  description: String,
  technologies: Array,
  links: Array
})
</script>