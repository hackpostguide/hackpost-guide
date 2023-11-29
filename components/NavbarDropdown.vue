<template>
    <ul class="flex gap-9">
        <div class="dropdown">
            <li> 
                <Icon name="uil:bars" class="h-[24px] w-[24px]" @click="toggle"/>
            </li>
            <li v-if="active" :class="{'active-link': active}"><AppLink to="/courses">Modules</AppLink></li>
            <li v-if="active" :class="{'active-link': active}"><AppLink to="/about">About</AppLink></li>
            <li v-if="active" :class="{'active-link': active}"><AppLink to="/signup">Sign Up</AppLink></li>
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

.active-link {
    // Apply padding and text alignment when active
    padding: 5px;
    text-align: left;
}
</style>
