<template> <!--Default layout, will always apply unless another layout overrides it-->
    <div class="flex flex-col h-screen">
      
      <Navbar />

      <div class="flex-grow p-1 sm:p-10 mt-11" :style="{ background: 'var(--background)' }">
          <slot /> <!--This is where the page content goes-->
      </div>

      <Footer />
      
    </div>
  </template>
  
  <style scoped>

</style>