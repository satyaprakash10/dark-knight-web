<template>
  <section class="">
    <div class="px-6 py-4 mx-auto mt-24 max-w-7xl">
      <div
        class="grid grid-cols-1 gap-10 mb-2 text-left lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-2"
      >
        <figure
          class="p-8 md:flex sm:bg-gray-100 rounded-xl md:p-0"
          style="background-color: #101010;"
        >
          <img
            class="w-32 h-32 mx-auto rounded-full md:w-56 md:h-auto md:rounded-none"
            src="../../assets/images/blogger/alex.jpg"
            alt=""
            width="384"
            height="300"
          />
          <div class="pt-6 space-y-4 text-left md:p-8 md:text-left">
            <blockquote>
              <p class="text-lg font-medium text-white">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, repellendus mollitia! Illum harum eaque
                molestiae maiores, error quis unde, est quisquam totam dolorum
                sint reiciendis facilis omnis ipsa laboriosam similique..”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-gray-100">
                Sarah Dayan
              </div>
              <div class="text-gray-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
            <button
              class="px-4 py-2 text-black transition duration-700 bg-white rounded-md border-outline-none focus hover:bg-gray-600 "
            >
              Learn more
            </button>
          </div>
        </figure>
      </div>
    </div>

    <div class="mt-10 mb:10">
      <h1 class="text-3xl text-center text-white">
        Check it out all new trending Blog's and Features now.
      </h1>

      <div class="mt-10 mb-10 text-center">
        <a href="#" class="border button--green hover:bg-white border-bg-white">
          <nuxt-link to="blog/create">Add New Blog</nuxt-link>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
