<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Mobile menu button -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Icon :name="open ? 'octicon:x-12' : 'fa6-solid:bars'" class="block w-6 h-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div class="flex items-center flex-shrink-0">
              <NuxtLink to="/" class="flex items-center">
                <Logos-SvgIcon iconWidth="24" iconHeight="24" />
                <p class="px-3">
                  <span class="font-bold text-white">HackPost</span> Guide
                </p>
              </NuxtLink>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <AppButton v-for="item in navigation" :key="item.name" :to="item.href" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{ item.name }}</AppButton>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- Add any buttons or user profile dropdown here -->
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="AppButton" :to="item.href" class="block text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
  import { useUserStore } from '~/stores/user';
  
  const userStore = useUserStore();
  const displayName = computed(() => userStore.displayName ? userStore.displayName : 'Sign In');
  
  const navigation = [
    { name: 'Modules', href: '/modules' },
    { name: 'About', href: '/about' },
    // Add more navigation items as needed
  ];
  
  function isUserSignedIn() {
    return userStore.currentUser != null;
  }
  
  // Additional script logic
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  