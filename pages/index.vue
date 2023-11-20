  <template>
    <!--Hero page-->
    <div class="grid grid-cols-12">

      <div class="col-start-0 col-span-12 h-screen flex flex-col justify-center items-center">
        <div class="p-5">
          <h1 class="Heading1 text-center">
            Learn. <span> Build. </span>  Empower.
          </h1>
        </div>
        <div class="flex items-center justify-center p-5 mb-5">
          <h3 class="text-2xl md:text-2xl lg:text-3xl font-semibold text-center dark:text-gray-400">
            A repository of <span>high-quality resources</span> to help you leverage the power of AI. 
            <br>
            <span>Free.</span> <span>Community Driven.</span> 
          </h3>
        </div>

        <!--Buttons in hero page-->
        <div class="flex items-center justify-center">
          <AppButton buttonStyle="major" to="/courses" class="mx-2">Get Started</AppButton>
          <AppButton buttonStyle="minor" to="/" class="mx-2">Github</AppButton>
        </div>
      </div>

      <!--Second page: Why choose us-->
      <div class="col-start-0 col-span-12 md:col-span-10 p-10">
        <h2 class="Heading2 p-5">Why?</h2>
        <h3 class="bodyText p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat eos voluptas ut eligendi aspernatur dolorem harum minima facilis expedita?</h3>
      </div>
      <div class="col-start-0 col-span-12 md:col-start-7 md:col-span-6 p-10">
        <h2 class="Heading2 md:text-right p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, distinctio.</h2>
        <h3 class="bodyText md:text-right p-5">That's why we're here to help!</h3>
        <div class="flex items-center justify-end p-5">
          <AppButton buttonStyle="major" to="/courses">Get Started</AppButton>
        </div>
      </div>

      <!--Third page: What we offer-->
      <div class="col-start-0 col-span-12 p-10 h-screen mt-12">
        <div class="flex items-center justify-center p-5">
          <h2 class="Heading2">Supercharge Deez Nuts.</h2>
        </div>
        <div class="flex items-center justify-center p-5">
          <h3 class="bodyText">Check out our nuts!</h3>
        </div>
        <!--Grid with different courses for user to select-->
        <div>
          <!--Place sample courses here-->
        </div>
      </div>

      <!--Fourth page: Call to action-->
      <div class="col-start-0 col-span-12 p-10 h-full">
        <div class="flex items-center justify-center p-5">
          <h2 class="Heading2">What are you waiting for?</h2>
        </div>
        <div class="flex items-center justify-center p-5">
          <h3 class="bodyText">Let's get started!</h3>
        </div>
        <div class="flex items-center justify-center">
          <AppButton buttonStyle="major" to="/courses" class="mx-2">Get Started</AppButton>
        </div>
      </div>
    </div>  
  </template>
  
  
  <style lang="css">

    [class*="col-"] {
      /* float: left; */
      /* padding: 15px; */
      /* border: 1px solid red; */
    }

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer utilities {
        .pink-gradient {
        background: linear-gradient(90deg, #FC5EFF 0%, #B635F3 57.99%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent; /* replaced -webkit-text-fill-color with color */
        }
        .font-arimo {
        font-family: 'Arimo', sans-serif;
        }
    }
  </style>
  