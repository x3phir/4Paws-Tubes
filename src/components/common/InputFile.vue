<script setup>
import { ref } from "vue";

const selectedPayment = ref("bank");
const donationAmount = ref("");
const fullName = ref("");
const email = ref("");
const phone = ref("");
</script>

<template>
  <div
    class="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Left Section -->
        <div class="flex-1 w-full">
          <!-- Selesaikan Donasi -->
          <div class="mb-6 md:mb-8">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#182F0C] mb-4"
            >
              Selesaikan Donasi Anda
            </h2>
            <div class="dropdown w-full">
              <div
                tabindex="0"
                role="button"
                class="btn w-full p-3 text-left bg-white border-2 border-gray-300 hover:border-[#182F0C] transition-colors"
              >
                Pilih Shelter
              </div>
              <ul
                tabindex="-1"
                class="dropdown-content menu bg-base-100 rounded-box z-10 w-full p-2 shadow-lg mt-1"
              >
                <li><a>Shelter A - Jakarta</a></li>
                <li><a>Shelter B - Bandung</a></li>
                <li><a>Shelter C - Surabaya</a></li>
              </ul>
            </div>
          </div>

          <!-- Nominasi Donasi -->
          <div class="mb-6 md:mb-8">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#182F0C] mb-3"
            >
              Nominal Donasi
            </h2>
            <input
              v-model="donationAmount"
              type="text"
              placeholder="Contoh: 50.000"
              class="input input-bordered w-full text-black bg-white border-2 border-gray-300 focus:border-[#182F0C] focus:outline-none h-12 px-4 text-base transition-colors"
            />
            <p class="text-sm text-gray-600 mt-2">Minimal donasi Rp 10.000</p>
          </div>

          <!-- Form Data Diri -->
          <div class="space-y-4">
            <h2 class="text-xl sm:text-2xl font-bold text-[#182F0C] mb-4">
              Data Diri
            </h2>

            <!-- Nama Lengkap -->
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <label
                class="text-sm sm:text-base text-[#182F0C] font-medium sm:w-32 flex-shrink-0"
              >
                Nama Lengkap
              </label>
              <input
                v-model="fullName"
                type="text"
                placeholder="Contoh: Harri"
                class="input input-bordered flex-1 w-full text-black bg-white border-2 border-gray-300 focus:border-[#182F0C] focus:outline-none h-11 px-4 text-sm sm:text-base transition-colors"
              />
            </div>

            <!-- Email -->
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <label
                class="text-sm sm:text-base text-[#182F0C] font-medium sm:w-32 flex-shrink-0"
              >
                Email
              </label>
              <input
                v-model="email"
                type="email"
                placeholder="Contoh: harri@gmail.com"
                class="input input-bordered flex-1 w-full text-black bg-white border-2 border-gray-300 focus:border-[#182F0C] focus:outline-none h-11 px-4 text-sm sm:text-base transition-colors"
              />
            </div>

            <!-- No Telp -->
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <label
                class="text-sm sm:text-base text-[#182F0C] font-medium sm:w-32 flex-shrink-0"
              >
                No. Telepon
              </label>
              <input
                v-model="phone"
                type="tel"
                placeholder="Contoh: 08XXXXXXX"
                class="input input-bordered flex-1 w-full text-black bg-white border-2 border-gray-300 focus:border-[#182F0C] focus:outline-none h-11 px-4 text-sm sm:text-base transition-colors"
              />
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="flex-1 w-full lg:max-w-xl">
          <!-- Bukti Pembayaran -->
          <div class="mb-6 md:mb-8">
            <fieldset class="fieldset">
              <h2
                class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#182F0C] mb-4"
              >
                Bukti Pembayaran
              </h2>

              <div
                class="border-2 border-dashed border-[#182F0C]/30 rounded-xl p-6 sm:p-8 bg-white/50 text-center hover:border-[#182F0C] transition-colors"
              >
                <input
                  type="file"
                  accept="image/*,.pdf"
                  class="file-input file-input-bordered w-full bg-white border-2 border-gray-300 focus:border-[#182F0C] text-sm"
                />
                <label class="label justify-center">
                  <span class="label-text text-gray-600 text-sm"
                    >Max size 2MB (JPG, PNG, PDF)</span
                  >
                </label>
              </div>
            </fieldset>
          </div>

          <!-- Payment Method -->
          <div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#182F0C] mb-4"
            >
              Metode Pembayaran
            </h2>

            <div class="space-y-3 bg-white/50 p-4 sm:p-6 rounded-xl">
              <!-- Bank Transfer -->
              <label
                class="flex items-center gap-3 cursor-pointer group hover:bg-[#182F0C]/5 p-3 rounded-lg transition-colors"
              >
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  v-model="selectedPayment"
                  class="radio border-2 border-[#182F0C] checked:bg-[#182F0C]"
                />
                <span class="text-sm sm:text-base text-[#182F0C] font-medium"
                  >Bank Transfer</span
                >
              </label>

              <!-- QRIS -->
              <label
                class="flex items-center gap-3 cursor-pointer group hover:bg-[#182F0C]/5 p-3 rounded-lg transition-colors"
              >
                <input
                  type="radio"
                  name="payment"
                  value="qris"
                  v-model="selectedPayment"
                  class="radio border-2 border-[#182F0C] checked:bg-[#182F0C]"
                />
                <span class="text-sm sm:text-base text-[#182F0C] font-medium"
                  >QRIS</span
                >
              </label>

              <!-- Digital Wallet -->
              <label
                class="flex items-center gap-3 cursor-pointer group hover:bg-[#182F0C]/5 p-3 rounded-lg transition-colors"
              >
                <input
                  type="radio"
                  name="payment"
                  value="wallet"
                  v-model="selectedPayment"
                  class="radio border-2 border-[#182F0C] checked:bg-[#182F0C]"
                />
                <span class="text-sm sm:text-base text-[#182F0C] font-medium"
                  >Digital Wallet</span
                >
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styling untuk dropdown jika perlu */
.dropdown-content {
  max-height: 300px;
  overflow-y: auto;
}
</style>
