<template>
  <header class="stickTop px-10 shadow-sm bg-white dark:bg-black">
    <nav class="py-4 grid grid-cols-12 dark:text-white text-black">
      <div class="col-start-2 col-end-5">
        <NuxtLink to="/" class="flex items-left">
          <Logos-SvgIcon iconWidth="24" iconHeight="24" />
          <p class="px-3">
            <span class="font-bold">HackPost</span> Guide
          </p>
        </NuxtLink>
      </div>
      <!-- Need to fix: turn into a toggle menu for mobile screens  -->
      <div class="col-start-8 col-end-11 flex items-center justify-end">
        <ul class="flex gap-9">
          <li><NuxtLink to="/courses">Modules</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <!-- Will implement firebase sign-in later -->
          <li><NuxtLink to="/signup" class="btn">Sign Up</NuxtLink></li>
        </ul>
      </div>
      <div class="col-start-11 col-end-12 flex items-center justify-end">
        <ModeSwitch class=" dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
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
    themeDropdownOpen.value = false;
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