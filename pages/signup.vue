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

import { useCollection, useDocument, useFirestore } from 'vuefire'
import { collection, doc, setDoc, writeBatch } from 'firebase/firestore'

const db = useFirestore()

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
const firstName = ref('');
const lastName = ref('');
const username = ref('');

const email = ref('')
const password = ref('')

const usersRef = useCollection(collection(db, 'users'));
const usernameRef = useCollection(collection(db, 'usernames'));

function signUp() {
  // Check if username is unique
  
  if(!username.value) {
    throw new Error("Username cannot be empty");
  }
  else if(username.value.length < 3){
    throw new Error("Username must be at least 3 characters");
  }
  else if(username.value.length > 20){
    throw new Error("Username must be less than 20 characters");
  }
  else if(!/^[a-zA-Z0-9_]+$/.test(username.value)){
    throw new Error("Username can only contain letters, numbers, and underscores");
  }

  const usernameDoc = useDocument(doc(db, 'usernames', username.value));
  // useDocument(doc(db, 'usernames', username.value)).then(doc => {
  console.log(usernameDoc);
  if (usernameDoc.value != undefined) {
    alert("Username is already taken");
    return new Error("Username is already taken");
  } else {
    alert("Username is available");
    return createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // User created, now store the additional info in Firestore
        let displayName = firstName.value + " " + lastName.value;
        saveUserInfo(userCredential.user, displayName, username.value);
        // Optionally handle the username separately to enforce uniqueness
        setDoc(doc(db, 'usernames', (username.value)), { uid: userCredential.user.uid });
      });
  }
  // }).catch((error: any) => {
  //   console.error("Signup failed:", error);
  //   // Handle the error, e.g., display a message to the user
  // });
}

function saveUserInfo(user: any, displayName: string, username: string) {
  const batch = writeBatch(db);
  const userRef = doc(db, 'users', user.uid);
  batch.set(userRef, {
    displayName: displayName,
    username: username,
    email: user.email
  });

  const usernameRef = doc(db, 'usernames', username);
  batch.set(usernameRef, { uid: user.uid });

  // Commit the batch
  batch.commit().then(() => {
    console.log("User information saved!");
  }).catch((error: any) => {
    console.error("Error saving user information:", error);
  });
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
          <label for="firstName" class="bodyText">First Name: </label>
          <input v-model="firstName" type="text" required />
        </div>
        <div class="py-5">
          <label for="lastName" class="bodyText">Last Name: </label>
          <input v-model="lastName" type="text" required />
        </div>
        <div class="py-5">
          <label for="username" class="bodyText">Username: </label>
          <input v-model="username" type="text" required />
        </div>
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

