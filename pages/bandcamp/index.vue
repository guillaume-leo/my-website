<template>
  <h1>bandcamp</h1>
  {{ userData }}
  <div v-if="!userData">
    <input v-model="email" type="email" name="" id="" />
    <input v-model="password" type="password" name="" id="">
    <button @click="signIn" type="submit">connect</button>
  </div>
  <button v-else @click="signOut">Sign Out</button>
</template>

<script setup >

const app = await initFirebaseApp()

const userData = ref(true)
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

onMounted(async () => {
  initUser(userData)
})
</script>