<script setup>
const route = useRoute()
useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`
})
definePageMeta({
    layout: "custom"
})
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
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