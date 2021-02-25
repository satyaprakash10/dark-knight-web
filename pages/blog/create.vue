<template>
  <section class="mt-20 mb-20 theme">
    <div class="px-6 py-5 mx-auto max-w-7xl">
      <h6
        class="mb-10 font-sans text-2xl font-semibold text-white lg:text-4xl mt-14 md:text-4xl"
      >
        Create a New Blog
      </h6>
      <hr class="mt-3 mb-5 bg-white max-3xl" />

      <div
        class="grid grid-cols-2 gap-6 rounded-lg opacity-75 md:grid-cols-1 xl:w-1/2"
      >
        <div
          class="flex items-center justify-between cols-span-8 md:cols-span-12"
        >
          <div class="h-full md:mt-0">
            <form action="post" @submit.prevent="handleSubmitBlog">
              <div class="px-10 py-6">
                <div class="mb-3 text-left">
                  <label
                    for="firstName"
                    class="mr-10 text-2xl text-gray-400"
                    place-holder="Enter your First name"
                    >First Name</label
                  >
                  <input
                    type="text"
                    v-model="formData.firstName"
                    class="w-full h-10 px-4 py-2 leading-tight text-gray-700 bg-gray-100 rounded form-input text-md focus:outline-none focus:shadow-outline hover:bg-blue-100 focus:border-blue-500"
                  />
                  <div
                    v-if="submitBlog && !$v.formData.firstName.required"
                    class="mt-2 text-red-500"
                  >
                    First Name is required
                  </div>
                </div>

                <div class="mb-3 text-left">
                  <label
                    for="lastName"
                    class="mr-10 text-2xl text-gray-400"
                    place-holder="Enter your Last name"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    v-model="formData.lastName"
                    class="w-full h-10 px-4 py-2 leading-tight text-gray-700 bg-gray-100 rounded form-input text-md focus:outline-none focus:shadow-outline hover:bg-blue-100 focus:border-blue-500"
                  />
                  <div
                    v-if="submitBlog && !$v.formData.firstName.required"
                    class="mt-2 text-red-500"
                  >
                    Last Name is required
                  </div>
                </div>

                <div class="mb-3 text-left">
                  <label
                    for="email"
                    class="mr-10 text-2xl text-gray-400"
                    aria-placeholder="Your Email address"
                    >Email</label
                  >
                  <div
                    v-if="submitBlog && !$v.formData.firstName.required"
                    class="mt-2 text-red-500"
                  >
                    Email is required
                  </div>

                  <input
                    type="text"
                    v-model="formData.email"
                    class="w-full h-10 px-4 py-2 leading-tight text-gray-700 bg-gray-100 rounded form-input text-md focus:outline-none focus:shadow-outline hover:bg-blue-100 focus:border-blue-500"
                  />
                </div>

                <div class="text-left">
                  <label
                    for="blogTitle"
                    class="mr-10 text-2xl text-gray-400"
                    placeholder="Blog Name"
                    >Blog Title</label
                  >
                  <input
                    type="text"
                    v-model="$v.formData.blogTitle"
                    class="w-full h-10 px-4 py-2 leading-tight text-gray-700 bg-gray-100 rounded form-input text-md focus:outline-none focus:shadow-outline hover:bg-blue-100 focus:border-blue-500"
                  />

                  <div
                    v-if="submitBlog && !$v.formData.blogTitle.required"
                    class="mt-2 text-red-500"
                  >
                    Blog Title is required
                  </div>
                </div>

                <hr class="mt-5 border-white border-t-1" />

                <div class="flex pb-3 mt-10 mb-20">
                  <button
                    @click="selectOption"
                    class="px-4 py-2 text-xl text-black uppercase bg-blue-500 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";
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
      fruit: "",
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
    },

    async selectOption() {
      const { value: fruit } = await Swal.fire({
        title: "Select field validation",
        input: "select",
        inputOptions: {
          Fruits: {
            apples: "Apples",
            bananas: "Bananas",
            grapes: "Grapes",
            oranges: "Oranges"
          },
          Vegetables: {
            potato: "Potato",
            broccoli: "Broccoli",
            carrot: "Carrot"
          },
          icecream: "Ice cream"
        },
        inputPlaceholder: "Select a fruit",
        showCancelButton: true,
        inputValidator: value => {
          return new Promise(resolve => {
            if (value === "oranges") {
              resolve();
            } else {
              resolve("You need to select oranges :)");
            }
          });
        }
      });

      if (fruit) {
        Swal.fire(`You selected: ${fruit}`);
      }
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
