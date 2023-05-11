<script setup lang="ts">

const { isDarkMode } = useDarkMode()
</script>
<template>
  {{ isDarkMode }}
  <div>
    <Nav />
    <Heading />
    <Cards />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Georgia;
}
</style>
