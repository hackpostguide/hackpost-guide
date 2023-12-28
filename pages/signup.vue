<script lang="ts" setup>
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  linkWithCredential,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  updateCurrentUser,
  updateProfile,
  AuthCredential,
  getRedirectResult,
} from 'firebase/auth'

import { ref } from 'vue'

import { 
  updateCurrentUserProfile,
  useCurrentUser,
  useFirebaseAuth,
} from 'vuefire'

//implement google sign in and others later
// const googleAuthProvider = new GoogleAuthProvider()

// auth is null on the server but it's fine as long as we don't use it. So we force the type to be non-null here because
// auth is only used within methods that are only called on the client
const auth = useFirebaseAuth()!
const user = useCurrentUser()
let credential: AuthCredential | null = null

const route = useRoute()
const router = useRouter()

// automatically redirect the user if they are logged in but was rejected on the server because of an outdated cookie
watch(user, (user) => {
  if (
    user &&
    route.query.redirect &&
    typeof route.query.redirect === 'string'
  ) {
    router.push(route.query.redirect)
  }
})

// new user
const email = ref('')
const password = ref('')
function signUp() {
  // link to an existing anonymous account
  // if (user.value?.isAnonymous) {
  //   credential = EmailAuthProvider.credential(email.value, password.value)

  //   return linkWithCredential(user.value, credential).then(() => {
  //     return signInWithEmailAndPassword(auth, email.value, password.value)
  //   })
  // }

  // create a regular account
  return createUserWithEmailAndPassword(auth, email.value, password.value)
}

// function signinPopup() {
//   return signInWithPopup(auth, googleAuthProvider).then((result) => {
//     const googleCredential = GoogleAuthProvider.credentialFromResult(result)
//     credential = googleCredential
//     const token = googleCredential?.accessToken
//     console.log('Got Google token', token)
//     console.log('Got googleCredential', googleCredential)
//   })
// }

async function changeUserImage() {
  if (user.value) {
    await updateCurrentUserProfile({
      photoURL: 'https://i.pravatar.cc/150?u=' + Date.now(),
    })

  }
}

// function signinRedirect() {
//   signInWithRedirect(auth, googleAuthProvider)
// }

// onMounted(() => {
//   getRedirectResult(auth).then((creds) => {
//     console.log('got creds', creds)
//     if (creds) {
//       // credential = creds.user.
//     }
//   })
// })
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="Heading2">Sign Up</h1>

    <form @submit.prevent="signUp()">
      <fieldset>
        <div class="py-5">
          <label for="email" class="bodyText">Email: </label>
          <input v-model="email" type="email" required />
        </div> 
        <div class="py-5">
          <label for="password" class="bodyText">Password: </label>
          <input v-model="password" type="password" required />
        </div> 

        <button class="btn">Create User</button>
      </fieldset>
    </form>

    <h1 class="Heading2">Sign In</h1>
    <form @submit.prevent="signInWithEmailAndPassword(auth, email, password)">
      <fieldset>

        <div class="py-5">
          <label for="email" class="bodyText">Email: </label>
          <input v-model="email" type="email" required />
        </div> 
        <div class="py-5">
          <label for="password" class="bodyText">Password: </label>
          <input v-model="password" type="password" required />
        </div> 

        <button class="btn">Sign In</button>
      </fieldset>
    </form>


    <button class="btn" @click="signOut(auth)">Sign Out</button>

    <!-- for debugging purposes only -->
    <ClientOnly>
      <p>Current User:</p>
      <pre>{{ user }}</pre>
    </ClientOnly>

    <div class="mt-8 text-center">
      <h2 class="Heading3">Or log instead:</h2>
        <AppButton buttonStyle="minor" to="/login" class="m-5">Login</AppButton>
    </div>
  </div>
</template>

