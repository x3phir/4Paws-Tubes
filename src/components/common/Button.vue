<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Tombol',
  },
  customClass: {
    type: String,
    default: '',
  },
})
console.log(props);

</script>

<template>
  <div class="card-actions justify-center mt-4">
    <button
      class="btn w-80 border-0 btn-block text-black "
      :class="customClass"
    >
      {{ label }}
    </button>
  </div>
</template>
