  <template>
    <!--Hero page-->
    <div class="grid grid-cols-12">

      <div class="col-start-2 col-end-12 h-screen flex flex-col justify-center items-center">
        <div class="p-5">
          <h1 class="Heading1 text-center">
            Learn. <span class="sunset-gradient"> Build. </span> 
            <br>Empower.
          </h1>
        </div>
        <div class="flex items-center justify-center p-5 mb-5">
          <h3 class="text-2xl md:text-2xl lg:text-3xl font-semibold text-center dark:text-gray-400">
            The premier resource hub for <span class="sunset-gradient">hackathon developers</span>.
            <br>
            <span>Free.</span> <span>Open Source.</span> <span>Community Driven.</span> 
          </h3>
        </div>

        <!--Buttons in hero page-->
        <div class="flex items-center justify-center">
          <AppButton buttonStyle="major" to="/courses" class="mx-2">Get Started</AppButton>
          <AppButton buttonStyle="minor" to="/" class="mx-2">Github</AppButton>
        </div>
      </div>

      <!--Second page: who we are-->
      <div class="col-start-2 col-end-12 md:col-end-10 mt-12">
        <h2 class="Heading2 ">For the community, by the community.</h2>
        <h3 class="bodyText ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat eos voluptas ut eligendi aspernatur dolorem harum minima facilis expedita?</h3>
      </div>
      <div class="col-start-2 col-end-12 md:col-start-5 mt-12">
        <h2 class="Heading2 md:text-right ">Designed for hackathon participants.</h2>
        <h3 class="bodyText md:text-right ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum?</h3>
        <div class="flex items-center justify-end py-5">
          <AppButton buttonStyle="major" to="/courses">Get Started</AppButton>
        </div>
      </div>

      <!--Third page: Entice users to explore-->
      <div class="col-start-2 col-end-12 py-10 h-screen mt-24">
        <div class="flex items-center justify-left md:justify-center ">
          <h2 class="Heading2">Supercharge your hacking skills.</h2>
        </div>
        <div class="flex items-center justify-left md:justify-center ">
          <h3 class="bodyText">Check out what others have made so far!</h3>
        </div>
        <!--Grid with different courses for user to select-->
        <div>
          <!--Place sample courses here-->
        </div>
      </div>

      <!--Add sponsor section later-->

      <!--Last page: Call to action-->
      <div class="col-start-2 col-end-12 py-10 h-full">
        <div class="flex items-center justify-center ">
          <h2 class="Heading2">What are you waiting for?</h2>
        </div>
        <div class="flex items-center justify-center ">
          <h3 class="bodyText">Let's get started!</h3>
        </div>
        <div class="flex items-center justify-center">
          <AppButton buttonStyle="major" to="/courses" class="mx-2">Get Started</AppButton>
        </div>
      </div>
    </div>  
  </template>
  
  <script setup>
  
    //metadata for SEO
    useHead({
        title: 'HackPost',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'HackPost is a community-driven platform for high-quality resources to help you leverage the power of AI.'
            }
        ]
    });


    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      // apiKey: 'process.env.FIREBASE_API_KEY',
      // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      // projectId: process.env.FIREBASE_PROJECT_ID,
      // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      // appId: process.env.FIREBASE_APP_ID,
      // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      console.log(firebaseConfig.apiKey);
    
  </script>
  
  <style lang="css">

    /* For debugging purposes:  */
    /* [class*="col-"] { */
      /* border-width: 1px; */
    /* } */
    /* .grid { */
      /* border: 1px solid blue; */
    /* } */

  </style>
  