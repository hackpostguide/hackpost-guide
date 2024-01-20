<template>
    <div>
        <Vueform ref="form$" @submit="handleSubmit">
            <TextElement
              name="email"
              input-type="email"
              :columns="{ container: 9 }"
              placeholder="Your email"
            />
            <ButtonElement
              name="submit"
              button-label="Submit"
              :submits="true"
              :columns="{ container: 3 }"
            />
        </Vueform>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props, context) {
    const form$ = ref(null)

    onMounted(() => {
      form$.value.messageBag.clear()
    })

    const handleSubmit = () => {
      form$.value.messageBag.clear()
      const email = form$.value.data.email;
      console.log(validateEmail(email));
      if (!validateEmail(email)) {
        form$.value.messageBag.append('Please enter a valid email address.')
      } else {
        form$.value.messageBag.clear()
        // Proceed with form submission logic (e.g., send data to Firestore)
      }
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    return {
      form$,
      handleSubmit
    }
  }
}
</script>
