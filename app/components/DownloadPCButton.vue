<template>
  <NuxtLink to="/launcher" class="hidden md:block">
          <button
            class="group relative inline-flex items-center gap-2 rounded-md px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            <UIcon
              name="i-lucide-download"
              class="w-5 h-5 transition-transform duration-300 group-hover:rotate-[-15deg]"
            />
            <span class="font-semibold">Скачать лаунчер</span>
            <span
              class="absolute -inset-0.5 rounded-md blur-sm opacity-20 group-hover:opacity-40 bg-blue-400 dark:bg-blue-300 transition-opacity duration-300 -z-10"
            />
          </button>
        </NuxtLink>
</template>
