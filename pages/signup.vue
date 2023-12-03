<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="Heading2">Sign Up</h1>
    <form @submit="submitForm">
        <div class="py-5">
            <label for="name" class="bodyText">Name: </label>
            <input type="text" id="name" v-model="name" required>
        </div>

        <div class="py-5">
            <label for="username" class="bodyText">Username: </label>
            <input type="text" id="username" v-model="username" required>
        </div>

        <div class="py-5">
            <label for="email" class="bodyText">Email: </label>
            <input type="email" id="email" v-model="email" required>
        </div>

        <div class="py-5">
            <label for="password" class="bodyText">Password: </label>
            <input type="password" id="password" v-model="password" required>
        </div>
        
        <button type="submit" class="btn">Sign Up</button>
    </form>
    
    <div class="mt-8 text-center">
      <h2 class="Heading3">Connect with:</h2>
      <button @click="connectWithGitHub" class="btn-minor m-5">GitHub</button>
      <button @click="connectWithGoogle" class="btn-minor m-5">Google</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
    },
    connectWithGitHub() {
      // Handle GitHub connection logic here
    },
    connectWithGoogle() {
      // Handle Google connection logic here
    }
  }
};
</script>
