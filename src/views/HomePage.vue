<script setup>
import TheNavbar from "../components/layout/TheNavbar.vue";
import BaseButton from "../components/common/Button.vue";
import AboutCard from "../components/cards/AboutCard.vue";
import CatReportForm from "../components/forms/CatReportForm.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>

<template>
  <TheNavbar />

  <main class="pt-16 overflow-hidden">
    <!-- HERO SECTION -->
    <section class="min-h-screen bg-gradient-to-b from-white to-[#96BB83]">
      <div class="container mx-auto px-4 py-12 md:py-20">
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          <!-- Hero Image -->
          <div class="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="../assets/cat.png"
              alt="cat"
              class="w-[280px] sm:w-[400px] md:w-[480px] lg:w-[520px] xl:w-[600px] h-auto object-contain transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <!-- Hero Content -->
          <div class="w-full lg:w-1/2 text-center lg:text-left">
            <h1
              class="text-[#182F0C] font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Temukan Sahabat<br />Berbulu Impian Mu!
            </h1>
            <BaseButton
              label="Mulai Adopsi"
              customClass="bg-[#182F0C] hover:bg-[#2C4D14] text-white text-lg font-semibold rounded-full px-8 py-3 transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section
      class="py-16 md:py-24 bg-gradient-to-b from-[#96BB83] to-white font-display"
      id="tentang"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-[#182F0C] text-3xl md:text-5xl font-bold mb-8">
            Tentang Kami
          </h2>
          <p class="text-[#182F0C] text-lg md:text-xl leading-relaxed mb-30">
            Kami adalah komunitas pecinta hewan yang berdedikasi untuk
            menyelamatkan kucing terlantar dari jalanan, memberikan perawatan,
            dan menemukan keluarga baru bagi mereka. Misi kami sederhana
            menciptakan dunia di mana tidak ada kucing yang harus tidur dalam
            ketakutan atau kesepian. Dengan dukungan para relawan, donatur, dan
            adopter seperti kamu, setiap hari kami berusaha menjembatani harapan
            dan kasih sayang.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <div class="transform hover:scale-105 transition-all duration-300">
            <AboutCard />
          </div>
          <div class="transform hover:scale-105 transition-all duration-300">
            <AboutCard />
          </div>
          <div class="transform hover:scale-105 transition-all duration-300">
            <AboutCard />
          </div>
        </div>
      </div>
    </section>

    <!-- REPORT SECTION -->
    <section
      class="relative bg-gradient-to-b from-white to-[#96BB83] w-full py-16 md:py-24"
      id="lapor"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-center">
          <!-- Content Wrapper -->
          <div class="w-full max-w-2xl">
            <!-- Header -->
            <div class="text-center mb-8 md:mb-12">
              <h2
                class="text-[#182F0C] font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Lihat Kucing di Jalan?<br class="hidden sm:block" />
                Laporkan Sekarang
              </h2>
            </div>

            <!-- Form -->
            <div class="w-full">
              <CatReportForm />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-gradient-to-b from-[#96BB83] to-white w-full pt-12">
      <div class="container mx-auto px-4" id="kontak">
        <TheFooter />
      </div>
    </footer>
  </main>
</template>
