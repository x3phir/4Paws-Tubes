<script setup>
import InputFile from "../components/common/InputFile.vue";
import Carousel from "../components/carousel/Carousel.vue";
import Button from "../components/common/Button.vue";
import Navbar from "../components/layout/TheNavbar.vue";
</script>

<template>
  <div class="min-h-screen overflow-x-hidden">
    <Navbar />

    <main class="bg-gradient-to-b from-white to-[#96BB83]">
      <!-- Hero -->
      <section class="w-full px-4 sm:px-6 lg:px-8 pt-20 pb-8 md:py-20">
        <div class="container mx-auto">
          <div class="max-w-3xl mx-auto text-center font-display">
            <h1
              class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#182F0C] leading-tight mb-4 px-2"
            >
              Berdonasi untuk Hewan yang Membutuhkan
            </h1>
            <p
              class="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4"
            >
              Setiap donasi Anda membuat perbedaan besar dalam kehidupan hewan
              terlantar. Pilih shelter yang ingin Anda dukung dan mulai berbagi
              kasih sayang hari ini.
            </p>
          </div>
        </div>
      </section>

      <!-- Carousel -->
      <section class="w-full px-4 sm:px-6 lg:px-8 pb-8">
        <div class="container mx-auto">
          <div class="max-w-6xl mx-auto">
            <Carousel />
          </div>
        </div>
      </section>

      <!-- Upload form / File input -->
      <section class="w-full">
        <div class="container mx-auto max-w-6xl">
          <div class="max-w-300 mx-auto">
            <InputFile />
          </div>
        </div>
      </section>

      <!-- CTA Button -->
      <section class="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div class="container mx-auto">
          <div class="max-w-4xl mx-auto flex justify-center">
            <Button
              label="Submit"
              customClass="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-3.5 text-base sm:text-lg rounded-xl bg-[#182F0C] text-white hover:bg-[#2C4D14] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #000000aa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #000000aa);
}
</style>
