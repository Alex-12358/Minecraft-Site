<script setup lang="ts">
const route = useRoute()

// Загружаем список серверов, чтобы найти название по ID
const { data: servers } = await useFetch('/api/servers')

const server = computed(() =>
  servers.value?.find(s => s.id === Number(route.params.id))
)

const { data: products, pending, error } = await useFetch(
  `/api/products/${route.params.id}`
)

const categories = computed(() => {
  if (!products.value) return {}
  return products.value.reduce((acc: any, item: any) => {
    const cat = item.category || 'Другое'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(item)
    return acc
  }, {})
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8" v-auto-animate>
    <h1
      class="text-3xl font-extrabold mb-6 bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] bg-clip-text text-transparent"
    >
       {{ server?.name || 'Загрузка...' }}
    </h1>

    <div v-if="pending">Загрузка товаров...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>

    <div v-else>
      <div v-for="(items, cat) in categories" :key="cat" class="mb-8">
        <h2
          class="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] bg-clip-text text-transparent"
        >
          {{ cat }}
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="item in items"
            :key="item.id"
            class="p-4 bg-white/70 dark:bg-gray-900/50 rounded-xl shadow-lg backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <h3 class="font-bold text-lg text-gray-900 dark:text-white">
                {{ item.name }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ item.description }}
              </p>
            </div>
            <button
              class="mt-4 w-full py-2 rounded-md bg-gradient-to-r from-[#e43b35] via-[#f45729] to-[#ffcc00] text-white font-semibold hover:opacity-90 transition"
              @click="window.open(item.buyLink, '_blank')"
            >
              Купить за {{ item.price }} ₽
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
