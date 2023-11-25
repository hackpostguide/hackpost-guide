<template>

    <div class="flex flex-col h-screen">
        <Navbar />

            <div class="flex-grow p-10 mt-11" :style="{ background: 'var(--background)' }">
                <div class="grid grid-cols-12 h-">
                    <div class="col-start-2 col-end-12">
                        <p class="mt-10 Heading2 font-bold">Error {{ statusCode }}</p>
                        <p class="mt-7 bodyText">{{ message }}</p>
                        <button class="btn my-7" @click="handleClearError">Go Home...</button>
                    </div>
                </div>
            </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        error: unknown
    }>()

    const statusCode = computed(() => {
        if(typeof props.error !== 'object' || props.error === null) {
            return 500
        }
        if('statusCode' in props.error) {
            return props.error.statusCode 
        }
        return 500
    })

    const message = computed(() => {
        if(typeof props.error !== 'object' || props.error === null) {
            return 'Unknown error'
        }
        if('statusMessage' in props.error) {
            return props.error.statusMessage
        }
        if('message' in props.error) {
            return props.error.message
        }
        return 'Unknown error'
    })

    const handleClearError = () => clearError({ redirect: '/' }) //clear the error, then redirect to the home page

</script>

<style lang="scss">

</style>