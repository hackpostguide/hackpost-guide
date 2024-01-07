import { defineStore } from 'pinia'
import { getApps, initializeApp } from 'firebase/app';

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
    onAuthStateChanged,
    User,
    AuthError,
  } from 'firebase/auth'
import { ref } from 'vue';
import { useFirestore, useFirebaseAuth, useCollection } from 'vuefire'; 
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { collection, doc, setDoc, getDoc, writeBatch } from 'firebase/firestore';

// //initialize firebase
// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID, 
//     appId: process.env.FIREBASE_APP_ID,
//     // there could be other properties depending on the project
// };

// // Initialize Firebase

// //intialize only if not already initialized:
// if (!getApps().length) {
//     initializeApp(firebaseConfig);
// }
// const app = initializeApp(firebaseConfig);


const db = useFirestore();
const auth = useFirebaseAuth()!;
// const db = getFirestore(app);
// const auth = getAuth(app);

const route = useRoute();
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
            user: null as User | null,
            displayName: '',
            username: '',
            email: '',
            photoURL: '',
            emailVerified: false,
            authError: '' as string | null,
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
        isAuthenticated: (state) => state.user !== null && state.emailVerified,
    },
    actions: {
        //setters 
        setUser(payload: User | null) {
            this.user = payload;
            if (payload) {
                this.email = payload.email || '';
                this.emailVerified = payload.emailVerified;
                this.loadUserProfile(); // Load additional profile details from Firestore
            } else {
                this.clearUserProfile();
            }
        },
      
        clearUserProfile() {
            this.displayName = '';
            this.username = '';
            this.photoURL = '';
        },
      
        async loadUserProfile() {
            if (this.user) {
                const userProfileRef = doc(db, 'users', this.user.uid);
                try {
                    const userProfileSnap = await getDoc(userProfileRef);
                    if (userProfileSnap.exists()) {
                        const profileData = userProfileSnap.data();
                        this.displayName = profileData.displayName || '';
                        this.username = profileData.username || '';
                        this.photoURL = profileData.photoURL || '';
                    } else {
                        this.clearUserProfile();
                        this.authError = 'No user profile found in Firestore';
                        console.log(this.authError);
                    }
                } catch (error) {
                    this.authError = 'Error fetching user profile: ' + error;
                    console.error(this.authError);
                }
            }
        },      

        //sign in:
        async signIn(email: any, password: any) {
            if(this.emailVerified){
                try {
                    const { user } = await signInWithEmailAndPassword(auth, email, password);
                    this.setUser(user);
                    this.authError = null;
                    // useRouter().push('/'); // customize route later
                } catch (error) {
                    this.authError = (error as AuthError).message;
                }
            }
            else{
                console.log('Email not verified');
                this.authError = 'Email not verified'; 
                return this.authError;
            }
        },

        //sign out:
        async signOut() {
            try {
              await signOut(auth);
              this.setUser(null);
            //   useRouter().push('/'); // customize route later
            } catch (error) {
              this.authError = (error as AuthError).message;
            }
        },

        // Call this method in your main entry file to initialize the user's state based on their auth state
        initializeAuthListener() {
            onAuthStateChanged(auth, (user) => {
                this.setUser(user);
            });
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