<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mainCardEdu from "../cards/MainEduCard.vue";

const cards = ref([
  { id: 1, type: "component", component: mainCardEdu },
  { id: 2, type: "component", component: mainCardEdu },
  { id: 3, type: "component", component: mainCardEdu },
]);

const activeIndex = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % cards.value.length;
  }, 5000);
});

onUnmounted(() => clearInterval(intervalId));
</script>

<template>
  <div class="relative w-full h-full overflow-hidden rounded-2xl">
    <transition name="fade" mode="out-in">
      <!-- render langsung isi card -->
      <component v-if="cards.length" :is="cards[activeIndex].component" />
      <div
        v-else
        :key="cards[activeIndex].id"
        class="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[var(--bubble)] rounded-2xl"
      >
        <h2 class="text-xl font-bold text-green-900 mb-2">
          {{ cards[activeIndex].title }}
        </h2>
        <p class="text-gray-700">{{ cards[activeIndex].text }}</p>
      </div>
    </transition>

    <!-- Bullet Pagination -->
    <div class="absolute bottom-4 w-full flex justify-center space-x-2">
      <span
        v-for="(card, index) in cards"
        :key="card.id"
        class="w-3 h-3 rounded-full transition-all duration-500"
        :class="index === activeIndex ? 'bg-green-900' : 'bg-green-300'"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
