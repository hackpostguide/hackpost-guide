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

const db = useFirestore();
const auth = useFirebaseAuth()!;
// const route = useRoute();
const router = useRouter();

// const user = ref(useCurrentUser()); // holds the current user state

export const useUserStore = defineStore('user', {
    //using option stores

    /*
    const db = useFirestore();
    const auth = useFirebaseAuth()!;
    // const route = useRoute();
    const router = useRouter();*/

    state: () => {
        return {
            user: useCurrentUser(), // holds the current user state
            displayName: '',
            username: '',
            email: '',
            photoURL: '',
            emailVerified: false,
        };
    },
    getters: {
        //getters:
        getUser(state) {
            return state.user;
        },
        getDisplayName(state) {
            return state.displayName;
        },
        getUsername(state) {
            return state.username;
        },
        getEmail(state) {
            return state.email;
        },
        getPhotoURL(state) {
            return state.photoURL;
        },
        getEmailVerified(state) {
            return state.emailVerified;
        },
    },
    actions: {
        //sign in:
        async signIn(email: any, password: any) {
            if(this.emailVerified){
                try {
                    signInWithEmailAndPassword(auth, email.value, password.value);
                    router.push('/'); // Redirect the user to a confirmed page
                } catch (error) {
                    console.error('Login failed:', error);
                    // let the form component display the error
                    return error;
                }
            }
            else{
                console.log('Email not verified');
                return 'Email not verified';
            }
            this.user = useCurrentUser().value;
        },

        //sign out:
        async signOut() {
            await auth.signOut();
            this.user = null;
        },
    
    },

    /*

    // Reactive references
    const user = ref(useCurrentUser()); // holds the current user state
    // const usersRef = ref(useCollection(collection(db, 'users')));

    

    //getters:



    //actions:

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
            console.log('user uid: ', user.value.uid);
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
        else{
            console.log('No user found');
            return null;
        }
    }
    


    return { 
        user, // the current user
        signIn, // method to sign in
        signOut, // method to sign out
        getData,
    }*/
    
});
