<script setup>
import { ref } from "vue";
import { MapPin, Image as ImageIcon } from "lucide-vue-next";

const location = ref("");
const condition = ref("");
const details = ref("");
const selectedImage = ref(null);
const isUsingLocation = ref(false);

const handleLocationClick = () => {
  isUsingLocation.value = true;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        location.value = `Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(6)}`;
        isUsingLocation.value = false;
      },
      () => {
        alert("Tidak dapat mengakses lokasi. Silakan masukkan lokasi secara manual.");
        isUsingLocation.value = false;
      }
    );
  } else {
    alert("Geolocation tidak didukung oleh browser Anda.");
    isUsingLocation.value = false;
  }
};

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      selectedImage.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = () => {
  if (!location.value || !condition.value || !details.value) {
    alert("Mohon lengkapi semua field yang diperlukan");
    return;
  }

  console.log({
    location: location.value,
    condition: condition.value,
    details: details.value,
    image: selectedImage.value ? "Image uploaded" : "No image",
  });

  alert("Laporan berhasil dikirim!");
};
</script>

<template>
  <div class="w-full max-w-4xl mx-auto bg-[#CDE4C2] text-[#5A7C49] rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
    <!-- Header Lokasi -->
    <div class="mb-6 md:mb-8">
      <button
        @click="handleLocationClick"
        :disabled="isUsingLocation"
        class="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#182F0C] hover:bg-[#2C4D14] disabled:opacity-70 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <MapPin :size="20" class="flex-shrink-0" />
        <span class="font-semibold text-sm sm:text-base">
          {{ isUsingLocation ? "Mengambil Lokasi..." : "Aktifkan GPS: Gunakan Lokasi Saya" }}
        </span>
      </button>

      <input
        type="text"
        v-model="location"
        placeholder="Ketik nama jalan, alamat, atau patokan terdekat"
        class="w-full mt-3 px-4 py-3 border-none rounded-lg bg-white text-black shadow-inner focus:outline-none focus:ring-2 focus:ring-[#182F0C]/30 transition-all"
      />
      <p class="text-xs sm:text-sm font-medium mt-2 text-left text-[#182F0C]/80">
        Lokasi GPS Anda akan digunakan untuk penandaan awal
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <!-- Foto Kucing -->
      <div>
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#182F0C] text-left mb-3">
          Foto Kucing
        </h3>
        <div class="border-2 border-dashed border-[#182F0C]/30 rounded-xl p-4 sm:p-6 text-center bg-white/80 backdrop-blur-sm min-h-[200px] sm:min-h-[240px] md:min-h-[280px] flex flex-col items-center justify-center">
          <template v-if="selectedImage">
            <div class="w-full h-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px] relative">
              <img
                :src="selectedImage"
                alt="Preview"
                class="w-full h-full object-cover rounded-lg"
              />
              <button
                @click="selectedImage = null"
                class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-lg"
              >
                Hapus
              </button>
            </div>
          </template>
          <template v-else>
            <ImageIcon :size="40" class="text-[#182F0C]/40 mb-3" />
            <p class="text-[#182F0C]/60 mb-4 text-sm sm:text-base px-2">
              Ambil foto atau pilih dalam galeri
            </p>
            <label class="cursor-pointer bg-[#182F0C] text-white px-6 py-2.5 text-sm sm:text-base rounded-lg hover:bg-[#2C4D14] transition-all duration-300 shadow-md hover:shadow-lg">
              Pilih Foto
              <input
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="hidden"
              />
            </label>
          </template>
        </div>
      </div>

      <!-- Kondisi Kucing -->
      <div>
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#182F0C] text-left mb-3">
          Kondisi Kucing
        </h3>
        <div class="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl bg-white/80 backdrop-blur-sm">
          <label
            v-for="option in [
              { value: 'sehat', label: 'Sehat / Normal' },
              { value: 'terluka', label: 'Terluka' },
              { value: 'sakit', label: 'Sakit' },
            ]"
            :key="option.value"
            class="flex items-center gap-3 text-sm sm:text-base md:text-lg cursor-pointer group hover:bg-[#182F0C]/5 p-2 sm:p-3 rounded-lg transition-colors duration-200"
          >
            <div class="relative flex items-center flex-shrink-0">
              <input
                type="radio"
                name="condition"
                :value="option.value"
                v-model="condition"
                class="appearance-none w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#182F0C] rounded-full checked:border-[#182F0C] transition-all duration-200 cursor-pointer"
              />
              <div
                v-if="condition === option.value"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#182F0C] rounded-full transition-all duration-200 pointer-events-none"
              ></div>
            </div>
            <span class="text-[#182F0C] group-hover:text-[#2C4D14] transition-colors duration-200">
              {{ option.label }}
            </span>
          </label>
        </div>
      </div>
    </div>

    <!-- Detail Tambahan -->
    <div class="mt-6 md:mt-8">
      <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#182F0C] text-left mb-3">
        Detail Tambahan
      </h3>
      <textarea
        v-model="details"
        placeholder="Jelaskan secara spesifik detail atau keadaan kucing yang Anda temukan."
        rows="4"
        class="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#182F0C]/30 transition-all"
      />
    </div>

    <!-- Tombol Lapor -->
    <div class="mt-6 md:mt-8 flex justify-center">
      <button
        @click="handleSubmit"
        class="w-full sm:w-auto bg-[#182F0C] text-white px-8 sm:px-12 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold hover:bg-[#2C4D14] transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Lapor Sekarang
      </button>
    </div>
  </div>
</template>