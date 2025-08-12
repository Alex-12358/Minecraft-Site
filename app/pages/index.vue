<template>
  <div>
    <p class="text-mechRed">Пример красного текста</p>
    раз два три 
    <p class="bg-mech-gradient bg-clip-text text-transparent">
      Градиентный текст
    </p>
    четыри пять шесть 
  </div>
</template>

<script setup lang="ts">
const { data: servers } = await useFetch('/api/servers')
console.log(servers.value)
</script>
