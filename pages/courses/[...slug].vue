<template>
    <div class="my-8 flex flex-col items-center">
      <div class="text-center"> <!-- Center the text within this container -->
        <p class="Heading2 my-4">Blog Post</p>
        <p class="bodyText">By me</p>
      </div>
  
      <div class="my-10 flex flex-col items-start"> <!-- Align items to the start (left) -->
        <AppButton buttonStyle="minor" to="/courses" class="my-6">Back</AppButton>
        <main class="prose dark:prose-invert">
          <ContentDoc />
        </main>
      </div>
    </div>
  </template>
  