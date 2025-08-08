<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed<boolean>({
  get: () => colorMode.value === 'dark',
  set: (_isDark: boolean) => {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <button
      @click="isDark = !isDark"
      class="group relative flex items-center justify-center text-gray-700 dark:text-gray-200 transition-all duration-300"
    >
      <span
        v-auto-animate
        class="relative inline-flex items-center justify-center w-8 h-8"
      >
        <UIcon
          :key="isDark"
          :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          class="w-6 h-6 transform transition-all duration-300 group-hover:scale-110"
          :class="isDark ? 'text-blue-400' : 'text-yellow-400'"
        />

        <!-- Glow эффект -->
        <span
          v-if="!isDark"
          class="absolute inset-0 rounded-full bg-yellow-300 opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300"
        />
        <span
          v-else
          class="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"
        />
      </span>
    </button>

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
