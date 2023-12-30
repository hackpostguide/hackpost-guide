import { defineStore } from 'pinia';
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
import { ref } from 'vue';
import { useFirestore, useFirebaseAuth, useCollection } from 'vuefire'; 
import { collection, doc, setDoc, getDoc, writeBatch } from 'firebase/firestore';

export const useUserStore = defineStore('user', () => {
    // Reactive references
    const db = useFirestore();
    const auth = useFirebaseAuth()!;
    const user = useCurrentUser(); // holds the current user state

    const usersRef = useCollection(collection(db, 'users'));

    const route = useRoute();
    const router = useRouter();

    // Auth methods
    const signIn = async (email: any, password: any) => {
        try {
            signInWithEmailAndPassword(auth, email.value, password.value);
            router.push('/'); // Redirect the user to a confirmed page
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const signOut = async () => {
        await auth.signOut();
        user.value = null;
    };

    async function getData() {
        if (user.value) {
            const docRef = doc(db, 'users', user.value.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log('Document data:', docSnap.data());
                return docSnap.data();
            } else {
                // doc.data() will be undefined in this case
                console.log('No user found');
            }
        }
        else return null;
    }
    


    return { 
        user, // the current user
        signIn, // method to sign in
        signOut, // method to sign out
        getData,
    }
});
