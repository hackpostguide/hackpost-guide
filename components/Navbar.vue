<template>
    <header class="shadow-sm bg-gray-100 dark:bg-neutral-950">
        <nav class="container mx-auto py-4 flex justify-between items-end dark:text-white text-black">
          <NuxtLink to="/" class="font-bold pl-10">
            <div class="flex items-center">
              <!-- <Logos-SvgIcon v-if="$colorMode.value === 'dark'" iconWidth="24" iconHeight="24" />
              <Logos-SvgIcon-Dark v-else iconWidth="24" iconHeight="24" /> -->
              <Logos-SvgIcon iconWidth="24" iconHeight="24" />
              <p class="px-3">ImaginAI</p>
            </div>
          </NuxtLink>
          <div class="flex items-center">
            <ul class="flex gap-4 ml-auto">
              <li><NuxtLink to="/courses">Modules</NuxtLink></li>
              <li><NuxtLink to="/about">About</NuxtLink></li>
              <!-- <li><NuxtLink to="/" class="btn">Sign Up</NuxtLink></li> -->
            </ul>
            <!-- <div class="flex pr-10">
                Theme dropdown 
              <div v-if="themeDropdownOpen" class="absolute right-0 mt-2 bg-white dark:bg-slate-700 border dark:border-gray-800 rounded-lg shadow-lg" @click.stop="">
                <ul class="py-2">
                  <li><button @click="setColorTheme('light')" class="w-full px-4 py-2 text-left">Light Mode</button></li>
                  <li><button @click="setColorTheme('dark')" class="w-full px-4 py-2 text-left">Dark Mode</button></li>
                  <li><button @click="setColorTheme('system')" class="w-full px-4 py-2 text-left">System Mode</button></li> 
                </ul>
              </div>
              <button @click="toggleThemeDropdown" class="ml-5">
                <svg
                  v-if="$colorMode.value == 'dark'"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d=" M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div> -->

            <ModeSwitch class="flex mx-5 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
          </div>

        </nav>
      </header>
</template>

<script setup lang="ts" async>

    useColorMode().preference = 'dark';
    type Theme = 'light' | 'dark';

    const themeDropdownOpen = ref(false);
    const themeDropdownContainer = ref<HTMLElement | null>(null);

    const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
    themeDropdownOpen.value = false; // Close the dropdown after selecting a theme
    };

    const toggleThemeDropdown = () => {
    themeDropdownOpen.value = !themeDropdownOpen.value;
    };


    


</script>

<style lang="scss" scoped>

</style>