<script setup>
const route = useRoute()
const cars = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make
})
</script>

<template>
  <div>
    <CarCards :cars="cars" />
  </div>
</template>
