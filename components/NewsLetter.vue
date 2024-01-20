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
import { collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';

const db = useFirestore();

export default {
  setup() {
    const form$ = ref(null);

    const handleSubmit = async () => {
      form$.value.messageBag.clear();
      const email = form$.value.data.email;

      if (!validateEmail(email)) {
        form$.value.messageBag.append('Please enter a valid email address.');
        return;
      }

      const newsletterRef = doc(db, "newsletter", email);
      const docSnap = await getDoc(newsletterRef);

      if (docSnap.exists()) {
        form$.value.messageBag.append('This email is already subscribed.');
      } else {
        try {
          await setDoc(newsletterRef, { email: email });
          console.log("Document written with email: ", email);
          form$.value.messageBag.append(email + ' has successfully been added to our mailing list!', 'message');
        } catch (e) {
          console.error("Error adding document: ", e);
          form$.value.messageBag.append(e, 'error');
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
