<template>
  <h1>bandcamp</h1>
  {{ bandcampLib }}
  <div v-if="!userData">
    <input v-model="email" type="email" name="" id="" />
    <input v-model="password" type="password" name="" id="">
    <button @click="signIn" type="submit">connect</button>
  </div>
  <button v-else @click="signOut">Sign Out</button>
  <button v-show="userData" @click="setDb">ADD SOMETHING INTIO DB</button>
</template>

<script setup >


const app = initFirebaseApp()

const bandcampLib = ref([]);
const userData = ref(false)
const email = ref('')
const password = ref('')

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
  const value = [{
    username: 'coucou' + Math.random(),
  },
  {
    username2: 'toi',
  }];
  const result = await writeInDb(app, key, value) // is undefined ...

}

const getDb = async () => {
  const dbData = await getKeyInDb(app, 'bandcamp_lib/')
  return dbData
}

onMounted(async () => {
  initUser(userData);
  initDb(app, bandcampLib);
  bandcampLib.value = await getDb()

})
</script>