<template>
<router-link :to="props.to" :class="buttonClass">
    <slot />
</router-link>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

// Define button styles
const props = withDefaults(defineProps<{
    buttonStyle?: 'major' | 'minor';
    to?: string | RouteRecordRaw['path'];
}>(), {
    buttonStyle: 'major',
    to: '/',
});

// Compute the class based on the button style prop
const buttonClass = computed(() => {
return props.buttonStyle === 'major' ? 'btn' : 'btn-minor';
});
</script>