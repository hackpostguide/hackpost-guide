<template>
    <div>
        <h1 class="Heading3">Login Test </h1>
        <section id="whenSignedOut">
            <button id="signInBtn" class="btn">Sign in with Google</button>
        </section>
        <section id="whenSignedIn" hidden="true">
            <div id="userDetails"></div>
            <button id="signOutBtn" class="btn">Sign Out</button>
        </section>
    </div>
</template>


<script lang="ts">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import { getAuth } from "firebase/auth";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyC3rSEjG07ENS2GmU4tgs-dMunIWP-pT18",
        authDomain: "hackpost-6319a.firebaseapp.com",
        projectId: "hackpost-6319a",
        storageBucket: "hackpost-6319a.appspot.com",
        messagingSenderId: "1092094960851",
        appId: "1:1092094960851:web:d02484bd840fac13a86026",
        measurementId: "G-ZZGYJQKPD8"
    };
    

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);

    console.log("firebase initialized:");
    console.log(app);


    import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

    const provider = new GoogleAuthProvider();
    console.log("provider created:");
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });




    
    
</script>

<style scoped>

</style>