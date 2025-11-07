<script setup>
import CatCard from './cards/CatCard.vue'

const props = defineProps({
  cats: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Kucing untuk Diadopsi</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CatCard v-for="cat in cats" :key="cat.id" :cat="cat" />
    </div>
  </div>
</template>
