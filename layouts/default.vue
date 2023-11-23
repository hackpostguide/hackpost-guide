<template> <!--Default layout, will always apply unless another layout overrides it-->
    <div class="">
      
      <Navbar />

      <div class="py-10 mt-11" :style="{ background: 'var(--background)' }">
          <slot /> <!--This is where the page content goes-->
      </div>

      <Footer />
      
    </div>
  </template>
  
  <style scoped>
    /* .router-link-exact-active {
      color: #12b488;
    } */
    body {
        min-height: 100vh; /* Make sure the body covers the entire viewport height */
        display: flex;
        flex-direction: column;
    }
    
    .content {
        flex-grow: 1; /* Allow content to expand and push the footer down */
    }
</style>