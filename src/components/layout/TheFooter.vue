<template>
  <footer
    class="bg-white w-full py-10 md:py-12 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] mt-12"
    id="kontak"
  >
    <div class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
      <div
        class="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6"
      >
        <!-- Logo / Brand -->
        <div class="shrink-0 text-center md:text-left">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#182F0C]"
          >
            4Paws
          </h2>
          <p class="text-sm text-[#182F0C]/80 mt-2">
            Website penyelamat kucing jalanan
          </p>
        </div>

        <!-- Social Links -->
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold text-[#182F0C] mb-3">Ikuti Kami</h3>
          <div
            class="flex flex-row gap-4 items-center justify-center md:justify-start"
          >
            <a
              href="#"
              class="text-[#182F0C] hover:text-[#96BB83] transition-colors"
            >
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              class="text-[#182F0C] hover:text-[#96BB83] transition-colors"
            >
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              class="text-[#182F0C] hover:text-[#96BB83] transition-colors"
            >
              <i class="fab fa-facebook text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold text-[#182F0C] mb-3">Kontak</h3>
          <div class="space-y-2">
            <p class="text-sm text-[#182F0C]/80">
              <i class="fas fa-envelope mr-2"></i>4paws@gmail.com
            </p>
            <p class="text-sm text-[#182F0C]/80">
              <i class="fas fa-phone mr-2"></i>+62 812-3456-7890
            </p>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-[#182F0C]/10 text-center">
        <p class="text-sm text-[#182F0C]/60">
          © 2025 4Paws. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
