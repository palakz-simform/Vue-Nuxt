<script setup>
const route = useRoute()
useHead({
    title: toTitleCase(route.params.name)
})
definePageMeta({
    layout: "custom",
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
        <!-- CAR DETAIL PAGE -->

        <CarDetailHero />
        <CarDetailAttributes />
        <CarDetailDescription />
        <CarDetailContact />


        <!-- CAR DETAIL PAGE   -->

    </div>
</template>