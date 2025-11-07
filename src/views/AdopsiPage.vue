<script setup>
import Filter from "../components/common/Filter.vue";
import CatGrid from "../components/CatGrid.vue";
import Navbar from "../components/layout/TheNavbar.vue";
import { ref } from "vue";

const cats = ref([
  {
    id: 1,
    name: "Oyen",
    age: "8 Tahun",
    description: "Ramah & Suka Bermain",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Miko",
    age: "3 Tahun",
    description: "Tenang & Penyayang",
    image:
      "https://images.unsplash.com/photo-1606214174589-179b0e6f3e4c?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Luna",
    age: "2 Tahun",
    description: "Aktif & Lucu",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Tomi",
    age: "4 Tahun",
    description: "Kalem & Penurut",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop",
  },
]);

const handleFilterChange = (filters) => {
  console.log("Filters changed:", filters);
};

const handleReset = () => {
  console.log("Filters reset");
};

const handleApply = (filters) => {
  console.log("Filters applied:", filters);
};
</script>

<template>
  <Navbar />
  <div class="min-h-screen min-w-screen bg-gradient-to-b font-display from-white to-[#96BB83] pt-25">
    <!-- Hero Section langsung di sini -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-[#182F0C] mb-4">
          Temukan Sahabat Barumu:<br />Adopsi Kucing Hari Ini
        </h1>
        <p class="text-lg text-gray-600">
          Ribuan kucing menanti rumah baru penuh kasih sayang. Mulailah
          perjalanan adopsimu di sini.
        </p>
      </div>
    </section>

    <!-- Bagian Filter + Grid -->
    <div class="max-w-380 rounded-tl-4xl rounded-tr-4xl bg-[#F3FFED] mx-auto px-4 sm:px-6 lg:px-8 py-7">
      <Filter
        :onFilterChange="handleFilterChange"
        :onReset="handleReset"
        :onApply="handleApply"
      />
      <CatGrid :cats="cats" />
    </div>
  </div>
</template>
