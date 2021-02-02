<template>
  <section>
    <footer class="footer">
      <div class="title">
        <h4>
          <a href="#"><small>@</small>Powered by India.</a>
        </h4>
      </div>

      <div class="social-media rounded-sm flex shadow shadow-md">
        <a href="" class="icon-link py-1 pb-0 px-1 items-center">
          <font-awesome-icon
            icon="check"
            class="text-black hover:text-blue-800 mt-2"
            style="font-size: 20px"
        /></a>

        <a href="" class="icon-link py-2 pb-0 px-2 items-center">
          <font-awesome-icon
            icon="id-card"
            class="text-black hover:text-blue-800"
            style="font-size: 20px"
        /></a>

        <a href="" class="icon-link py-2 pb-0 px-2 items-center">
          <font-awesome-icon
            icon="address-book"
            class="text-black hover:text-blue-800"
            style="font-size: 20px"
        /></a>
        <a href="" class="icon-link py-2 pb-0 px-2 items-center">
          <font-awesome-icon
            icon="circle"
            class="text-black hover:text-blue-800"
            style="font-size: 20px"
        /></a>
      </div>

      <!-- div class="address grid grid-cols-3 md:grid-cols-2 gap-10">
        <h1><span>California</span></h1>
        <p>
          shop no - 23242, hayat street road side, center of the city,
        </p>

        <small> guiana-3423000</small>
      </div> -->
    </footer>
  </section>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.footer {
  width: 100%;
  background: #000;
  height: 130px;
  position: absolute;
  border-top: 1px solid white;
  z-index: 100;
  justify-content: space-around;
  display: flex;
  align-items: baseline;
}

.title {
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
  align-items: center;
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

small {
  color: white;
}

a:hover {
  color: cyan;
  transition: all 1.5s;
  text-decoration: none;
  /* margin: 2px 5px; */
}

a:hover ::after {
  color: cyan;
}

.social-media {
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

.address {
}

h1 {
  color: rgb(175, 175, 175);
  font-size: 24px;
}
p {
  color: rgb(252, 241, 241);
  font-size: 20px;
}
small {
  color: rgb(189, 178, 178);
  font-size: 20px;
}
</style>
