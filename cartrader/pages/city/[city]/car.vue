<script setup>
const route = useRoute()
const { toTitleCase } = useUtilities()
useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`
})
definePageMeta({
    layout: "custom"
})

</script>
<template>
    <div>
        <!-- CARS PAGE -->
        <div class="mt-32 flex">
            <!-- CAR SIDE BAR -->
            <CarSideBar />
            <!-- CAR SIDE BAR -->
            <NuxtPage />
        </div>

        <!-- CARS PAGE -->

    </div>
</template>