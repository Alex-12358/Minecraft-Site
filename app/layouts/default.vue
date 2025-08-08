<template>
  <div class="flex flex-col min-h-screen relative">
    <!-- Фон для размытия -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800" />

    <Navbar />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
