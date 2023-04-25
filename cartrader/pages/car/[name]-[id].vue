<script setup>
const route = useRoute()
const { cars } = useCars()
const { toTitleCase } = useUtilities()
useHead({
    title: toTitleCase(route.params.name)
})
definePageMeta({
    layout: "custom",
})
const car = computed(() => {

    return cars.find((c) => {
        return c.id == parseInt(route.params.id)
    })
})
</script>
<template>
    <div v-if="car">
        <!-- CAR DETAIL PAGE -->

        <CarDetailHero :car="car" />
        <CarDetailAttributes :features="car.features" />
        <CarDetailDescription :description="car.description" />
        <CarDetailContact />


        <!-- CAR DETAIL PAGE   -->

    </div>
</template>