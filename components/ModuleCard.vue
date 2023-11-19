<template>
  <NuxtLink v-bind:to="to">
    <div class="card">
      <!-- <img v-bind:src="product.image" alt="product thumbnail" class="thumb"> -->
      <p class="Heading3 mx-4 my-6">Testing</p>
      <p class="bodyText m-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, nisi consectetur? Eligendi perspiciatis perferendis natus reiciendis modi labore totam nulla.</p>
      <!-- <NuxtLink v-bind:to="to">
        <p class="btn my-4">View Details</p>
      </NuxtLink> -->
    </div>
  </NuxtLink>
</template>

<script setup>
    const { to } = defineProps(['to'])
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>
