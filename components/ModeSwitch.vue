<!--From https://github.com/adityar15/nuxt3socket-->
<template>
    <div>
      <Switch
        v-model="enabled"
        v-if="enabled !== null"
        @click="toggleTheme"
        :class="enabled ? 'bg-black' : 'bg-orange-50'"
        class="relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="sr-only">Mode setting</span>
        <!-- Flex container to center the icon -->
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-4' : '-translate-x-4'"
          class="pointer-events-none flex items-center justify-center h-full w-full transform transition duration-200 ease-in-out"
        >
          <!-- Conditionally render the moon or sun icon -->
          <Icon name="uil:moon" v-if="enabled" class="h-[24px] w-[24px]" color="white" />
          <Icon name="uil:sun" v-else class="h-[24px] w-[24px]" color="black" />
        </span>
      </Switch>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { Switch } from "@headlessui/vue"
//   import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid"
  
  useHead({
       script: [ {children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.setAttribute("data-theme", "dark")
      } else {
        document.documentElement.removeAttribute("data-theme")
      }`} ]
  })
  
const { enabled, toggleTheme } = useTheme() 
  
 


function useTheme() {
    const enabled = useState<boolean | null>('theme', ()=>null)

    onMounted(()=>{
        enabled.value = localStorage.getItem("theme") === "dark" ? true : false
    })


    const toggleTheme = () => {
        enabled.value = !enabled.value
        localStorage.setItem("theme", enabled.value ? "dark" : "light")
        setTheme()
    }

    function setTheme() {
        const theme = localStorage.getItem("theme")
        if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.setAttribute("data-theme", "dark")
        //   enabled.value = true
        } else {
        document.documentElement.removeAttribute("data-theme")
        //   enabled.value = false
        }
    }

    return {
        enabled,
        toggleTheme,
        setTheme,
    }
}

</script>