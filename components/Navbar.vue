<template>
    <header class="stickTop shadow-sm bg-gray-100 dark:bg-neutral-950">
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
  .stickTop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
</style>