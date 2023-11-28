<template>
    <ul class="flex gap-9">
        <div class="dropdown">
            <li> 
                <Icon name="uil:bars" class="h-[24px] w-[24px]" @click="toggle"/>
            </li>
            <li v-if="active"><NuxtLink to="/courses">Modules</NuxtLink></li>
            <li v-if="active"><NuxtLink to="/about">About</NuxtLink></li>
            <!-- Will implement firebase sign-in later -->
            <li v-if="active"><NuxtLink to="/signup">Sign Up</NuxtLink></li>
        </div>
    </ul>
</template>

<script>
  export default {
    data () {
      return {
        active: false
      }
    },
    methods: {
      toggle () {
        this.active = !this.active
      }
    }
  }
</script>


<style lang="scss" scoped>
    .dropdown li {
        padding: 5px;
    }
</style>