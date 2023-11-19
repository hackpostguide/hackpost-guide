<template> <!--Default layout, will always apply unless another layout overrides it-->
    <div class="flex flex-col min-h-screen">
      
      <Navbar />


      <div class="flex-grow dark:bg-neutral-900">
        <div class="m-auto py-10 px-8 md:px-24 lg:px-40">
          <slot /> <!--This is where the page content goes-->
        </div>
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