<!--From https://github.com/Atinux/content-wind/blob/main/components/ColorModeSwitch.vue-->
<template>
    <div>
      <button aria-label="Color Mode" class="inline-block w-5" @click="onClick">
        <ColorScheme placeholder="...">
          <template v-if="colorMode.value === 'dark'">
            <Icon name="uil:moon" class="h-[24px] w-[24px]" color="white" />
            <span class="sr-only">Dark Mode</span>
          </template>
          <template v-else>
            <Icon name="uil:sun" class="h-[24px] w-[24px]" color="black" />
            <span class="sr-only">Light Mode</span>
          </template>
        </ColorScheme>
      </button>
    </div>
</template>
  
  
<script setup lang="ts">
  const colorMode = useColorMode()
  const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>