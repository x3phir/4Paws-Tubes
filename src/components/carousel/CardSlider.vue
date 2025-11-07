<script setup>
import { ref, computed } from "vue";
import CardEdu from "../cards/EduCard.vue";

// --- Dummy data sementara (bisa diganti dari DB) ---
const cards = ref([
  {
    id: 1,
    title: "Cara Merawat Kucing",
    text: "Pelajari langkah sederhana menjaga kebersihan, memberi makan, dan memastikan kucingmu tumbuh sehat dan bahagia setiap hari.",
  },
  {
    id: 2,
    title: "Menjaga Kesehatan Kucing",
    text: "Pelajari langkah sederhana menjaga kebersihan, memberi makan, dan memastikan kucingmu tumbuh sehat dan bahagia setiap hari.",
  },
  {
    id: 3,
    title: "Memilih Makanan Tepat",
    text: "Pelajari langkah sederhana menjaga kebersihan, memberi makan, dan memastikan kucingmu tumbuh sehat dan bahagia setiap hari.",
  },
  {
    id: 4,
    title: "Membersihkan Kandang",
    text: "Pelajari langkah sederhana menjaga kebersihan, memberi makan, dan memastikan kucingmu tumbuh sehat dan bahagia setiap hari.",
  },
  { id: 5, title: "Melatih Kucing", text: "Cara sederhana melatih perilaku" },
  { id: 6, title: "Mainan Favorit", text: "Rekomendasi mainan lucu" },
]);

const currentPage = ref(1);
const itemsPerPage = 3;
const totalPages = computed(() => Math.ceil(cards.value.length / itemsPerPage));

// ambil hanya card yang sesuai halaman
const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return cards.value.slice(start, start + itemsPerPage);
});

// navigasi
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
  else currentPage.value = 1;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
  else currentPage.value = totalPages.value;
};

const setPage = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="flex flex-col mt-10">
    <!-- Grid Card -->
    <div
      class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-center items-center"
    >
      <CardEdu
        v-for="card in paginatedCards"
        :key="card.id"
        :title="card.title"
        :text="card.text"
      />
    </div>

    <!-- Pagination Bullets -->
    <div class="flex items-center justify-center gap-3 mt-8 w-full">
      <button
        @click="prevPage"
        class="text-gray-600 text-lg font-bold hover:scale-110 transition-transform"
      >
        ‹
      </button>

      <div class="flex gap-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="setPage(page)"
          class="w-3 h-3 rounded-full transition-all duration-200"
          :class="
            page === currentPage
              ? 'bg-green-800 scale-110'
              : 'bg-green-300 hover:bg-green-400'
          "
        ></button>
      </div>

      <button
        @click="nextPage"
        class="text-gray-600 text-lg font-bold hover:scale-110 transition-transform"
      >
        ›
      </button>
    </div>
  </div>
</template>
