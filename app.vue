

<template>

    <div class="flex flex-col h-screen">
      
      <!-- <Navbar1 :user="getCurrentUser()" /> -->
      <Navbar />

      <div class="flex-grow p-1 sm:p-10 mt-11" :style="{ background: 'var(--background)' }">
          <!-- <Login /> -->
          <NuxtPage />
          <!-- <Vueform>
            <TextElement name="hello_world" label="Hello" placeholder="World" />
          </Vueform> -->
      </div>

      <Footer />
      
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>