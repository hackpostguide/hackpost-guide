
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
          <li><AppButton to="/courses" buttonStyle="transparent">Modules</AppButton></li>
          <li><AppButton to="/login" buttonStyle="transparent">About</AppButton></li>
          <!-- Will implement firebase sign-in later -->
          <li><AppButton to="/signup" class="btn">Sign Up</AppButton></li>
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