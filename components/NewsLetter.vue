<template>
    <div>
        <Vueform ref="form$" validate-on="step">
            <TextElement
              name="email"
              input-type="email"
              :rules="[
                'nullable',
                'email',
              ]"
              :columns="{
                container: 9,
              }"
              placeholder="Your email"

              :messages="{
                email: 'Please fill in a valid email address'
              }"
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

<script>
import { ref, onMounted } from 'vue'

export default {
  setup(props, context) {
    const form$ = ref(null)

    return {
      form$
    }
  }
}
    
</script>

<style scoped>

</style>