<script setup>
const { cars } = useCars();
const favourite = useLocalStorage("favourite", {});
const handleFavourite = (id) => {
    if (id in favourite.value) {
        delete favourite.value[id]
    }
    else {
        favourite.value = {
            ...favourite.value,
            [id]: true,
        }

    }
}
</script>
<template>
    <div class="w-full">

        <CarCard v-for="car in cars" :key="car.id" :car="car" @favor="handleFavourite" :favored="car.id in favourite" />

    </div>
</template>