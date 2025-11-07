<script setup>
import { defineProps } from "vue";
import Button from "../common/Button.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="card text-center bg-[var(--bubble)] p-3 h-70 w-full text-black shadow-xl hover:shadow-md rounded-2xl transition-all duration-300 overflow-hidden bg-white"
  >
    <div class="card-body">
      <h2 class="text-xl font-bold text-center">
        {{ props.title }}
      </h2>
      <p class="text-[11px] leading-relaxed mt-10">
        {{ props.text }}
      </p>
      <div class="card-actions justify-center mt-4">
        <Button
          label="Baca Selengkapnya"
          customClass="bg-[#182F0C] text-white w-60 absolute bottom-8"
        />
      </div>
    </div>
  </div>
</template>
