<template>
    <!-- <footer class="bg-white dark:bg-black text-black dark:text-white py-4">
      <div class="pb-8 pt-8 sm:pt-16 xl:pt-32 grid grid-cols-12 gap-4">
        <div class="col-span-12 xl:col-span-3">
          <Logos-SvgIcon iconWidth="256" iconHeight="96" />
        </div>
        <div class="col-span-6 md:col-span-3 xl:col-span-2">
          <h3 class="text-sm font-semibold leading-6">Content</h3>
          <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.content" :key="item.name">
              <AppLink :to="item.to" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}
              </AppLink>
              </li>
          </ul>
        </div>
        <div class="col-span-6 md:col-span-3 xl:col-span-2">
          <h3 class="text-sm font-semibold leading-6">General</h3>
          <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.general" :key="item.name">
              <AppLink :href="item.to" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}
              </AppLink>
              </li>
          </ul>
        </div>
      </div>
    </footer> -->

    <footer class="bg-white dark:bg-black text-black dark:text-white p-1 sm:p-10 grid grid-cols-12">

      <!-- Insert newsletter here -->
      <div class="col-start-2 col-end-12">
      <div class="my-20 border-t border-white/20 pt-8 mt-1 lg:flex lg:items-center lg:justify-between">
          <div class="flex space-x-6 md:order-2">
          <a target="_blank" v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-600 dark:text-gray-400"
              :class="item.hoverClass">
              <span class="sr-only">{{ item.name }}</span>
              <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
          </div>
          <p class="mt-8 text-sm leading-6 text-gray-800 dark:text-gray-400 md:order-1 md:mt-0">
          &copy; 2023 - {{ new Date().getFullYear() }} HackPost Guide, All rights reserved.
          &bull;
          Licensed under
          <AppLink class="inline-block underline hover:no-underline"
              to="https://www.gnu.org/licenses/gpl-3.0.en.html">
              GNU General Public License v3.0
          </AppLink>
          &bull;
          </p>
      </div>
      </div>

    </footer>
</template>

<script setup lang="ts">
/*Navigation links: need to update links later*/
const navigation = {
    // content: [
    //     { name: 'Modules', to: '/courses' },
    //     { name: 'About', to: '/' },
    //     { name: 'Contact', to: '/' },
    // ],
    // general: [
    //     { name: 'Login', to: '/' },
    //     { name: 'Sign Up', to: '/' },
    // ],
    social: [
    {
      name: 'Email',
      href: SOCIALS.email,
      icon: 'mdi:email',
      hoverClass: 'hover:text-red-500'
    },
    // {
    //   name: 'X',
    //   href: SOCIALS.twitter,
    //   icon: 'ri:twitter-x-fill',
    //   hoverClass: 'hover:text-blue-400'
    // },
    {
      name: 'GitHub',
      href: SOCIALS.github,
      icon: 'mdi:github',
      hoverClass: 'hover:text-gray-200'
    },
    {
      name: 'YouTube',
      href: SOCIALS.youtube,
      icon: 'mdi:youtube',
      hoverClass: 'hover:text-red-500'
    },
    {
      name: 'Discord',
      href: SOCIALS.discord,
      icon: 'mdi:discord',
      hoverClass: 'hover:text-blue-500'
    },
    // {
    //   name: 'Instagram',
    //   href: SOCIALS.instagram,
    //   icon: 'mdi:instagram',
    //   hoverClass: 'hover:text-pink-500'
    // },
    ],
    contact: [
        { name: 'Email', to: '/' },
        { name: 'Phone', to: '/' },
    ],
}

</script>

<style lang="scss" scoped>
    // [class*="col-"] {
        /* border: 1px solid red; */
        //border-width: 1px;
    // }
</style>