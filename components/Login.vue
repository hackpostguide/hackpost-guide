<script setup lang="ts">
    
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD0BItst5RuS0vY7TjAzcANMh1OKE7e_MQ",
        authDomain: "hackpost-guide.firebaseapp.com",
        projectId: "hackpost-guide",
        storageBucket: "hackpost-guide.appspot.com",
        messagingSenderId: "118368469097",
        appId: "1:118368469097:web:6803e767e65920618662f8",
        measurementId: "G-WTDDS3XCDR"
    };
    

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);

    console.log("firebase initialized:");
    console.log(app);

    const provider = new GoogleAuthProvider();
    console.log("provider created:");

    let signedIn = ref(auth.currentUser);
    

    function signInWithGoogle() {
        console.log("signing in with google");
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                signedIn.value = user;
                // ...
                console.log("signed in with google");
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log("error signing in with google");
                console.log(error);
            });
    }

    function signOut() {
        auth.signOut().then(() => {
            // Sign-out successful.
            console.log("signed out");
            signedIn.value = null;
        }).catch((error) => {
            // An error happened.
            console.log("error signing out");
            console.log(error);
        });
    }

    // signInBtn?.addEventListener('click', signInWithGoogle);
</script>

<template>
    <div>
        <h1 v-if="signedIn != null" class="Heading3">Hello {{ signedIn.displayName }}!</h1>
        <h1 v-else class="Heading3">Login Test</h1>
        <!-- <section id="whenSignedOut"> -->
        <button @click="signInWithGoogle" class="btn">Sign in with Google</button>
        <!-- </section> -->
        <!-- <section id="whenSignedIn" hidden="true"> -->
            <!-- <div id="userDetails"></div> -->
        <button @click="signOut" class="btn">Sign Out</button>
        <!-- </section> -->
    </div>
</template>



<style scoped>

</style>