<template>
  <div class="projects">
    <ProjectCard v-for="p in projects" :title="p.title" :date="p.date" :screenshot="p.screenshot"
      :description="p.description" :technologies="p.technologies" :links="p.links" />
  </div>
</template>

<script setup>

const projects = [
  {
    title: 'my website',
    date: '2023',
    screenshot: null,
    description: 'a website that brings together my various projects as a web developer and audio visual artist',
    technologies: ['nuxt 3', 'vue 3', 'sass', 'firebase', 'github pages'],
    links: [
      {
        text: 'website',
        url: 'https://www.guillaume-leo.com'
      },
      {
        text: 'code source',
        url: 'https://github.com/guillaume-leo/my-website'
      },
    ]
  },
  {
    title: 'damn good cafe',
    date: '2023',
    screenshot: null,
    description: 'A website for a coffee bar based in brussels',
    technologies: ['nuxt 3', 'vue 3', 'sass', 'google sheet (as database)', 'github pages'],
    links: [
      {
        text: 'website',
        url: 'https://damngoodcafe.com/'
      },
      {
        text: 'code source',
        url: 'https://github.com/guillaume-leo/rgb124'
      },
    ]
  },
  {
    title: 'RGB124',
    date: '2022',
    screenshot: null,
    description: 'Alex GD wanted a website to show his work as a video creator.',
    technologies: ['nuxt 3', 'vue 3', 'babylon js', 'sass', 'google sheet (as database)', 'github pages'],
    links: [
      {
        text: 'website',
        url: 'https://www.rgb124.be'
      },
      {
        text: 'code source',
        url: 'https://github.com/guillaume-leo/rgb124'
      },
    ]
  },
]
</script>