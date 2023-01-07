<template>
  <div class="form form--db">

    <div class="form__field">
      <NuxtLink to="/bc_lib" class="form__field-close-button"><img class="icon icon--close" src="/icons/close.png"
          alt="menu icon" /></NuxtLink>
      <label for="bandcampLink">embeded player</label>
      <input class="input input--text" name="bandcampLink" type="text" v-model="bandcampLink">
    </div>

    <div class="form__field">
      <label for="bandcampTags">tags (comma separated)</label>
      <input class="input input--text" name="bandcampTags" type="text" v-model="tags">
    </div>

    <div class="form__field">
      <button class="button button--submit" @click="setDb">add to db</button>
    </div>

  </div>
</template>