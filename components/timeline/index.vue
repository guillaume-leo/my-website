<template>
  <div class="timeline">
    <div v-for="p in events" class="phase">

      <div class="phase__date"> {{ p.moment }}</div>
      <div class="phase__step step">
        <div class="step__dot"></div>
        <div class="step__line"></div>
      </div>
      <TimelineText :title="p.title" :description="p.description" :mission="p.mission" :technos="p.technos"
        :links="p.links" />
    </div>
  </div>
</template>



<script setup>

const events = [
  {
    moment: "2022/02 today",
    title: 'BPART',
    description: 'Fullstack developer on the BPART voting platform',
    mission: 'Maintaining, adding new feature, refactoring, fixing bugs on the CMS',
    technos: ['ruby on rails', 'turbo rails', 'react', 'alpine'],
    links: [
      {
        url: 'https://bpart.be/en/home-english/',
        text: 'bpart'
      }
    ]
  },
  {
    moment: "2022 today",
    title: 'Websites and visual creations',
    description: "creation of multiple websites and real-time visuals for musicians",
    mission: null,
    technos: ['Nuxt', 'Javascript', 'max/msp', 'glsl'],
    links: [
      {
        url: "https://www.guillaume-leo.com/projects",
        text: 'projects gallery'
      }
    ]
  },
  {
    moment: "2021/07",
    title: 'Climact',
    description: 'A six month internship as front-end developer.',
    mission: 'Adding new features to a data visualisation app',
    technos: ['html', 'css', 'javascript', 'react', 'redux', 'apex chart'],
    links: [
      {
        url: 'https://pathwaysexplorer.climact.com',
        text: 'webtool'
      }
    ]
  },
  {
    moment: "2021/01",
    title: 'Becode',
    description: 'An eight month intensive training on web technologies',
    mission: null,
    technos: ['html', 'css', 'javascript', 'react', 'vue', 'node'],
    links: null
  }
]
</script>