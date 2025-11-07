<script setup>
import { ref } from "vue";
import CardDonasi from "../cards/DonasiCard.vue";

const slides = [1, 2, 3, 4, 5, 6];
const current = ref(0);

// Responsive: tampilkan 1 card di mobile, 2 di tablet, 3 di desktop
const getCardsPerView = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const cardsPerView = ref(getCardsPerView());

// Update cardsPerView saat resize
if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    cardsPerView.value = getCardsPerView();
    // Reset ke slide pertama jika current slide melebihi batas
    const maxIndex = Math.max(0, slides.length - cardsPerView.value);
    if (current.value > maxIndex) {
      current.value = maxIndex;
    }
  });
}

const maxIndex = () => Math.max(0, slides.length - cardsPerView.value);

const nextSlide = () => {
  if (current.value < maxIndex()) {
    current.value++;
  }
};

const prevSlide = () => {
  if (current.value > 0) {
    current.value--;
  }
};

const canGoPrev = () => current.value > 0;
const canGoNext = () => current.value < maxIndex();
</script>

<template>
  <div class="relative w-full">
    <!-- Container dengan overflow hidden -->
    <div class="overflow-hidden">
      <!-- Wrapper semua card -->
      <div
        class="flex transition-transform duration-500 ease-in-out md:gap-19"
        :style="{
          transform: `translateX(-${current * (100 / cardsPerView)}%)`,
        }"
      >
        <!-- Tampilkan semua card -->
        <div
          v-for="slide in slides"
          :key="slide"
          class="flex-shrink-0 px-2 sm:px-3 md:px-4 flex justify-center items-start"
          :style="{ width: `${100 / cardsPerView}%` }"
        >
          <div class="">
            <CardDonasi />
          </div>
        </div>
      </div>
    </div>

    <!-- Tombol navigasi - hidden jika tidak bisa navigate -->
    <div
      class="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2 pointer-events-none px-2 sm:px-4"
    >
      <button
        @click="prevSlide"
        :disabled="!canGoPrev()"
        :class="[
          'btn btn-circle bg-white text-black border-none shadow-lg hover:bg-gray-100 transition-all duration-300 pointer-events-auto',
          !canGoPrev()
            ? 'opacity-0 cursor-not-allowed'
            : 'opacity-100 hover:scale-110',
        ]"
        class="w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-xl"
      >
        ❮
      </button>
      <button
        @click="nextSlide"
        :disabled="!canGoNext()"
        :class="[
          'btn btn-circle bg-white text-black border-none shadow-lg hover:bg-gray-100 transition-all duration-300 pointer-events-auto',
          !canGoNext()
            ? 'opacity-0 cursor-not-allowed'
            : 'opacity-100 hover:scale-110',
        ]"
        class="w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-xl"
      >
        ❯
      </button>
    </div>

    <!-- Dots indicator -->
    <div class="flex justify-center gap-2 mt-6">
      <button
        v-for="(slide, index) in slides.slice(0, maxIndex() + 1)"
        :key="index"
        @click="current = index"
        :class="[
          'w-2 h-2 rounded-full transition-all duration-300',
          current === index
            ? 'bg-[#182F0C] w-8'
            : 'bg-[#182F0C]/30 hover:bg-[#182F0C]/50',
        ]"
      />
    </div>
  </div>
</template>

<style scoped>
/* Custom button styles jika tidak pakai DaisyUI */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
}

.btn-circle {
  border-radius: 9999px;
}

.btn:disabled {
  pointer-events: none;
}
</style>
