<template>
  <section>
    <nav class="flex header px:10 md:px-20 stroke">
      <div class="mr-0 logo md:mr-20 ">
        <h1 class="px-3 md:px-5">
          <a href="/">Dark Knight</a>
        </h1>
      </div>

      <ul class="flex hidden gap-5 fill md:block ">
        <li><nuxt-link to="/home">Home</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/articles/">Portfolio</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li>
          <nuxt-link to="/contact">
            Contact us
            <!-- <transition name="slide-fade, list">
                <ul
                  class="w-48 p-4 list-reset octocat-wave bg-grey-light collapse-bg"
                >
                  <li>Example!</li>
                  <li>Example!</li>
                  <li>Example!</li>
                  <li>Example!</li>
                  <li>Example!</li>
                  <li>Example!</li>
                </ul>
              </transition> -->
          </nuxt-link>
        </li>
      </ul>
      <div class="flex hidden md:block">
        <div class="rounded-md shadow group">
          <a
            style="text-decoration:none;"
            href="#"
            class="items-center w-56 px-8 py-3 text-base font-medium text-black transition duration-700 ease-in-out transform bg-white border border-white rounded-md hover:shadow-xl hover:bg-transparent group-hover:text-black group-hover:opacity-75 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
      </div>

      <!-- Mobile-Menu -->
      <button
        @click="toggleSidebar()"
        class="block px-2 py-2 rounded-sm toggle-btn md:hidden hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-100 "
      >
        <font-awesome-icon
          icon="bars"
          class="text-black svg-bar"
          style="font-size: 30px"
        />
      </button>

      <transition name="slide-fade, list">
        <ul
          class="flex flex-col block gap-5 fill md:hidden menu-items mobile-menu"
          v-show="isOpenA"
        >
          <li @click="toggleSidebar()">
            <nuxt-link to="/home">Home</nuxt-link>
          </li>
          <li @click="toggleSidebar()">
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <li @click="toggleSidebar()">
            <nuxt-link to="/articles/">Portfolio</nuxt-link>
          </li>
          <li @click="toggleSidebar()">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li @click="toggleSidebar()">
            <nuxt-link to="/contact">Contact us</nuxt-link>
          </li>

          <div class="flex justify-center">
            <nuxt-link to="/contact">
              <button class="px-4 py-2 border border-white button--green">
                Get Started
              </button>
            </nuxt-link>
          </div>
        </ul>
      </transition>
    </nav>
  </section>
</template>

<script>
import Hero from "vue-hero";
import Vue from "vue";
Vue.use(Hero);
export default Vue.extend({
  data() {
    return {
      isOpenA: false,
      isOpenB: false
      // showA: false
    };
  },

  methods: {
    toggleSidebar() {
      this.isOpenA = !this.isOpenA;
    }
  }
});
</script>

<style scoped>
.toggle-btn {
  background-color: white;
  margin-right: 45px;
}

.toggle-btn:hover {
  background: rgb(183, 187, 183);
  transition: all 0.4s;
  transform: translate(10x);
}
.svg-bar {
  box-shadow: 0px 7px 28px white;
}
.header {
  height: 120px;
  background: black;
  transition: all 0.5s;
  box-shadow: 10px 7px 30px rgb(21 20 20);
  color: white;
  display: flex;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 100;
}

.mobile-menu {
  position: fixed;
  top: 118px;
  right: 15px;
  bottom: 12px;
  left: 15px;
  z-index: 9999;
  height: 77vh;
  display: flex;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.7);
  transition: ease-in-out 0.2s;
  opacity: 1;
  /* visibility: hidden; */
  border-radius: 10px;
  padding: 10px 0;
  border: 2px solid rgba(255, 255, 255, 0.12);
}

.logo {
  font: sans-serif;
  font-family: initial;
  margin-left: 10px;
  font-weight: 600;
  font-size: 40px;
  color: white;
}

.logo a:hover {
  color: #8a8888;
  text-decoration: none;
  /* background: rgb(83, 202, 231); */
  transition: all 2s;
}

nav ul {
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #aaa;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 10px;
}
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all 0.5s;
}
nav ul li a:hover {
  color: white;
}

/* stroke */
nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: rgb(100, 182, 100);
  height: 1px;
}
nav.stroke ul li a:hover:after {
  width: 100%;
}

/* logo */
h1 a {
  font-family: "Raleway";
}

nav.fill ul li a {
  transition: all 2s;
}

nav.fill ul li a:after {
  text-align: left;
  content: ".";
  margin: 0;
  opacity: 0;
}
nav.fill ul li a:hover {
  color: white;
  z-index: 1;
}
nav.fill ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}

.collapse-bg {
  background: #000;
  transition: ease-in-out 0.3s;
  opacity: 0.9;
  /* animation: octocat-wave 560ms ease-in-out; */
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

.flip-list-move {
  transition: transform 1s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.octocat-wave {
  transition: ease-in-out 0.3s;
}

@media (max-width: 500px) {
  .collapse-bg:hover .octo-arm {
    animation: none;
  }
  .collapse-bg .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

@media screen and (max-width: 791px) {
  .toggle-btn {
    display: block;
    text-align: right;
    float: right;
    margin-right: 40px;
  }
}
</style>
