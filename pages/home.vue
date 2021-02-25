<template>
  <div>
    <section class="main-content">
      <!-- Ctn-section -->

      <div class="bg-gray-50 cta">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            <span class="block mb-6 text-white">Ready to dive in?</span>
            <span class="block text-indigo-600">
              Welcome to the World of Fashion & Blog. .</span
            >
          </h2>
          <div
            class="flex mt-8 lg:mt-0 lg:flex-shrink-0"
            data-aos="zoom-in-up"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                @click="showHelloWorld"
                style="text-decoration:none;"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white transition-all duration-500 bg-transparent border border-transparent rounded-md hover:bg-black hover:opacity-75"
              >
                Start Demo
              </a>
            </div>
            <div class="inline-flex ml-3 rounded-md shadow">
              <a
                style="text-decoration:none;"
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- servies -->
      <div
        class="container mb-20 services"
        data-aos="zoom-in"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <div class="mt-20 row group">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon">
                <font-awesome-icon
                  icon="calendar"
                  class="text-white group-hover:text-black"
                  style="font-size: 30px"
                />
              </div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div
            class="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch mt-md-0"
          >
            <div class="icon-box">
              <div class="icon">
                <font-awesome-icon
                  icon="dollar-sign"
                  class="text-white hover:text-black"
                  style="font-size: 30px"
                />
              </div>
              <h4><a href="">Sed ut perspiciatis</a></h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div
            class="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch mt-lg-0"
          >
            <div class="icon-box">
              <div class="icon">
                <font-awesome-icon
                  icon="adjust"
                  class="text-white hover:text-black"
                  style="font-size: 30px"
                />
              </div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>

          <div class="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon">
                <font-awesome-icon
                  icon="circle"
                  class="text-white hover:text-black"
                  style="font-size: 30px"
                />
              </div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>

          <div class="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon">
                <font-awesome-icon
                  icon="check"
                  class="text-white hover:text-black"
                  style="font-size: 30px"
                />
              </div>
              <h4><a href="">Dele cardo</a></h4>
              <p>
                Quis consequatur saepe eligendi voluptatem consequatur dolor
                consequuntur
              </p>
            </div>
          </div>

          <div class="mt-4 col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon">
                <font-awesome-icon
                  icon="cog"
                  class="text-white hover:text-black font-awesome-icon"
                  style="font-size: 30px"
                />
              </div>
              <h4><a href="">Divera don</a></h4>
              <p>
                Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                sit aspernatur
              </p>
            </div>
          </div>
        </div>
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
  methods: {
    showHelloWorld() {
      Swal.fire("Good job!", "You clicked the button!", "success");
      // Use sweetalert2
      // this.$swal("Hello Vue world!!!");
    }
  }
};
</script>

<style>
.flickity-button {
  display: none;
}

.swiper-wrapper {
  display: flex;
}

.main-content {
  margin: 6% 0px 0 0px;
  text-align: center;
}

h1 {
  font-size: 30px;
  font-family: initial;
  font-weight: 600;
  /* margin-bottom: 20px; */
}

a {
  text-decoration: none;
}

.font-awesome-icon:hover {
  color: rgb(78, 185, 78);
}
.img-section {
  background-size: cover;
  padding: 60px 0;
  right: 0;
  background-image: url("../assets/images/bg-wall.jpg");
  left: 0;
}

/* // Cta  */
.cta {
  background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/cta-bg.jpg") fixed center center;
  background-size: cover;
  padding: 60px 0;
  left: 0;
  right: 0;
}

.cta h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}

.cta p {
  color: #fff;
}

/* Services */
.services .icon-box {
  text-align: center;
  border: 1px solid #ebebeb;
  padding: 80px 20px;
  transition: all ease-in-out 0.3s;
  background: transparent;
  box-shadow: (1px 10px 12px 0) white;
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: black;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: 0.3s;
}

.services .icon-box .icon:hover {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #fcd382;
  border-radius: 4px;
  transition: all 1.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: 0.3s;
}
.services .icon-box .icon i {
  color: #151515;
  font-size: 28px;
  transition: ease-in-out 0.3s;
}

.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.services .icon-box h4 a {
  color: #151515;
  transition: ease-in-out 0.3s;
}

.services .icon-box h4 a:hover {
  color: #ffc451;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  border-color: #fff;
  box-shadow: 0 0 11px 0px rgb(230 207 207);
  transform: translateY(-10px);
}

.services .icon-box:hover {
  background: white;
  border-color: blue;
}

.services .icon-box:hover .icon {
  background: #fff;
}

.services .icon-box:hover .icon i {
  color: black;
}

.services .icon-box:hover .icon::before {
  background: black;
}

/* bloger-slider */
.bloger {
  background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/cta-bg.jpg") fixed center center;
  background-size: cover;
  padding: 60px 0;
  left: 0;
  display: flex;
  right: 0;
}

.example {
  height: auto;
}
.toolbar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
}
button {
  flex: 1;
  padding: 0;
  margin: 0;
  border: none;
  border-right: 1px solid gray;
  background-color: gray;
  cursor: pointer;
}
&:last-child {
  border: none;
}

&:hover {
  background-color: black;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  min-height: 320px;
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 50%;
  margin: -40px 0 0 40px;
  position: relative;
  z-index: 2;
  border: 6px solid rgba(255, 255, 255, 0.12);
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 45px;
  color: #fff;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: white;
  margin: 0 0 0 45px;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: white;
  font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 15px 0 15px;
  padding: 20px 20px 60px 20px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  border-radius: 6px;
  position: relative;
  z-index: 1;
}

.testimonials .owl-nav,
.testimonials .owl-dots {
  margin-top: 5px;
  text-align: center;
}

.testimonials .owl-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3) !important;
}

.testimonials .owl-dot.active {
  background-color: black !important;
}

@media (max-width: 767px) {
  .testimonials {
    margin: 30px 10px;
  }
}
</style>
