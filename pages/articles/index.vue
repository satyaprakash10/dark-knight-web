<template>
  <div class="mt-24">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="grid gap-10 mb-20 overflow-hidden md:px-16 grid:cols-1 md:grid-cols-3 group"
    >
      <div
        class="relative overflow-hidden transition-all duration-1000 transform bg-transparent rounded-md shadow-lg image hover:bg-emerald-100 hover:opacity-75 hover:rounded-md"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{
          backgroundImage: 'url(' + image + ')',
          width: '400px',
          height: '400px'
        }"
      >
        <div
          class="absolute z-10 w-full h-full transition duration-700 ease-in-out transform opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:bg-gray-200 hover:scale-110"
        >
          <div class="absolute top-0 bottom-0 left-0 right-0">
            <div
              class="flex items-center justify-center w-full h-full space-x-3"
            >
              <span
                class="flex items-center justify-center w-8 h-8 transition duration-500 bg-gray-900 rounded-full cursor-pointer hover:bg-blue-500"
              >
                <trash-icon class="right-0 justify-center w-5 h-5 text-white" />
              </span>

              <span
                class="flex items-center justify-center w-8 h-8 transition duration-500 bg-gray-900 rounded-full cursor-pointer hover:bg-blue-500"
              >
                <zoom-in-icon
                  class="right-0 justify-center w-5 h-5 text-white"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="text-left">
        <h6 class="text-lg font-medium text-gray-900 hover:text-blue-500">
          Derby Lane Estate
        </h6>
        <p class="text-sm font-normal text-gray-600">
          7940, Bunnel Hill road, Springboro, Ohio 45066
        </p>
      </div> -->
      <!-- <template v-slot:footer>

        </template> -->
    </div>

    <div class="px-6 mx-auto mt-24 max-w-7xl">
      <flickity>
        <img
          src="~/assets/images/client/client-1.png"
          alt=""
          height="200px"
          width="200px"
        />
        <img
          src="~/assets/images/client/client-2.png"
          alt=""
          height="200px"
          width="200px"
        /><img
          src="~/assets/images/client/client-3.png"
          alt=""
          height="200px"
          width="200px"
        /><img
          src="~/assets/images/client/client-4.png"
          alt=""
          height="200px"
          width="200px"
        /><img
          src="~/assets/images/client/client-5.png"
          alt=""
          height="200px"
          width="200px"
        /><img
          src="~/assets/images/client/client-6.png"
          alt=""
          height="200px"
          width="200px"
        />
        <img
          src="~/assets/images/client/client-7.png"
          alt=""
          height="200px"
          width="200px"
        />
        <img
          src="~/assets/images/client/client-8.png"
          alt=""
          height="200px"
          width="200px"
        />
      </flickity>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import { TrashIcon, ZoomInIcon } from "@vue-hero-icons/solid";
import Img1 from "@/assets/images/venue/venue-img-1.jpg";
import Img2 from "@/assets/images/venue/venue-img-2.jpg";
import Img3 from "@/assets/images/venue/venue-img-3.jpg";
import Img4 from "@/assets/images/venue/venue-img-4.jpg";
import Img5 from "@/assets/images/venue/venue-img-5.jpg";
import Img6 from "@/assets/images/venue/venue-img-6.jpg";

export default {
  data: function() {
    return {
      images: [Img1, Img2, Img3, Img4, Img5, Img6],
      index: null
    };
  },

  components: {
    gallery: VueGallery,
    TrashIcon,
    ZoomInIcon
  },

  methods: {
    removePicture(image) {
      if (image) {
        swal({
          title: "Are you sure?",
          text: "You will not be able to recover this photo after its deleted.",
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          icon: "error",
          iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>`,
          showCancelButton: true
        });
      }
    }
  }
};
</script>

<style scoped>
image {
  margin-top: 4rem;
}

.blueimp-gallery {
  background: rgba(0, 0, 0, 0.8);
}
</style>
