<template>
  <section class="bg-black">
    <h1 class="mt-20 mb-5 text-3xl text-center text-white">
      Check it out all new Portfolio.
    </h1>

    <!-- Portfolio -->
    <div class="portfolio">
      <div class="container">
        <div class="text-center section-title ">
          <h2>Portfolio</h2>
          <p class="text-white">My Works</p>

          <nuxt-link
            to="/vue-gallery"
            style="text-decoration:none;"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white transition-all duration-500 bg-transparent border border-transparent rounded-md hover:bg-black hover:opacity-75"
          >
            Explore Now
          </nuxt-link>
        </div>

        <div
          class="px-20 py-10 mb-10 rounded-lg shadow shadow-lg row portfolio-container"
          style="background-color: rgb(16 15 15);"
        >
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="App 1"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="More Details"
                    ><font-awesome-icon
                      icon="link"
                      class="text-white"
                      style="font-size: 30px"
                  /></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="More Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="App 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-info" title="More Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Card 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-info" title="More Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-info" title="More Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="App 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-info" title="More Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Card 1"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="More Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Card 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="More Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="More Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="../../assets/images/car.png" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/img1.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Card 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="More Details">
                    <font-awesome-icon
                      icon="link"
                      class="text-white"
                      style="font-size: 30px"
                  /></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                src="../../assets/images/cta-bg.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/about.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><font-awesome-icon
                      icon="link"
                      class="text-white"
                      style="font-size: 30px"
                  /></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                src="../../assets/images/testimonials-bg.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    src="../../assets/images/about.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    src="../../assets/images/car.png"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><font-awesome-icon
                      icon="link"
                      class="text-white"
                      style="font-size: 30px"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "swiper-example-centered-slides",
  title: "Centered slides",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },

  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 4,
      spaceBetween: 5
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.swiper-slide {
  /* width: 60%; */
}
.swiper-slide:nth-child(2n) {
  /* width: 40%; */
}
.swiper-slide:nth-child(3n) {
  /* width: 20%; */
}

.clients {
  padding-top: 20px;
}

.clients {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.clients {
  width: 70%;
  opacity: 0.5;
  transition: 0.5s;
  -webkit-filter: grayscale(100);
  filter: grayscale(100);
}

.clients:hover {
  -webkit-filter: none;
  /* box-shadow: 2px 0 25px 0 rgba(0, 0, 0, 0.1); */
  transform: translateY(-10px);
  cursor: pointer;
  filter: none;
  opacity: 1;
}

.clients,
.clients-dots {
  margin-top: 5px;
  text-align: center;
}

.clients-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd !important;
}

.clients-dot.active {
  background-color: #ffc451 !important;
}

/* Portfolio */
.portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 15px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 16px 10px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 3px 10px 3px;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
  background: #18d26e;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}

.portfolio .portfolio-wrap::before {
  content: "";
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  transition: all ease-in-out 0.3s;
  z-index: 2;
  opacity: 0;
}

.portfolio .portfolio-wrap .portfolio-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio .portfolio-wrap .portfolio-info::before {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  top: 35px;
  left: 35px;
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio .portfolio-wrap .portfolio-info::after {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 35px;
  right: 35px;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio .portfolio-wrap .portfolio-info h4 {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
}

.portfolio .portfolio-wrap .portfolio-info p {
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.portfolio .portfolio-wrap .portfolio-links {
  text-align: center;
  z-index: 4;
}

.portfolio .portfolio-wrap .portfolio-links a {
  color: #fff;
  margin: 0 2px;
  font-size: 28px;
  display: inline-block;
  transition: 0.3s;
}

.portfolio .portfolio-wrap .portfolio-links a:hover {
  color: #63eda3;
}

.portfolio .portfolio-wrap:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info {
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info::before {
  top: 15px;
  left: 15px;
}

.portfolio .portfolio-wrap:hover .portfolio-info::after {
  bottom: 15px;
  right: 15px;
}
</style>
