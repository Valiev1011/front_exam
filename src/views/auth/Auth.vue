<!-- <template>
  <div class="about">
    <h1>Auth</h1>
    <div
      class="container d-flex align-items-center justify-content-center flex-column gap-5"
    >
      <form class="d-flex gap-4 flex-column w-50 mt-5">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="username"
            v-model="form.username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="password"
            v-model="form.password"
          />
        </div>
        <button class="btn btn-primary" type="reset" @click="save">
          Login
        </button>
      </form>
    </div>
  </div>
</template> -->

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="user"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your username</label
              >
              <input
                type="text"
                name="user"
                id="user"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                required
                v-model="form.username"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                v-model="form.password"
              />
            </div>
            <create_product ref="createProduct" />
            <button
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="check"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import create_product from "@/components/pages/create_product.vue";

const createProduct = ref();

const router = useRouter();
const form = ref({
  username: "",
  password: null,
});

// const save = () => {
//   $http
//     .post("/admins/login", {
//       username: form.value.username,
//       password: form.value.password,
//     })
//     .then((res) => {
//       if (res.data.token) {
//         localStorage.setItem("token", res.data.token);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

import axios from "axios";

const openCreateModal = (role) => {
  createProduct.value.openModal(role);
};

import http from "../../components/plugins/api";

const check = (e) => {
  e.preventDefault();

  http
    .post("/admins/login", {
      username: form.value.username,
      password: form.value.password,
    })
    .then((res) => {
      console.log(res);
      openCreateModal(res.data.roles);
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => console.log(err));
};

// const check = () => {
//   if (form.value.username === "admin" && form.value.password == "admin") {
//     router.push({ name: "admin" });
//   } else if (
//     form.value.username === "super" &&
//     form.value.password == "super"
//   ) {
//     router.push({ name: "super" });
//   } else if (
//     form.value.username === "superadmin" &&
//     form.value.password == "superadmin"
//   ) {
//     router.push({ name: "superadmin" });
//   } else {
//     alert("username or password is incorrect");
//     form.value = {
//       username: "",
//       password: null,
//     };
//   }
// };
</script>
<style></style>
