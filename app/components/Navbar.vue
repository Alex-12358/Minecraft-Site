<script setup lang="ts">
const menu = useMainMenu();
const isMobileOpen = ref(false);
const toggleMobile = () => (isMobileOpen.value = !isMobileOpen.value);
</script>

<template>
  <header class="sticky top-4 z-50" v-auto-animate>
    <div
      class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between rounded-full backdrop-blur-md bg-white/70 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700 shadow-lg"
    >
      <!-- Лого -->
      <NuxtLink
        to="/"
        class="text-2xl font-extrabold bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] bg-clip-text text-transparent hover:scale-105 hover:brightness-110 transition-transform duration-300"
      >
        Elderveil
      </NuxtLink>

      <!-- Desktop menu -->
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink
          v-for="item in menu"
          :key="item.name"
          :to="item.to"
          class="relative font-medium text-gray-700 dark:text-gray-300 hover:text-[#e43b35] dark:hover:text-[#f45729] transition-colors group"
        >
          {{ item.name }}
          <!-- Градиентная полоска -->
          <span
            class="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
          ></span>
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <ColorModeButton />

        <!-- Скачать лаунчер (desktop only) -->
        <DownloadPCButton />

        <!-- Mobile toggle -->
        <button
          class="md:hidden text-gray-600 dark:text-gray-300"
          @click="toggleMobile"
        >
          <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMobileOpen"
      class="mt-2 max-w-5xl mx-auto px-4 py-3 flex flex-col gap-4 rounded-2xl backdrop-blur-md bg-white/70 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700 shadow-lg md:hidden"
    >
      <NuxtLink
        v-for="item in menu"
        :key="item.name"
        :to="item.to"
        class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
      >
        {{ item.name }}
      </NuxtLink>

      <!-- Скачать лаунчер (mobile) -->
      <NuxtLink to="/launcher">
        <button
          class="group w-full inline-flex items-center gap-2 rounded-md px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
        >
          <UIcon
            name="i-lucide-download"
            class="w-5 h-5 transition-transform duration-300 group-hover:rotate-[-15deg]"
          />
          <span class="font-semibold">Скачать лаунчер</span>
        </button>
      </NuxtLink>
    </div>
  </header>
</template>
