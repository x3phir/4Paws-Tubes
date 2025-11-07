<script setup>
import { reactive } from 'vue'

const props = defineProps({
  onFilterChange: Function,
  onReset: Function,
  onApply: Function
})

const filters = reactive({
  lokasi: '',
  usia: '',
  jenisKelamin: ''
})

const handleChange = (field, value) => {
  filters[field] = value
  props.onFilterChange?.({ ...filters })
}

const resetFilters = () => {
  filters.lokasi = ''
  filters.usia = ''
  filters.jenisKelamin = ''
  props.onReset?.()
}

const applyFilters = () => {
  props.onApply?.({ ...filters })
}
</script>

<template>
  <div class="bg-[#F3FFED] rounded-lg p-6 mb-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">Filter & Pencarian</h2>
    <div class="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Lokasi"
        v-model="filters.lokasi"
        @input="handleChange('lokasi', filters.lokasi)"
        class="flex-1 min-w-[200px] px-4 py-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="text"
        placeholder="Usia"
        v-model="filters.usia"
        @input="handleChange('usia', filters.usia)"
        class="flex-1 min-w-[200px] px-4 py-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="text"
        placeholder="Jenis Kelamin"
        v-model="filters.jenisKelamin"
        @input="handleChange('jenisKelamin', filters.jenisKelamin)"
        class="flex-1 min-w-[200px] px-4 py-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        @click="resetFilters"
        class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
      >
        Reset Filter
      </button>
      <button
        @click="applyFilters"
        class="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium"
      >
        Terapkan Filter
      </button>
    </div>
  </div>
</template>
