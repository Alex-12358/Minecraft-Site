<template>
  <footer
    class="backdrop-blur-md bg-white/50 dark:bg-gray-900/30 text-gray-800 dark:text-gray-100 border-t border-white/30 dark:border-gray-700 shadow-md"
  >
    <div class="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- О компании -->
      <div>
        <h2 class="text-lg font-semibold mb-2">О компании</h2>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Мы предоставляем качественные IT-решения для вашего бизнеса.
        </p>
      </div>

      <!-- Навигация -->
      <div>
        <h2 class="text-lg font-semibold mb-2">Навигация</h2>
        <ul class="space-y-1">
          <li v-for="item in menu" :key="item.name">
            <NuxtLink
              :to="item.to"
              class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Контакты -->
      <div>
        <h2 class="text-lg font-semibold mb-2">Контакты</h2>
        <p>Email: info@example.com</p>
        <p>Телефон: +7 (123) 456-7890</p>
      </div>
    </div>

    <div class="text-center text-xs py-4 border-t border-white/20 dark:border-gray-600 opacity-80">
      © 2025 Все права защищены
    </div>
  </footer>
</template>

<script setup lang="ts">
const menu = useMainMenu()

</script>
