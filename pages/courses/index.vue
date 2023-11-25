<template>
    <!-- Todo: apply css grids for entire page, fix paddings/margins -->
    <div class="m-auto grid grid-cols-12">

        <div class="py-10 col-start-2 col-end-12">
            <p class="Heading2 font-bold mb-4">Header Text</p>
            <p class="bodyText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea dolorum a saepe porro consectetur sit! Laudantium maxime ullam molestias.</p>
        </div>

        <div class="col-start-2 col-end-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        <!-- <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols    -3 gap-8 mt-4"> -->
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

    useHead({
        title: 'Modules | HackPost',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Explore our modules.'
            }
        ]
    });

</script>

<style lang="css" scoped>
   /* [class*="col-"] {
      border: 1px solid red;
    } */

</style>