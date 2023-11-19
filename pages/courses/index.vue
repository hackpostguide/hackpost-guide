<template>
    <div class="m-auto">

        <div class="py-10">
            <p class="Heading2 font-bold mb-4">Header Text</p>
            <p class="bodyText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea dolorum a saepe porro consectetur sit! Laudantium maxime ullam molestias.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            <div class="col-span-1 ">
                <ModuleCard to="/courses/test" />
            </div> 
            <div class="col-span-1 ">
                <ModuleCard to="/courses/tailwindtest"/>
            </div> 
            <div class="col-span-1 ">
                <ModuleCard to="/courses/python"/>
            </div> 

        </div>
    </div>


</template>

<script setup>

    

</script>

<style lang="css" scoped>
   /* [class*="col-"] {
      /* float: left; */
      /* padding: 15px; 
      border: 1px solid red;
    } */

</style>