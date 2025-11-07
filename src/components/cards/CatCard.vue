<script setup>
const props = defineProps({
  cat: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img :src="cat.image" :alt="cat.name" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ cat.name }}</h3>
      <p class="text-sm text-gray-600 mb-1">Usia: {{ cat.age }}</p>
      <p class="text-sm text-gray-600 mb-4">{{ cat.description }}</p>
      <button class="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 font-medium">
        Lihat Profil
      </button>
    </div>
  </div>
</template>
