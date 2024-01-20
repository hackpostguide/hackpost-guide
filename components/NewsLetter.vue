<template>
    <div>
        <Vueform ref="form$">
            <TextElement
              name="email"
              input-type="email"
              :rules="[
                'required',
                'email',
              ]"
              :columns="{
                container: 9,
              }"
              placeholder="Your email"
            />
            <ButtonElement
              name="submit"
              button-label="Submit"
              :submits="true"
              :columns="{
                container: 3,
              }"
            />
          </Vueform>

    </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped>

</style>