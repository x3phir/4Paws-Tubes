<script setup>
import { ref, onMounted } from "vue";
const handleDonate = () => {
  alert("Terima kasih telah berdonasi! ❤️");
};

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect(); // animasi hanya sekali muncul
        }
      });
    },
    { threshold: 0.2 } // 20% terlihat di layar baru aktif
  );

  const el = document.querySelector("#donasi-card");
  if (el) observer.observe(el);
});
</script>

<template>
  <div
    id="donasi-card"
    :class="[
      'group font-display relative bg-[#F3FFED]/90 backdrop-blur-sm shadow-lg hover:shadow-xl rounded-3xl border-2 border-[#182F0C]/10 p-6 sm:p-8 text-center w-full min-h-[420px] transition-all duration-500 ease-out transform hover:-translate-y-1',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    ]"
  >
    <!-- Circle Decoration -->
    <div
      class="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#182F0C] w-24 h-24 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110"
    ></div>

    <div class="relative mt-16 space-y-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-[#182F0C] leading-tight">
        Dukung dengan<br />Donasi
      </h2>

      <p class="text-[#182F0C]/80 text-base sm:text-lg leading-relaxed">
        Bantu kami menyediakan makanan, tempat berlindung, dan perawatan medis
        bagi kucing yang membutuhkan.
      </p>

      <div class="pt-4">
        <button
          @click="handleDonate"
          class="bg-[#182F0C] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#2C4D14] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Donasi Sekarang
        </button>
      </div>
    </div>
  </div>
</template>
