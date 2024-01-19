<template>
    <Disclosure as="nav" class="stickTop bg-white dark:bg-black px-1 sm:px-10 shadow-sm" v-slot="{ open }">
      <nav class="grid grid-cols-12 py-6 dark:text-white text-black">
        <!-- Logo and Title -->
        <div class="col-start-2 col-end-9 md:col-end-6 flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <Logos-SvgIcon iconWidth="24" iconHeight="24" />
            <p class="px-3">
              <span class="font-bold">HackPost</span> Guide
            </p>
          </NuxtLink>
        </div>
  
        <!-- Navigation Links -->
        <div class="hidden lg:block col-start-6 col-end-11">
        <div class="flex items-center justify-end">
          <ul class="flex gap-9">
            <li v-for="item in filteredNavigation" :key="item.name">
              <AppButton :to="item.href" buttonStyle="transparent">{{ item.name }}</AppButton>
            </li>
            <!-- <li>
              <AppButton v-if="isUserSignedIn()" @click="userStore.signOut()" class="btn">Sign Out</AppButton>
              <AppButton v-else :to="'/signup1'" class="btn">{{ displayName }}</AppButton>
            </li> -->
          </ul>
        </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <!-- TODO: fix the navbar height changing in different screen sizes -->
        <div class="col-start-10 col-end-11 flex items-center justify-end lg:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700 dark:focus:ring-gray-300">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Icon name="fa6-solid:bars" v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <Icon name="octicon:x-12" v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
  
        <!-- Light/Dark Mode Switch -->
        <div class="col-start-11 col-end-12 flex items-center justify-end">
          <ModeSwitch class="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-500" />
        </div>
      </nav>

      <!-- Mobile Navigation Links -->
    <DisclosurePanel v-if="open" class="lg:hidden grid grid-cols-12 ">
    <ul class="col-start-2 col-end-12 space-y-2 py-3"> 
        <li v-for="item in filteredNavigation" :key="item.name">
            <AppButton :to="item.href" class="block text-left w-full">{{ item.name }}</AppButton>
        </li>
        <li>
        <!-- <AppButton v-if="isUserSignedIn()" @click="userStore.signOut()" class="block text-left w-full">Sign Out</AppButton>
        <AppButton v-else :to="'/signup1'" class="block text-left w-full">{{ displayName }}</AppButton> -->
        </li>
    </ul>
    </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { Disclosure, DisclosureButton } from '@headlessui/vue';
  import { useUserStore } from '~/stores/user';
  
  const userStore = useUserStore();
  const displayName = computed(() => userStore.displayName ? 'Sign Out' : 'Sign In');
  
  const navigation = [
    { name: 'Modules', href: '/community' },
    { name: 'About', href: '/about' },
    // Add other non-authentication-related links here
  ];
  
  const filteredNavigation = computed(() => {
    return isUserSignedIn() ? navigation : navigation.filter(item => item.name !== 'PrivateLink'); // Filter out links not for unauthenticated users
  });
  
  function isUserSignedIn() {
    return userStore.currentUser != null;
  }
  </script>
  <style scoped>
  .stickTop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
  
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
  