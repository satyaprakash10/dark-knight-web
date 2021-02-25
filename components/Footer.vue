<template>
  <div>
    <footer class="footer">
      <div
        class="flex-none mt-10 mb-16 title md:space-x-40 md:flex md:ustify-between"
      >
        <div>
          <a
            href=""
            class="flex font-sans text-2xl font-semibold text-white md:text-5xl"
          >
            Dark Knight
          </a>

          <!-- Social Media -->
          <div class="mt-6 md:mt-8">
            <div class="flex items-center justify-start space-x-4">
              <a
                :href="`https://www.instagram.com/`"
                data-aos="animation-translate-y"
                target="_blank"
                class="transition-all duration-500 transform rounded-full cursor-pointer hover-rounded-full hover:scale-90 hover:shadow-2xl hover:text-gray-900"
              >
                <social-instagram-icon
                  class="w-12 h-auto text-white bg-gray-400 rounded-full hover:bg-indigo-400"
                />
              </a>
              <a
                :href="`https://www.twitter.com`"
                data-aos="animation-translate-y"
                data-aos-delay="400"
                target="_blank"
                class="transition-all duration-500 transform rounded-full cursor-pointer hover-rounded-full hover:scale-90 hover:shadow-2xl hover:text-gray-900"
              >
                <social-twitter-icon
                  class="w-12 h-auto text-white bg-gray-400 rounded-full hover:bg-indigo-400"
                />
              </a>

              <a
                data-aos="animation-translate-y"
                data-aos-delay="600"
                target="_blank"
                class="transition-all duration-500 transform rounded-full cursor-pointer hover-rounded-full hover:scale-90 hover:shadow-2xl hover:text-gray-900"
              >
                <social-linkd-in-icon
                  class="w-12 h-auto text-white bg-gray-400 rounded-full hover:bg-indigo-400 "
                />
              </a>
            </div>
          </div>
        </div>

        <div class="flex mt-14 md:mt-0">
          <div class="grid grid-cols-2 gap-16 md:grid-cols-4">
            <!-- Company -->
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <h6 class="text-base font-medium text-white">Company</h6>
              <ul class="flex flex-col text-sm font-normal list-none">
                <nuxt-link
                  to="/about"
                  class="mt-4 text-white transition-all duration-500 transform cursor-pointer hover:text-white"
                >
                  About us
                </nuxt-link>
                <nuxt-link
                  to="/"
                  class="mt-4 text-white transition-all duration-500 transform cursor-pointer hover:text-white"
                >
                  Blog
                </nuxt-link>
                <nuxt-link
                  to="/contact"
                  class="mt-4 text-white transition-all duration-500 transform cursor-pointertext-white hover:text-white"
                >
                  Contact Us
                </nuxt-link>
              </ul>
            </div>

            <!-- Support -->
            <div
              class="mt-0"
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <h6 class="text-base font-medium text-white">Support</h6>
              <ul class="mt-4 text-sm font-normal list-none">
                <li
                  class="mt-4 text-white transition-all duration-500 transform cursor-pointer hover:text-white"
                >
                  <nuxt-link to="/terms-conditions">
                    Terms & Conditions
                  </nuxt-link>
                </li>
                <li
                  class="mt-4 text-white transition-all duration-500 transform cursor-pointer hover:text-white"
                >
                  <nuxt-link to="/privacy-policy"> Privacy Policy </nuxt-link>
                </li>
                <li
                  class="mt-4 text-white transition-all duration-500 transform cursor-pointer hover:text-white"
                >
                  Legal
                </li>
              </ul>
            </div>

            <!-- Reach Us -->
            <div
              class="col-span-2"
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <h6 class="text-base font-medium text-white">Reach Us</h6>
              <ul class="mb-4 text-sm font-normal list-none">
                <li
                  class="flex mt-4 text-white duration-500 cursor-pointer hover:text-white"
                >
                  <mail-icon
                    class="w-6 h-auto mr-2 text-white hover:text-white"
                  />
                  support@quiktract.com
                </li>
                <li
                  class="flex mt-4 text-white duration-500 cursor-pointer hover:text-white"
                >
                  <device-mobile-icon
                    class="mr-2 text-white hover:text-white"
                  />
                  123 123 123
                </li>
                <li
                  class="flex mt-4 text-white transition-all duration-500 cursor-pointer hover:text-white"
                >
                  <location-marker-icon
                    class="mr-2 text-white hover:text-white"
                  />
                  123 Jackson Street Ave Walnut, CA 91789
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  LocationMarkerIcon,
  DeviceMobileIcon,
  MailIcon
} from "@vue-hero-icons/solid";
import SocialInstagramIcon from "../components/Instagram";
import SocialLinkdInIcon from "../components/LinkedIn";
import SocialTwitterIcon from "../components/Twitter";
export default {
  components: {
    LocationMarkerIcon,
    DeviceMobileIcon,
    SocialInstagramIcon,
    SocialTwitterIcon,
    SocialLinkdInIcon,
    MailIcon
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  background: #000;
  height: auto;
  position: absolute;
  border-top: 1px solid white;
  z-index: 100;
  justify-content: space-around;
  display: flex;
  align-items: baseline;
}

.title {
  /* display: flex; */
  /* justify-content: flex-end; */
  margin-top: 60px;
  /* align-items: center; */
  margin-right: 53px;
}

h4 a {
  color: white;
  font-family: initial;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.icon-link {
  background: white;
  padding: 10px 10px;
  margin: 5px;
}
.icon-link:hover {
  /* background-color: cyan; */
  transition: all 0.6s;
}
</style>
