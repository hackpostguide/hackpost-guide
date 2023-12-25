<template>

    <div class="flex flex-col h-screen">
      
      <Navbar />

      <div class="flex-grow p-1 sm:p-10 mt-11" :style="{ background: 'var(--background)' }">
          <Login />
          <NuxtPage /> <!--This is where the page content goes-->
      </div>

      <Footer />
      
    </div>
</template>

<script lang="ts" setup>
    
</script>

<style lang="scss" scoped>

</style>