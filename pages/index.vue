<template>
  <div class="main">
    <div
      class="px-6 py-5 mx-auto text-center mt-26 sm:p-6 max-w-7xl md:mt-0"
      data-aos="zoom-in-up"
      data-aos-offset="300"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-delay="0"
    >
      <!-- <h1 class="mt-10 mb-10 text-left text-white title">Dark Knight</h1> -->

      <h2 class="mt-24 text-5xl font-bold font-manrope">
        Introducing all new Web Fashion Blog Demo.
      </h2>
      <div class="flex justify-center mt-10 rounded-md shadow-sm">
        <a
          @click="showAnimated"
          href="#"
          class="flex items-center justify-center w-56 px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
        >
          Save demo
        </a>
      </div>
    </div>

    <section class="mt-20">
      <div class="px-6 py-5 mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div class="flex justify-center md:justify-start ">
            <img
              src="../assets/images/svg/undraw_in_no_time_6igu.svg"
              alt=""
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-delay="0"
              class="w-auto h-96"
            />
          </div>

          <div
            class="px-12 py-8 mt-12 transition ease-in-out transform bg-gray-900 rounded-md opacity-75 md:mt-0 duration-900 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-800 hover:scale-110"
          >
            <div class="">
              <h1
                class="text-left group-hover:text-white"
                data-aos="zoom-in-up"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-delay="0"
              >
                Blog Portfolio
              </h1>
              <hr class="mt-3 bg-white" />
              <p
                class="mt-10 text-xl text-left group-text-white"
                data-aos="zoom-in-down"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-delay="0"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, reiciendis hic quidem et optio molestiae animi
                adipisci iste facere distinctio! Earum rerum enim sunt quibusdam
                repudiandae. Recusandae voluptate ullam ab.
              </p>
              <hr class="mt-4 bg-white" />

              <div class="mt-10 text-left font-awesome-icon">
                <a href="#" class="flex items-center">
                  Read More
                  <font-awesome-icon
                    icon="arrow-right"
                    class="ml-3 "
                    style="font-size: 20px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-6 py-5 mx-auto mt-20 max-w-7xl">
        <div class="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div
            class="px-12 py-8 transition ease-in-out transform bg-gray-900 rounded-md opacity-75 duration-900 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-800 hover:scale-110"
          >
            <div class="">
              <h1
                class="text-left group-hover:text-white"
                data-aos="zoom-in-up"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-delay="0"
              >
                Blog Portfolio
              </h1>
              <hr class="mt-3 bg-white" />
              <p
                class="mt-10 text-xl text-left group-text-white"
                data-aos="zoom-in-down"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-delay="0"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, reiciendis hic quidem et optio molestiae animi
                adipisci iste facere distinctio! Earum rerum enim sunt quibusdam
                repudiandae. Recusandae voluptate ullam ab.
              </p>
              <hr class="mt-4 bg-white" />

              <div class="mt-10 text-left font-awesome-icon">
                <a href="#" class="flex items-center">
                  Read More
                  <font-awesome-icon
                    icon="arrow-right"
                    class="ml-3 "
                    style="font-size: 20px"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="flex justify-center md:flex-none">
            <img
              src="../assets/images/svg/fashion.svg"
              alt=""
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-delay="0"
              class="w-auto h-96"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="mt-2">
      <div class="px-6 py-5 mx-auto mb-20 max-w-7xl">
        <!-- <h4 class="font-sans text-5xl font-bold text-white">
          Explore more Blogs.
        </h4> -->
        <!-- Testimonials section -->
        <section class="mt-20 mb-40">
          <div class="px-6 py-4 mx-auto max-w-7xl">
            <div class="text-5xl font-bold text-white font-manrope">
              <h2
                data-aos="zoom-in-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                Testimonials
              </h2>
            </div>

            <no-ssr>
              <flickity>
                <div
                  class="mt-6"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-mirror="true"
                  data-aos-once="true"
                >
                  <div class="max-w-5xl px-4 py-5 mx-auto sm:p-6 carousel-cell">
                    <p
                      class="ml-0 -mt-6 text-base font-medium text-center text-gray-600 md:-mt-10 md:text-base md:ml-7"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>

                  <!-- Divider -->
                  <div class="flex justify-center mt-2">
                    <span class="w-1/4 border-b-2 border-gray-200" />
                  </div>

                  <!-- Profile -->
                  <div class="flex justify-center mx-auto mt-1 mb-6 max-w-7xl">
                    <div class="px-4 py-5 mb-4 sm:p-6">
                      <img
                        src="~assets/images/user-profile.svg"
                        class="ml-8 text-center rounded-full shadow cursor-pointer w-14 hover:shadow-2xl"
                        alt=""
                      />
                      <div>
                        <!-- <h4
                          class="mt-2 text-sm font-semibold text-center text-white"
                        >
                          Ruben White
                        </h4> -->
                        <span class="text-center text-white">
                          CEO,
                          <a
                            href="#"
                            class="text-xs text-yellow-500 transition-all duration-700 cursor-pointer hover:text-blue-600"
                            >Example.com</a
                          >
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full px-2 mt-6">
                  <div class="max-w-5xl px-4 py-5 mx-auto sm:p-6 carousel-cell">
                    <p
                      class="ml-0 -mt-6 text-base font-medium text-center text-gray-600 md:-mt-10 md:text-base md:ml-7"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>

                  <!-- Divider -->
                  <div class="flex justify-center mt-2">
                    <span class="w-1/4 border-b-2 border-gray-200" />
                  </div>

                  <!-- Profile -->
                  <div class="flex justify-center mx-auto mt-1 mb-6 max-w-7xl">
                    <div class="px-4 py-5 mb-4 sm:p-6">
                      <img
                        src="~assets/images/user-profile.svg"
                        class="ml-8 text-center rounded-full shadow cursor-pointer w-14 hover:shadow-2xl"
                        alt=""
                      />
                      <div>
                        <!-- <h4
                          class="mt-2 text-sm font-semibold text-center text-white"
                        >
                          Ruben White
                        </h4> -->
                        <span class="text-center text-white">
                          CEO,
                          <a
                            href="#"
                            class="text-xs text-yellow-500 transition-all duration-700 cursor-pointer hover:text-blue-600"
                            >Example.com</a
                          >
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full px-2 mt-6">
                  <div class="max-w-5xl px-4 py-5 mx-auto sm:p-6 carousel-cell">
                    <p
                      class="ml-0 -mt-6 text-base font-medium text-center text-gray-600 md:-mt-10 md:text-base md:ml-7"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>

                  <!-- Divider -->
                  <div class="flex justify-center mt-2">
                    <span class="w-1/4 border-b-2 border-gray-200" />
                  </div>

                  <!-- Profile -->
                  <div class="flex justify-center mx-auto mt-1 mb-6 max-w-7xl">
                    <div class="px-4 py-5 mb-4 sm:p-6">
                      <img
                        src="~assets/images/user-profile.svg"
                        class="ml-8 text-center rounded-full shadow cursor-pointer w-14 hover:shadow-2xl"
                        alt=""
                      />
                      <div>
                        <!-- <h4 class="mt-2 text-sm font-semibold text-center">
                          Ruben White
                        </h4> -->
                        <span class="text-center">
                          CEO,
                          <a
                            href="#"
                            class="text-xs text-yellow-500 transition-all duration-700 cursor-pointer hover:text-blue-600"
                            >Example.com
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </flickity>
            </no-ssr>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {};
  },
  mounted: function() {},

  methods: {
    showAnimated() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your demo work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
};
</script>

<style scoped>
.content-1 {
  z-index: 80;
  background: rgb(19 19 19);
  align-items: center;
  width: auto;
  opacity: 0.6;
  /* transition: ease-in-out 0.3s; */
}

.content-2 {
  box-shadow: 0px 1px 0 rgb(234 222 222);
}

/* .content-2:hover {
  box-shadow: 4px 1px 30px rgb(35 105 220 / 40%);
  transition: all 1s;
  border-radius: 10px;
  color: black;
  background: white;
  border-bottom: 5px solid #5f8ae6;
  transition: all 1.5s ease-in-out;
}

.content-1:hover {
  box-shadow: 4px 1px 30px rgb(35 105 220 / 40%);
  transition: all 1s;
  border-radius: 10px;
  color: black;
  background: white;
  border-bottom: 5px solid #5f8ae6;
  transition: all 1.5s ease-in-out;
} */

.font-awesome-icon:hover {
  transition: all 0.9s;
  color: rgb(15, 98, 223);
  transform: translateX(12px);
}

.main {
  font-family: "Open Sans", sans-serif;
  background-color: #040404;
  color: #fff;
  width: 100%;
  position: relative;
  opacity: 1;
  background-color: transparent;
}

.span-border {
  color: #fff;
  border-bottom: 2px solid #18d26e;
  padding-bottom: 6px;
}

@media (min-width: 1024px) {
  main::before {
    background-attachment: fixed;
  }
}

@media (min-width: 624px) {
  .fashion {
    display: ;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
  font-size: 40px;
}

.border {
  border: 1px solid black;
  padding: 40px 40px 40px 40px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  color: white;
  font-size: 60px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 200;
  font-size: 35px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  text-decoration: none;
}

a {
  text-decoration: none;
}

title {
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.subtitle {
  margin-bottom: 20px;
  font-size: 20px;
}

.text {
  max-width: 430px;
  line-height: 1.32;
}

.more-services .read-more a {
  color: #777777;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  transition: 1s;
}

.more-services .read-more a:hover {
  text-decoration: underline;
}

.more-services .card:hover .card-body {
  background: #3498db;
}

.button--white-custom {
  display: inline-block;
  font-size: 20px;
  color: #3b8070;
  text-decoration: none;
  padding: 5px 10px;
}
.button--white-custom:hover {
  color: rgb(44, 41, 41);
  text-decoration: none;
  transition: all 1.9s;
}
</style>
