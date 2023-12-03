<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="Heading2">Login</h1>
      <form @submit.prevent="login" class="mt-4">
        <div class="py-5">
            <label for="email" class="m-5 bodyText">Email:</label>
            <input type="email" id="email" v-model="email" required>
        </div>

        <div class="py-5">
            <label for="password" class="m-5 bodyText">Password:</label>
            <input type="password" id="password" v-model="password" required>
        </div>

        <button type="submit" class="btn m-5">Login</button>
      </form>

      <div class="mt-4 text-center">
        <p class="Heading3">Or log in with:</p>
        <button @click="loginWithGoogle" class="btn-minor m-2">Google</button>
        <button @click="loginWithGitHub" class="btn-minor m-2">GitHub</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Perform login logic here
        console.log('Logging in...');
      }
    }
  };
  </script>
  