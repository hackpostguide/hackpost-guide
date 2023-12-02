<template>
    <div class="grid grid-cols-12">
    <section class="my-8 sm:my-3 col-start-2 col-end-5">
      <AppButton buttonStyle="transparent" to="/courses" class="inline-flex align-center">
          <Icon name="uil:angle-left-b" class="h-[24px] w-[24px]"/>
      </AppButton>
    </section>
      <div class="flex flex-col items-center m-8 col-start-1 col-end-12 max-w-xs sm:max-w-7xl ">
        <div class="text-center"> 
          <p class="Heading2 my-4">Blog Post</p>
          <p class="bodyText">By me</p>
        </div>
    
        <div class="my-10 flex flex-col items-start"> 

          <main class="prose dark:prose-invert">
            <ContentDoc />
          </main>
        </div>

        <div class="flex flex-col items-center">
          <p class="bodyText">Share this post!</p>
          <div class="flex gap-4">
            <AppButton buttonStyle="minor" to="/">
              <Icon name="uil:twitter" class="h-[24px] w-[24px]"/>
            </AppButton>
            <AppButton buttonStyle="minor" to="/">
              <Icon name="uil:facebook" class="h-[24px] w-[24px]"/>
            </AppButton>
            <AppButton buttonStyle="minor" to="/">
              <Icon name="uil:instagram" class="h-[24px] w-[24px]"/>
            </AppButton>
          </div>
        </div>

        <div class="flex gap-4 my-4">
          <AppButton buttonStyle="transparent" to="/courses" class="inline-flex align-center">
            <Icon name="uil:angle-left-b" class="h-[24px] w-[24px]"/>
            Previous Post
          </AppButton>
          <AppButton buttonStyle="transparent" to="/courses" class="inline-flex align-center">
            Next Post
            <Icon name="uil:angle-right-b" class="h-[24px] w-[24px]"/>
          </AppButton>
        </div>
      </div>
    </div>
  </template>

  <style scoped>

  </style>
  