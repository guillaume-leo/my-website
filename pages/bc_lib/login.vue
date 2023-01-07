<template>
  <div class="form form--login">
    <div class="form__field">
      <NuxtLink to="/bc_lib" class="form__field-close-button"><img class="icon icon--close" src="/icons/close.png"
          alt="close icon" /></NuxtLink>
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