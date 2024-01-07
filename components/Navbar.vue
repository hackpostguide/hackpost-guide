
<template>
  <header class="stickTop px-1 sm:px-10 shadow-sm bg-white dark:bg-black">
    <nav class="py-6 grid grid-cols-12 dark:text-white text-black">
      <div class="col-start-2 col-end-9 md:col-end-6">
        <NuxtLink to="/" class="flex items-left">
          <Logos-SvgIcon iconWidth="24" iconHeight="24" />
          <p class="px-3">
            <span class="font-bold">HackPost</span> Guide
          </p>
        </NuxtLink>
      </div>
      <!-- Need to fix: turn into a toggle menu for mobile screens  -->
      <div class="col-start-6 col-end-11 flex items-center justify-end mobileoff">
        <ul class="flex gap-9">
          <li><AppButton @click="getDisplayName()" buttonStyle="transparent">Modules</AppButton></li>
          <!-- Display user's name if signed in -->
          <li><AppButton to="/about" buttonStyle="transparent">About</AppButton></li>
          <li><AppButton to="/signup" buttonStyle="transparent">{{ isUserSignedIn() ? displayName : 'Sign In' }}</AppButton></li>
          <!-- Display "Sign Out" if user is signed in, else "Sign In" -->
          <li>
            <AppButton v-if="isUserSignedIn()" @click="logOut()" class="btn">Sign Out</AppButton>
            <AppButton v-else to="/signup" class="btn">Sign Up</AppButton>
          </li>
        </ul>
      </div>
      <div class="col-start-10 col-end-11 flex items-center justify-end mobileon">
        <NavbarDropdown></NavbarDropdown>
      </div>

      

      <div class="col-start-11 col-end-12 flex items-center justify-end">
        <ModeSwitch class=" dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts" async>
    
    import {
      signOut,
    } from 'firebase/auth';

    import { ref } from 'vue';

    // Reactive property for the display name
    const displayName = ref('');
    
    import { useFirebaseAuth, } from 'vuefire';
    import { useUserStore } from '~/stores/user';

    const auth = useFirebaseAuth();

    //probably could simplify this...
    const userStore = useUserStore();
    // let displayName = userStore.displayName();
    // const displayName = data.displayName;
    function getDisplayName() {
      displayName.value = userStore.getDisplayName;
      console.log("display name: " + displayName.value);
      // data = userStore.getData();
      // data.then((resolvedData) => {
      //   console.log(resolvedData?.displayName);
      //   displayName.value = resolvedData?.displayName || 'Not Logged In'; // Set the display name or a default
      //   // return resolvedData?.displayName;
      // });
    } 


    useColorMode().preference = 'dark'; 
    type Theme = 'light' | 'dark';

    //check if user is signed in
    function isUserSignedIn() {
      return useCurrentUser().value != null;
    }

    function logOut() {
      if (auth) {
        signOut(auth);
      }
      console.log('User signed out');
      // console.log(useCurrentUser().value);
      // console.log(data);
    }


    // const setColorTheme = (newTheme: Theme) => {
    // useColorMode().preference = newTheme;
    // themeDropdownOpen.value = false;
    // };

    // const toggleThemeDropdown = () => {
    // themeDropdownOpen.value = !themeDropdownOpen.value;
    // };
    
    // import { computed, defineProps } from 'vue';

    // Define the 'user' prop expected from the parent component
    // const props = defineProps({
    //   user: Object
    // });

    // import { watchEffect } from 'vue';

    // watchEffect(() => {
    //   console.log('User:', props.user);
    // });


    // Computed property to determine if the user is signed in
    // const isUserSignedIn = computed(() => !!props.user);


</script>

<style lang="scss" scoped>
  .stickTop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }

  //768px is the breakpoint for md
  @media (max-width: 768px) {
    .mobileoff {
        display: none;
    }
  }
  @media (min-width: 768px) {
    .mobileon {
        display: none;
    }
  }
</style>