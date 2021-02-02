<template>
  <div class="main">
    <div
      class="container section-title px-10 md:mt-0 mt-10 w-auto py-5 items-center"
    >
      <!-- <h1 class="title mb-10 text-left mt-10 text-white">Dark Knight</h1> -->

      <h2 class="text-xl">
        Passionate
        <span class="text-2xl mb-0 sm:mb-5">
          Fashion Blogger
        </span>
        from India
      </h2>
    </div>

    <div class="container flex items-center mt-20">
      <div class="grid grid-cols-1 md:grid-cols-2 px-10 gap-20">
        <div class="image pl-0" data-aos="fade-right" data-aos-delay="150">
          <img
            src="../assets/images/svg/undraw_in_no_time_6igu.svg"
            alt=""
            class="img-fluid mt-20 px-2 flex w-80 digital"
          />
        </div>

        <div
          class="px-10 py-2 content-2"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div class="row">
            <h1 class="text-left hover:text-black">Blog Portfolio</h1>
            <hr class="mt-3" />
            <p class="text-gray-400 text-left text-xl mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, reiciendis hic quidem et optio molestiae animi adipisci
              iste facere distinctio! Earum rerum enim sunt quibusdam
              repudiandae. Recusandae voluptate ullam ab.
            </p>
            <hr class="mt-4 text-white" />

            <div class="read-more button--white-custom mt-10">
              <a href="#" class="flex items-center">
                Read More
                <font-awesome-icon
                  icon="arrow-right"
                  class="ml-3 font-awesome-icon"
                  style="font-size: 20px"
                />
              </a>
              <div class="circle "></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-40">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div
          class="px-10 py-2 mt-24 content-2 mb-20"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div class="row">
            <h1 class="text-left hover:text-black">
              Fashion Blog
            </h1>
            <hr class="mt-3" />
            <p class="text-gray-400 text-left text-xl mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, reiciendis hic quidem et optio molestiae animi adipisci
              iste facere distinctio! Earum rerum enim sunt quibusdam
              repudiandae. Recusandae voluptate ullam ab.
            </p>
            <hr class="mt-4 text-white" />

            <div class="read-more button--white-custom mt-10">
              <a href="#" class="flex items-center">
                Read More
                <font-awesome-icon
                  icon="arrow-right"
                  class="ml-3 font-awesome-icon "
                  style="font-size: 20px"
                />
              </a>
              <div class="circle2"></div>
            </div>
          </div>
        </div>

        <div class="image" data-aos="fade-right" data-aos-delay="150">
          <img
            src="../assets/images/svg/fashion.svg"
            alt=""
            class="img-fluid sm:px-2 flex md:px-40 hover:text-blue-700 fashion"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import { gsap } from "gsap";
export default {
  data() {
    return {
      gsap: ""
    };
  },
  mounted: function() {
    gsap.to(".circle", { x: 600, duration: 3 });
    gsap.to(".circle2", { x: 600, duration: 3 });
    gsap.to(".fashion", { x: -110, duration: 3 });
    gsap.to(".digital", { x: 110, duration: 3 });
  }
};
</script>

<style scoped>
.circle {
  background-color: rgb(238, 226, 226);
  height: 1em;
  width: 1em;
  border-radius: 100%;
}

.circle2 {
  background-color: rgb(238, 226, 226);
  height: 1em;
  width: 1em;
  border-radius: 100%;
}

.circle2:hover {
  background-color: rgb(31, 5, 92);
}

.circle1:hover {
  background-color: rgb(31, 5, 92);
}

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

.content-2:hover {
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
}

.font-awesome-icon:hover {
  transition: all 0.9s;
  color: rgb(15, 98, 223);
  transform: translateX(12px);
}

.img-fluid:hover {
  opacity: 0.7;
  transition: all 1.4s;
  /* border-bottom: 1px solid rgb(234 222 222); */
  transform: translateX(13px);
}

.img-fluid::after:hover {
  opacity: 0.7;
  transition: all 0.7s;
  box-shadow: 7px 1px 30px;
  transform: translateX(13px);
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
