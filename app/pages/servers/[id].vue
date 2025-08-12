<script setup lang="ts">
const route = useRoute()
const { data: servers } = await useFetch('/api/servers')

// Находим сервер по customId
const server = computed(() => servers.value?.find(s => s.customId === route.params.id))
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div v-if="!server">Сервер не найден</div>
    <div v-else>
      <h1 class="text-3xl font-bold mb-4">{{ server.name }}</h1>
      <p class="mb-6">{{ server.description }}</p>
      <p>IP: {{ server.ip }}:{{ server.port }}</p>
      <p>Онлайн: {{ server.online }}/{{ server.maxPlayers }}</p>
    </div>
  </div>
</template>
