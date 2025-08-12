<script setup lang="ts">
const { data: servers, pending, error } = await useFetch('/api/servers')
console.log(servers.value)
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8" v-auto-animate>
    <h1 class="text-3xl font-extrabold mb-6 bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] bg-clip-text text-transparent">
      Серверы Mecharium
    </h1>

    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>

    <div v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="server in servers"
        :key="server.id"
        class="p-5 bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg backdrop-blur-md hover:shadow-xl transition cursor-pointer"
        @click="$router.push(`/shop/${server.id}`)"
      >
        <h2 class="font-bold text-lg text-gray-900 dark:text-white">{{ server.name }}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
          IP: {{ server.ip }}:{{ server.port }}
        </p>

        <!-- Полоска онлайн -->
        <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
          <div
            class="h-3 bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] transition-all duration-500"
            :style="{ width: `${(server.players / server.maxPlayers) * 100}%` }"
          ></div>
        </div>

        <!-- Цифры онлайн -->
        <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
          {{ server.players }}/{{ server.maxPlayers }} игроков
        </p>
      </div>
    </div>
  </div>
</template>
