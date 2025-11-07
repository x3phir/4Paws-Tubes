<script setup>
import { ref } from 'vue'
// buat referensi ke modal
const modal = ref(null)

// fungsi untuk buka modal
const openModal = () => {
  modal.value.showModal()
}


</script>

<template>

  <!-- CARD -->
  <div class="card flex bg-base-100 text-black w-96 shadow-sm rounded-[70px] ">
    <!-- Card Image -->
    <figure>
      <img src="../../assets/shelter1.jpg" alt="Shoes" />
    </figure>

    <!-- CARD BODY -->
    <div class="card-body  text-left -ml-5">

      <!-- judul card -->
      <h2 class="card-title mt-4 text-xl">
        HAPPY PAWS SHELTER - JAKARTA
      </h2>

      <!-- Rating di Card -->
      <div class="rating">

        <div class="mask mask-star bg-black" aria-label="1 star"></div>
        <div class="mask mask-star bg-black" aria-label="2 star"></div>
        <div class="mask mask-star bg-black" aria-label="3 star" aria-current="true"></div>
        <div class="mask mask-star bg-black" aria-label="4 star"></div>
        <div class="mask mask-star bg-black" aria-label="5 star"></div>

      </div>

      <!-- Nunjukin data stat di card -->
      <div class="stats justify-start">
        <div class="stat-value text-sm text-gray-400 ">54 Reviews</div>
      </div>

      <!-- Button di card  -->
      <div class="card-actions justify-center mt-4">
        <button class="btn rounded-xl w-80 btn-block bg-[#182F0C] text-white hover:bg-black hover:text-white">Donasi Ke Shelter Ini</button>

        <!-- Modal Button -->
         
        <button class="btn border-3 border-[#182F0C] rounded-xl w-80 btn-bloxk text-[#182F0C] font-bold hover:bg-black hover:text-white" @click="openModal">Transparansi</button>
        <dialog ref="modal" class="modal">

          <!-- ISI MODAL -->
          <div class="modal-box relative h-[635px]  w-[880px] max-w-none rounded-[50px]">
            <div class=" w-[80%]">
              <h2 class="text-[40px] px-10 font-bold text-[#182F0C] pb-10">Laporan Transparansi - Happy Paws Shelter</h2>
            </div>
            <div class="flex justify-between ">
              <h2 class="text text-[28px] text-[#182F0C] font-bold pb-4">Laporan Keuangan Bulanan</h2>
              <h2 class="text text-[28px] font-bold text-[#182F0C] pb-4 mr-77">Review</h2>

            </div>

            <div class="flex justify-between">

              <!-- diagram bulet -->
              <div class=" flex col">
                <div class=" mt-10 radial-progress bg-[#75A05F] text-[#182F0C] font-bold text-[30px]" style="--value:70; --size:14rem; --thickness: 2.5rem;"
                  aria-valuenow="70" role="progressbar">70%</div>
              </div>

              <div class="my-30 pt-1 ">
                <h2 class="text text-[15px] font-semibold">
                    Total Donasi (bulan ini) :
                </h2>
                <h2 class="text font-bold text-[30px]">
                    Rp 500.000
                </h2>
              </div>

              <!-- card dalem modal -->
              <!-- Review Card -->
              <div class=" w-100 h-90">
                <div class="flex flex-col gap-3">
                  <!-- Review Card -->
                  <div class="bg-[#E8E8E8] border-2 text-[#182F0C] shadow-md border h-20  flex justify-center items-center p-7 rounded-xl">
                    <div class="">
                      <div class="flex justify-between items-center">
                        <h4 class="font-bold text-[#182F0C]">John Doe</h4>
                        <div class="rating rating-sm">
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" />
                        </div>
                      </div>
                      <p class="text-[#182F0C] text-xs leading-snug">
                        Saya berkunjung sebelum berdonasi, dan tempatnya sangat bersih dan terawat.
                      </p>
                    </div>
                  </div>
                  <div class="bg-[#E8E8E8] shadow-md border-2 text-[#182F0C] h-20 flex justify-center items-center p-7 rounded-xl">
                    <div class="">
                      <div class="flex justify-between items-center">
                        <h4 class="font-bold text-text-[#182F0C]">John Doe</h4>
                        <div class="rating rating-sm">
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" />
                        </div>
                      </div>
                      <p class="text-[#182F0C] text-xs leading-snug">
                        Saya berkunjung sebelum berdonasi, dan tempatnya sangat bersih dan terawat.
                      </p>
                    </div>
                  </div>
                  <div class="bg-[#E8E8E8] shadow-md border-2 text-[#182F0C] h-20 flex justify-center items-center p-7 rounded-xl">
                    <div class="">
                      <div class="flex justify-between items-center">
                        <h4 class="font-bold text-[#182F0C]">John Doe</h4>
                        <div class="rating rating-sm">
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" />
                        </div>
                      </div>
                      <p class="text-[#182F0C] text-xs leading-snug">
                        Saya berkunjung sebelum berdonasi, dan tempatnya sangat bersih dan terawat.
                      </p>
                    </div>
                  </div>
                  <div class="bg-[#E8E8E8] shadow-2xl border-2 text-[#182F0C] h-20 flex justify-center items-center p-7 rounded-xl">
                    <div class="">
                      <div class="flex justify-between items-center">
                        <h4 class="font-bold text-[#182F0C]">John Doe</h4>
                        <div class="rating rating-sm">
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-green-700" />
                        </div>
                      </div>
                      <p class="text-[#182F0C] text-xs leading-snug">
                        Saya berkunjung sebelum berdonasi, dan tempatnya sangat bersih dan terawat.
                      </p>
                    </div>
                  </div>

                  
                </div>
              </div>
              <div class="absolute bottom-9 left-6">
                 <button class="btn w-100 h-12 btn-block rounded-xl bg-[#182F0C]  text-white hover:bg-black hover:text-white">Wide</button>
              </div>
            </div>

            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-circle absolute right-10 top-7 border-2 border-[#182F0C]">✕</button>
            </form>
            


          </div>
        </dialog>
      </div>


    </div>


  </div>
</template>

<!-- <style>
dialog::backdrop {
  background: rgba(0, 0, 0, 0.6) !important;
}

dialog {
  background: transparent !important;
  color: inherit;
  border: none;
  outline: none;
}
</style> -->