<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const isMenuOpen = ref(false);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const scrollToTop = () => {
  closeMenu();
  if (route.path !== "/") {
    router.push("/").then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const scrollToSection = (sectionId) => {
  closeMenu();
  if (route.path !== "/") {
    router.push("/").then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const navLinks = [
  { name: "Beranda", path: "/", action: () => scrollToTop(), isRoute: true },
  {
    name: "Tentang",
    path: "#tentang",
    action: () => scrollToSection("tentang"),
    isRoute: false,
  },
  {
    name: "Lapor",
    path: "#lapor",
    action: () => scrollToSection("lapor"),
    isRoute: false,
  },
  {
    name: "Donasi",
    path: "/donasi",
    action: () => router.push("/donasi"),
    isRoute: true,
  },
  {
    name: "Adopsi",
    path: "/adopsi",
    action: () => router.push("/adopsi"),
    isRoute: true,
  },
  {
    name: "Edukasi",
    path: "/edukasi",
    action: () => router.push("/edukasi"),
    isRoute: true,
  },
  {
    name: "Kontak",
    path: "#kontak",
    action: () => scrollToSection("kontak"),
    isRoute: false,
  },
];
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/25 border-b border-white/20 shadow-[inset_0_0_0.3rem_rgba(255,255,255,0.2)] z-9999 text-[var(--dark)]"
  >
    <div class="navbar px-6 justify-between w-full max-w-none">
      <div class="navbar-start">
        <div class="dropdown" :class="{ 'dropdown-open': isMenuOpen }">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost border-none shadow-none bg-transparent text-black lg:hidden"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            @click.stop="closeMenu"
          >
            <li v-for="link in navLinks" :key="link.path">
              <a
                href="#"
                @click.prevent="link.action"
                class="text-[#182F0C]!"
                :class="{
                  'bg-[#182F0C] text-white!':
                    link.isRoute && route.path === link.path,
                }"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <router-link
          to="/"
          class="btn btn-ghost font-display text-xl bg-transparent border-none shadow-none text-[#182F0C]! hover:bg-transparent"
          >4Paws</router-link
        >
      </div>

      <div class="navbar-end hidden lg:flex w-400">
        <ul
          class="menu menu-horizontal text-white! text-[10px] gap-10 mr-10 px-1"
        >
          <li v-for="link in navLinks" :key="link.path">
            <a
              href="#"
              @click.prevent="link.action"
              class="text-[#182F0C]!"
              :class="{
                'bg-[#182F0C] text-white!':
                  link.isRoute && route.path === link.path,
              }"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
      <router-link to="/daftar" class="btn bg-[#182F0C] text-white!">Daftar</router-link>
    </div>
  </nav>
</template>
