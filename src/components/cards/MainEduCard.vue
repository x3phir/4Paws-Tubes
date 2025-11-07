<script setup>
import catImage from "../../assets/catCardEdu.png";
import Button from "../common/Button.vue";
</script>

<template>
  <div
    class="card w-full bg-white text-black shadow-md rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div
      class="flex flex-col md:flex-row items-stretch min-h-[400px] md:min-h-[320px] lg:min-h-[360px]"
    >
      <!-- Body - Text Content -->
      <div
        class="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left order-1"
      >
        <h2
          class="card-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#182F0C] leading-tight"
        >
          Cara Merawat Kucing untuk Pemula
        </h2>
        <p
          class="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl"
        >
          Pelajari langkah sederhana menjaga kebersihan, memberi makan, dan
          memastikan kucingmu tumbuh sehat dan bahagia setiap hari.
        </p>
        <div class="card-actions mt-6 md:mt-8">
          <Button
            label="Baca Selengkapnya"
            customClass="bg-[#182F0C] hover:bg-[#2C4D14] text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
          />
        </div>
      </div>

      <!-- Image Section -->
      <div
        class="relative w-full md:w-1/2 lg:w-2/5 flex items-center justify-center md:justify-end order-2 bg-gradient-to-br from-[#96BB83]/10 to-transparent"
      >
        <div
          class="relative w-full h-64 md:h-full flex items-center justify-center md:justify-end p-4 md:p-6 lg:p-8"
        >
          <img
            :src="catImage"
            alt="Ilustrasi kucing"
            class="object-contain w-auto h-auto max-w-[140px] sm:max-w-40 md:max-w-[200px] lg:max-w-[220px] max-h-[140px] sm:max-h-40 md:max-h-[200px] lg:max-h-[220px] transition-transform duration-300 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tambahan animasi hover untuk image */
.card:hover img {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
