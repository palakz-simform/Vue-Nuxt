<script setup>
const route = useRoute()
const { toTitleCase } = useUtilities()
useHead({
    title: toTitleCase(route.params.name)
})
definePageMeta({
    layout: "custom",
})

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