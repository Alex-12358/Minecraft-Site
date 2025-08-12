<script setup lang="ts">
const { data: servers, pending, error } = await useFetch('/api/servers')
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-extrabold mb-6 bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] bg-clip-text text-transparent">
      Серверы Elderveil
    </h1>

    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>

    <div v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <NuxtLink
        v-for="server in servers"
        :key="server.customId"
        :to="`/server/${server.customId}`"
        class="p-5 bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg backdrop-blur-md hover:shadow-xl transition block"
      >
        <h2 class="font-bold text-lg text-gray-900 dark:text-white">{{ server.name }}</h2>

        <!-- Полоска прогресса -->
        <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden mt-2">
          <div
            class="h-3 bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] transition-all duration-500"
            :style="{ width: server.maxPlayers > 0 ? `${(server.online / server.maxPlayers) * 100}%` : '0%' }"
          ></div>
        </div>

        <!-- Текст онлайна -->
        <p
          v-if="server.maxPlayers > 0"
          class="mt-1 text-sm text-gray-700 dark:text-gray-300"
        >
          {{ server.online }}/{{ server.maxPlayers }} игроков
        </p>
        <p
          v-else
          class="mt-1 text-sm text-gray-500 italic"
        >
          Нет данных об онлайне
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
