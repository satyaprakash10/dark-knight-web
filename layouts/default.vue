<template>
  <section>
    <Header />
    <transition>
      <button
        name="slide-fade"
        @click="topFunction()"
        id="myBtn"
        title="Go to top"
        class="button--green top"
      >
        <font-awesome-icon
          icon="arrow-up"
          class="text-black hover:text-green-600"
          style="font-size: 30px"
        />
      </button>
    </transition>

    <transition>
      <div
        class="bg-no-repeat bg-contain main-content"
        style="margin-top:7rem;"
      >
        <Nuxt />
      </div>
    </transition>

    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Vue from "vue";
export default Vue.extend({
  components: {
    Header,
    Footer
  },

  data() {
    return {
      showA: false,
      mybutton: null
    };
  },

  mounted() {
    this.mybutton = document.getElementById("myBtn");
    window.onscroll = function() {
      this.scrollFunction();
    }.bind(this);
  },

  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.mybutton.style.display = "block";
      } else {
        this.mybutton.style.display = "none";
      }
    },

    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
});
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "oxygen";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.theme {
  font-family: "Open Sans", sans-serif;
  background: rgb(19 19 19);
  color: #fff;
  width: 100%;
  height: auto;
  position: relative;
  opacity: 1;
  /* background-color: transparent; */
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Section General */
section {
  overflow: hidden;
}

.section-title {
  padding-bottom: 40px;
}

.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  font-family: "Poppins", sans-serif;
}

.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #ffde9e;
  margin: 4px 10px;
}

.section-title h2:hover {
  transform: translateX(5px);
  transition: all 0.9s;
}

.section-title p {
  margin: 0;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #151515;
}

.layout {
  transition: all 0.5s;
}

/* scrol_btn/ */
.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

#myBtn {
  display: none;
  position: fixed;
  bottom: 82px;
  right: 30px;
  z-index: 150;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: white;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  transition: all 1.5s;
}

#myBtn:hover {
  background-color: transparent;
  border: rgb(98, 161, 98);
  color: rgb(98, 161, 98);
  animation: initial ease-in;
  border: 1px solid #0c0f0e;
  transform: translate(1px);
}

.top:hover {
  transition: all 0.5s;
  color: rgb(98, 161, 98);
}

@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  font-size: 20px;
  border: 1px solid #0c0f0e;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  text-decoration: none;
  background-color: rgb(14, 4, 4);
  transition: all 0.5s;
  border: 1px solid rgb(98, 161, 98);
  /* opacity: ; */
}

.button--white {
  display: inline-block;
  border-radius: 4px;
  font-size: 20px;
  border: 1px solid white;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--white:hover {
  color: black;
  text-decoration: none;
  background-color: rgb(54, 52, 52);
  transition: all 0.9s;
  border: 1px solid white;
  /* opacity: ; */
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #fff;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/*  Layout */
.main-content {
  transition: all 0.5s;
  height: 100%;
  width: 100%;
  background: #000;
  min-height: calc(140vh - 80px);
  /* background: url("../assets/images/dekstop-theme.svg"); */
}
</style>
