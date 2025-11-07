<script setup>
import Navbar from "../components/layout/TheNavbar.vue";
import AutoSlideCard from "../components/carousel/AutoSlideCard.vue";
import CardSlider from "../components/carousel/CardSlider.vue";
</script>

<template>
  <Navbar />

  <!-- Body Content -->
  <section
    class="edukasi font-display flex flex-col items-center text-center min-h-screen px-6 py-20 bg-gradient-to-b from-white to-[#96BB83]"
  >
    <!-- Header -->
    <div class="text-[#182F0C] max-w-2xl">
      <h1 class="font-semibold text-4xl md:text-5xl mb-4">
        Panduan Lengka Merawat Kucing
      </h1>
      <p class="font-medium text-base md:text-xl">
        Temukan berbagai artikel dan tips ahli untuk kesehatan dan kebahagiaan
        kucingmu.
      </p>
    </div>

    <!-- Main Card -->
    <div class="main-card mt-12 w-full max-w-6xl">
      <!-- <MainCardEdu /> -->
      <AutoSlideCard />
    </div>

    <!-- Secondary Cards -->
    <div class="secondary-card mt-10">
      <!-- <Simulasi /> -->
      <CardSlider />
    </div>
  </section>
</template>
