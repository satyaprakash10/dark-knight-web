<template>
  <section class="px-24 theme">
    <h1
      class="text-white lg:text-3xl font-medium mb-10 mt-14 text-2xl md:text-2xl"
    >
      Create a New Blog
    </h1>
    <hr class="mt-3" />

    <div
      class="grid grid-cols-2 mt-2 w-full xl:w-1/3 form-container rounded-lg mb-20"
    >
      <div class="col-span-12 md:col-span-8 md:mt-0">
        <form action="post" @submit.prevent="handleSubmitBlog">
          <div class="px-10 py-12 ">
            <div class="mb-5">
              <label
                for="firstName"
                class="mr-10 text-gray-400 text-2xl"
                place-holder="Enter your First name"
                >First Name</label
              >
              <input
                type="text"
                v-model="formData.firstName"
                class="form-input w-full text-md rounded w-full py-2 px-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10 hover:bg-blue-100 focus:border-blue-500"
              />
              <div
                v-if="submitBlog && !$v.formData.firstName.required"
                class="text-red-500 mt-2"
              >
                First Name is required
              </div>
            </div>

            <div class="mb-5">
              <label
                for="lastName"
                class="mr-10 text-gray-400 text-2xl"
                place-holder="Enter your Last name"
                >Last Name</label
              >
              <input
                type="text"
                v-model="formData.lastName"
                class="form-input w-full text-md rounded w-full py-2 px-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10 hover:bg-blue-100 focus:border-blue-500"
              />
              <div
                v-if="submitBlog && !$v.formData.firstName.required"
                class="text-red-500 mt-2"
              >
                Last Name is required
              </div>
            </div>

            <div class="mb-5">
              <label
                for="email"
                class="mr-10 text-gray-400 text-2xl"
                aria-placeholder="Your Email address"
                >Email</label
              >
              <div
                v-if="submitBlog && !$v.formData.firstName.required"
                class="text-red-500 mt-2"
              >
                Email is required
              </div>

              <input
                type="text"
                v-model="formData.email"
                class="form-input w-full text-md rounded py-2 px-4 w-full text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10 hover:bg-blue-100  focus:border-blue-500"
              />
            </div>

            <div class="">
              <label
                for="blogTitle"
                class="mr-10 text-gray-400 text-2xl"
                placeholder="Blog Name"
                >Blog Title</label
              >
              <input
                type="text"
                v-model="$v.formData.blogTitle"
                class="form-input w-full text-md rounded w-full py-2 px-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10 hover:bg-blue-100  focus:border-blue-500"
              />

              <div
                v-if="submitBlog && !$v.formData.blogTitle.required"
                class="text-red-500 mt-2"
              >
                Blog Title is required
              </div>
            </div>

            <hr class="mt-5 border-t-1 border-white" />

            <div class="flex mt-10 pb-3">
              <button
                class="uppercase text-xl text-black button--green border-white"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue
} from "vuelidate/lib/validators";
export default Vue.extend({
  mixins: [validationMixin],

  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        blogTitle: ""
      },
      submitBlog: false
    };
  },
  validations: {
    formData: {
      firstName: { required, minLength: minValue(3) },
      lastName: { required },
      email: { required, email },
      blogTitle: {
        required,
        minValue: minValue(0),
        maxLength: maxLength(20)
      }
      // password: { required, minLength: minLength(6) },
      // confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },

  computed() {},

  methods: {
    handleSubmitBlog(e) {
      console.log(this.$invalid);
      this.submitBlog = true;
      this.$v.formData.$touch();

      if (this.$v.formData.$invalid) {
        return;
      }
      // this.submitBlog = true;
      this.$axios
        .post("/api/users", {
          ...(this.formData = { ...this.formData })
        })
        .then(response => {
          console.log(response);
          return "index";
        })
        .catch(error => {
          this.$v.$touch();
          if (this.$v.$invalid) {
            return;
          }
          console.log(error);
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
        });
    }
  }
});
</script>

<style scoped>
.form-container {
  background: rgb(19 19 19);
  opacity: 0.9;
}
.form-input {
  border-width: 1px;
  border-color: black;
}

.theme {
  font-family: "Open Sans", sans-serif;
  background-color: #040404;
  color: #fff;
  width: 100%;
  height: 100vh;
  /* position: fixed; */
  opacity: 1;
  background-color: transparent;
  /* background: url("../../assets/images/cta-bg.jpg") top right no-repeat; */
}
</style>
