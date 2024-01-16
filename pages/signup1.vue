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
  sendEmailVerification,
  AuthCredential,
  getRedirectResult,
} from 'firebase/auth'

import { ref, watch } from 'vue';
import {
  useCurrentUser,
  useFirebaseAuth,
  updateCurrentUserProfile,
} from 'vuefire';
// import { useCollection, useDocument } from 'vuefire';
import { collection, doc, setDoc, getDoc, writeBatch } from 'firebase/firestore';


//use pinia user store
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();


const db = useFirestore();
const auth = useFirebaseAuth()!;
const user = useCurrentUser();
let credential: AuthCredential | null = null;

// const route = useRoute();
const router = useRouter();

// Redirect if already logged in
// watch(user, (user) => {
//   if (
//     user &&
//     route.query.redirect &&
//     typeof route.query.redirect === 'string'
//   ) {
//     router.push(route.query.redirect);
//   }
// });


//for some reason signing up and signing in are taking up 50 reads each - fix! 

// New user refs
const firstName = ref('');
const lastName = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref(''); // Holds error messages for user feedback

// const usersRef = useCollection(collection(db, 'users'));
// const usernameRef = useCollection(collection(db, 'usernames'));

async function signUp() {
  try {
    // Validate username and password constraints
    if (!username.value) {
      errorMessage.value = "Username cannot be empty";
      return "Username cannot be empty";
    } else if (username.value.length < 3) {
      errorMessage.value = "Username must be at least 3 characters";
      return "Username must be at least 3 characters";
    } else if (username.value.length > 15) {
      errorMessage.value = "Username must be less than 15 characters";
      return "Username must be less than 20 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(username.value)) {
      errorMessage.value = "Username can only contain letters, numbers, and underscores";
      return "Username can only contain letters, numbers, and underscores";
    } else if (password.value.length < 6) {
      errorMessage.value = "Password must be at least 6 characters";
      return "Password must be at least 6 characters";
    }

    // Check if the username is already taken
    //costs 1 doc read
    const usernameDocRef = doc(db, 'usernames', username.value);
    const docSnapshot = await getDoc(usernameDocRef);
    if (docSnapshot.exists()) {
      errorMessage.value = "Username is already taken";
      return "Username is already taken";
    }

    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    //TODO: save user info first, then send verification email

    // Send verification email
    await sendEmailVerification(userCredential.user);
    console.log("Verification email sent.");

    return "User registered successfully, verification email sent.";
  } catch (error: any) {
    errorMessage.value = error.message;
    console.error("Signup failed:", error);
    return "Registration failed: " + error.message;
  }
}

async function signIn(){
  //pinia store signIn:
  //TODO: does not work
  // userStore.signIn(email.value, password.value);

  if (auth.currentUser) {
    await checkEmailVerification(auth.currentUser);
  }
  else{
    signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/'); // Redirect the user to a confirmed page
  }
}

async function checkEmailVerification(user: { reload?: any; emailVerified?: any; uid: any; email?: any; }) {
  await user.reload(); // Refresh the user's auth object
  if (user.emailVerified) {
    // Email is verified, proceed to save the user information
    let displayName = firstName.value + " " + lastName.value;
    try {
      await saveUserInfo(user, displayName, username.value);
      // Sign out after successfully saving user info
      await auth.signOut();
    } catch (error: any) {
      console.error("Error saving user information:", error);
      errorMessage.value = "Failed to save user information: " + error.message;
    }
  } else {
    // Email not yet verified, you might want to check again or prompt the user
    errorMessage.value = "Please verify your email to complete registration.";
  }
}

function saveUserInfo(user: { reload?: any; emailVerified?: any; uid: any; email?: any; }, displayName: any, username: string) {
  // Batch write to save user info and username
  const batch = writeBatch(db);
  const userRef = doc(db, 'users', user.uid);
  batch.set(userRef, {
    displayName: displayName,
    username: username,
    email: user.email,
  }); 

  const usernameRef = doc(db, 'usernames', username);
  batch.set(usernameRef, { uid: user.uid });

  batch.commit().then(() => {
    console.log("User information saved!");
  }).catch((error) => {
    console.error("Error saving user information:", error);
    errorMessage.value = "Failed to save user information: " + error.message;
  });
}

// async function changeUserImage() {
//   if (user.value) {
//     await updateCurrentUserProfile({
//       photoURL: 'https://i.pravatar.cc/150?u=' + Date.now(),
//     });
//   }
// }

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
    <p>{{ errorMessage }}</p>


    <h1 class="Heading2">Sign In</h1>
    <form @submit.prevent="userStore.signIn(email, password)">
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


    <button class="btn" @click="userStore.signOut()">Sign Out</button>

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

