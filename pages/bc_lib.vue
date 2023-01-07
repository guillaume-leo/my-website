<template>
  <div class="bc">
    <BcPanel />
    <NuxtPage />
  </div>
  CONTENT
</template>


<script setup>

</script>


<!-- <template>
  <div class="bc-panel icons--bc-page">

    <button v-if="!userData" @click="handleSelectedForms([1, 0, 0])" class="bc-panel__button"><img
        :class="selectedForms[0] === 1 ? 'icon icon--selected' : 'icon'" src="/icons/user.png"
        alt="user icon" /></button>
    <button v-else class="button button--sign-out" @click="signOut">logout</button>
    <button v-if="userData" @click="handleSelectedForms([0, 1, 0])" class="bc-panel__button"><img
        :class="selectedForms[1] === 1 ? 'icon icon--selected' : 'icon'" src="/icons/database.png"
        alt="database icon" /></button>
    <button @click="handleSelectedForms([0, 0, 1])" class="bc-panel__button"><img
        :class="selectedForms[2] === 1 ? 'icon icon--selected' : 'icon'" src="/icons/hashtag.png"
        alt="hashtag icon" /></button>


  </div>

  <template v-if="!userData && selectedForms[0] === 1">
    <div class="form form--login">
      <div class="form__field">
        <button @click="handleSelectedForms([0, 0, 0])" class="form__field-close-button"><img class="icon icon--close"
            src="/icons/close.png" alt="menu icon" /></button>
        <label for="email">email</label>
        <input name="email" class="input input--text" v-model="email" type="email" id="" />
      </div>

      <div class="form__field">
        <label for="password">password</label>
        <input name="password" class="input input--text" v-model="password" type="password" id="">
      </div>

      <button class="button button--sign-in" @click="signIn" type="submit">ok</button>
    </div>
  </template>


  <div v-show="userData && selectedForms[1] === 1" class="form form--db">

    <div class="form__field">
      <button @click="handleSelectedForms([0, 0, 0])" class="form__field-close-button"><img class="icon icon--close"
          src="/icons/close.png" alt="menu icon" /></button>
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

  <div class="form form--tags">
    <details>
      <summary class="button button--detail">tags</summary>
      <div class="form__field form__field--tags">
        <p v-for="(t, i) in bandcampLibTags" @click="handleTagClick(i)"
          :class="t.selected ? 'tag tag--selected' : 'tag'">{{ t.tag }}</p>
      </div>
    </details>
  </div>


  <div class="albums">
    <div class="albums__album" v-for="player in results" v-html="player.album"></div>
  </div>


</template> -->




<!-- <script setup >




function removeDuplicates(arr) {
  return arr.filter((item,
    index) => arr.indexOf(item) === index);
}

function flatten(ary) {
  var ret = [];
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      ret = ret.concat(flatten(ary[i]));
    } else {
      ret.push(ary[i]);
    }
  }
  return ret;
}

const app = initFirebaseApp()

const bandcampLib = ref([]);
const results = ref(null)
const bandcampLibTags = ref([])
const userData = ref(false)
const email = ref('')
const password = ref('')
const bandcampLink = ref('')
const tags = ref('')
const selectedForms = ref([0, 0, 0])

const handleSelectedForms = val => {
  selectedForms.value = val
  console.log(selectedForms.value);
}

const handleTagClick = (i) => {
  bandcampLibTags.value[i].selected = !bandcampLibTags.value[i].selected;
  const selectedTags = bandcampLibTags.value.filter(t => t.selected)
  if (selectedTags.length === 0) {
    results.value = bandcampLib.value
  } else {
    results.value = results.value.filter(album => album.tags.includes(bandcampLibTags.value[i].tag))
  }

}

const signOut = () => signOutUser();

const signIn = async () => {
  const result = await signInUser(email.value, password.value);
  if (result) {
    email.value = '';
    password.value = '';
  }
}

const setDb = async () => {
  const key = 'bandcamp_lib/';
  const currentDbState = await getDb();

  const newDbState = [
    ...currentDbState.filter(el => el.album !== bandcampLink.value),
    {
      album: bandcampLink.value,
      tags: tags.value.split(", ")
    }];
  if (!bandcampLink.value.match('https://bandcamp.com')) return
  const result = await writeInDb(app, key, newDbState) // is undefined ...
  bandcampLink.value = ''
  tags.value = ''
}

const getDb = async () => {
  const dbData = await getKeyInDb(app, 'bandcamp_lib/')
  return dbData
}

watch(bandcampLib, (albums) => {
  bandcampLibTags.value = removeDuplicates(flatten(albums.map(album => (album.tags)))).sort().map(e => ({ tag: e, selected: false }))
})

onMounted(async () => {
  initUser(userData);
  initDb(app, bandcampLib);
  bandcampLib.value = await getDb()
  results.value = bandcampLib.value;
})
</script> -->