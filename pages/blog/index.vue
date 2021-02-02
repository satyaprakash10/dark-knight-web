<template>
  <section>
    <div
      class="container grid mt-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-10"
    >
      <div class="mb-2 mt-10 text-left">
        <figure
          class="md:flex sm:bg-gray-100 rounded-xl p-8 md:p-0"
          style="background-color: #101010;"
        >
          <img
            class="w-32 h-32 md:w-60 md:h-auto md:rounded-none rounded-full mx-auto"
            src="../../assets/images/blogger/alex.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
            <blockquote>
              <p class="text-lg text-white font-semibold">
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
              class="px-4 octocat-wave hover:bg-white border border-bg-white py-2 button--green"
            >
              Learn more
            </button>
          </div>
        </figure>
      </div>
    </div>

    <div class="mt-10 mb:10">
      <h1 class="text-3xl text-white text-center">
        Check it out all new trending Blog's and Features now.
      </h1>

      <div class="mt-10 text-center mb-10">
        <a href="#" class="button--green border hover:bg-white border-bg-white">
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
