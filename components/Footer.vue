<template>
    <footer class="bg-white dark:bg-black text-black dark:text-white py-4">

        <!--Need to fix mobile look for footer-->
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-16 lg:px-8 xl:pt-32">
            <div class="xl:grid xl:grid-cols-4 xl:gap-8">
                <!-- <img loading="lazy" width="256" height="183" class="hidden xl:block xl:pr-16"
                src="assets\ImaginAI-Logo.svg" alt="">
                <img loading="lazy" width="256" height="96" class="md:mx-auto xl:hidden" src="assets\ImaginAI-Logo.svg"
                alt=""> -->
                <Logos-SvgIcon iconWidth="256" iconHeight="96" />
                <div class="grid grid-cols-2 gap-8 xl:col-span-3 pt-16 xl:pt-0">
                <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                    <h3 class="text-sm font-semibold leading-6">Content</h3>
                    <ul role="list" class="mt-6 space-y-4">
                        <li v-for="item in navigation.content" :key="item.name">
                        <AppLink :to="item.to" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}
                        </AppLink>
                        </li>
                    </ul>
                    </div>
                    <div class="mt-10 md:mt-0">
                    <h3 class="text-sm font-semibold leading-6">General</h3>
                    <ul role="list" class="mt-6 space-y-4">
                        <li v-for="item in navigation.general" :key="item.name">
                        <AppLink :href="item.to" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}
                        </AppLink>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div class="mt-10 md:mt-0">
                    <h3 class="text-sm font-semibold leading-6">Contact</h3>
                    <ul role="list" class="mt-6 space-y-4">
                        <li v-for="item in navigation.contact" :key="item.name">
                        <AppLink :to="item.to" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}
                        </AppLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!--Fix margins + alignment later -->
        <div class="m-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
            <div class="flex space-x-6 md:order-2">
            <a target="_blank" v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400"
                :class="item.hoverClass">
                <span class="sr-only">{{ item.name }}</span>
                <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
            </div>
            <!-- Update license and copyright later -->
            <p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {{ new Date().getFullYear() }} HackPost.guide, All rights reserved.
            &bull;
            Written content licensed under
            <AppLink class="inline-block underline hover:no-underline"
                to="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC-BY-NC-SA 4.0
            </AppLink>
            &bull;
            </p>
        </div>

    </footer>
</template>

<script setup lang="ts">
/*Navigation links: need to update links later*/
const navigation = {
    content: [
        { name: 'Modules', to: '/courses' },
        { name: 'About', to: '/' },
        { name: 'Contact', to: '/' },
    ],
    general: [
        { name: 'Login', to: '/' },
        { name: 'Sign Up', to: '/' },
    ],
    social: [
    {
      name: 'X',
      href: SOCIALS.twitter,
      icon: 'ri:twitter-x-fill',
      hoverClass: 'hover:text-blue-400'
    },
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
    {
      name: 'Instagram',
      href: SOCIALS.instagram,
      icon: 'mdi:instagram',
      hoverClass: 'hover:text-pink-500'
    },
    ],
    contact: [
        { name: 'Email', to: '/' },
        { name: 'Phone', to: '/' },
    ],
}

/*
Add a newsletter later
 */
</script>

<style lang="scss" scoped>
    [class*="col-"] {
        /* border: 1px solid red; */
        border-width: 1px;
    }
</style>