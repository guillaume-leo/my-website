

<template>
  <template v-if="!userData">
    <details>
      <summary class="button button--detail">connexion</summary>
      <div class="form form--login">
        <div class="form__field">
          <label for="email">email</label>
          <input name="email" class="input input--text" v-model="email" type="email" id="" />
        </div>

        <div class="form__field">
          <label for="password">password</label>
          <input name="password" class="input input--text" v-model="password" type="password" id="">
        </div>

        <button class="button button--sign-in" @click="signIn" type="submit">ok</button>
      </div>
    </details>
  </template>
  <div v-else class="form form--logout">

    <button class="button button--sign-out" @click="signOut">logout</button>
  </div>

  <div v-show="userData" class="form form--db">

    <details>
      <summary class="button button--detail">database</summary>
      <div class="form__field">
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
    </details>

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


</template>

<script setup >




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
</script>