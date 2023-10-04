<template>
  <AppModal v-model="dialog">
    <div class="modal">
      <h2>Create User</h2>

      <input
        v-model="form.name"
        placeholder="Product Name"
        type="text"
        required
      />
      <input v-model="form.surname" placeholder="Surname" required />
      <input v-model="form.age" placeholder="Age" type="number" required />
      <label for="isDiploma">Has Diploma:</label>
      <input
        v-model="form.is_diploma"
        type="checkbox"
        id="isDiploma"
        required
      />
      <input
        v-model="form.address"
        placeholder="Address"
        type="text"
        required
      />

      <button v-if="save" @click="updateProduct">Save</button>
      <button v-else @click="createProduct">Create</button>
      <button @click="closeModal">Cancel</button>
    </div>
  </AppModal>
</template>

<script setup>
import AppModal from "../ui/app-modal.vue";
import { reactive, ref } from "vue";

import http from "../plugins/api";

const save = ref(false);

const id = ref("");

const form = reactive({
  name: "",
  surname: "",
  age: "",
  is_diploma: false,
  address: "",
});

const closeModal = () => {
  dialog.value = false;
  (form.name = ""),
    (form.surname = ""),
    (form.age = ""),
    (form.is_diploma = false),
    (form.address = "");
};

const createProduct = () => {
  console.log(form.name);
  http
    .post("/users/add", {
      name: form.name,
      surname: form.surname,
      age: form.age,
      is_diploma: form.is_diploma,
      address: form.address,
    })
    .then((res) => {
      console.log(res);
      dialog.value = false;
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};

const dialog = ref(false);

const openModal = (data) => {
  dialog.value = true;
  if (data) {
    save.value = true;
    console.log(data._id);
    id.value = data._id;
    form.name = data.name;
    form.surname = data.surname;
    form.age = data.age;
    form.is_diploma = data.is_diploma;
    form.address = data.address;
  }
};

const updateProduct = () => {
  console.log(form.name);
  http
    .patch(`/users/update/${id.value}`, {
      name: form.name,
      surname: form.surname,
      age: form.age,
      is_diploma: form.is_diploma,
      address: form.address,
    })
    .then((res) => {
      console.log(res);
      dialog.value = false;
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};

// const editModal = (data) => {
//   dialog.value = true;
// };
const openDialog = () => {
  console.log(dialog);
};

defineExpose({ openModal, openDialog });
</script>

<style lang="scss" scoped>
.modal {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.modal h2 {
  font-size: 1.5rem;
  margin: 0 0 20px;
}

.modal input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

.modal button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.modal button:last-child {
  margin-right: 0;
}

.modal button:hover {
  background-color: #0056b3;
}
</style>
