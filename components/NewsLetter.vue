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
import { collection, addDoc, doc, setDoc, getDoc, writeBatch } from 'firebase/firestore';

const db = useFirestore();

export default {
  setup(props, context) {
    const form$ = ref(null)

    onMounted(() => {
    if (form$.value) {
        form$.value.messageBag.clear();
    }
    })

    const handleSubmit = async () => {
      form$.value.messageBag.clear()
      const email = form$.value.data.email;
      console.log(validateEmail(email));
      if (!validateEmail(email)) {
        form$.value.messageBag.append('Please enter a valid email address.')
      } else {
        try {
            const docRef = await addDoc(collection(db, "newsletter"), {
                email: email
            });
            console.log("Document written with ID: ", docRef.id);
            form$.value.messageBag.append(email + ' has successfully been added to our mailing list!', 'message')
        } catch (e) {
            console.error("Error adding document: ", e);
            form$.value.messageBag.append(e, 'error')
        }
        
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
