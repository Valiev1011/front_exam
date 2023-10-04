<template>
  <AppModal v-model="dialog">
    <div class="modal">
      <h2>Create Product</h2>

      <form>
        <input
          v-model="form.name"
          placeholder="Product Name"
          type="text"
          required
        />
        <input v-model="form.brand" placeholder="Brand" required />
        <input v-model="form.group" placeholder="Group" required />
        <input
          v-model="form.price"
          placeholder="Price"
          type="number"
          required
        />
        <input
          v-model="form.arrival_price"
          placeholder="Arrival Price"
          type="number"
          required
        />
        <input
          v-model="form.selling_price"
          placeholder="Selling Price"
          type="number"
          required
        />
        <input v-model="form.desc" placeholder="Description" required />
        <button v-if="save" @click="updateProduct">Save</button>
        <button v-else @click="createProduct">Create</button>
        <button @click="closeModal">Cancel</button>
      </form>
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
  brand: "",
  group: "",
  price: "",
  arrival_price: "",
  selling_price: "",
  desc: "",
});

const closeModal = () => {
  dialog.value = false;
  (form.name = ""),
    (form.brand = ""),
    (form.group = ""),
    (form.price = ""),
    (form.arrival_price = ""),
    (form.selling_price = ""),
    (form.desc = "");
};

const createProduct = () => {
  console.log(form.name);
  http
    .post("/products/add", {
      name: form.name,
      brand: form.brand,
      group: form.group,
      price: form.price,
      arrival_price: form.arrival_price,
      selling_price: form.selling_price,
      description: form.desc,
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
    form.brand = data.brand;
    form.group = data.group;
    form.price = data.price;
    form.arrival_price = data.arrival_price;
    form.selling_price = data.selling_price;
    form.desc = data.description;
  }
};

const updateProduct = () => {
  console.log(form.name);
  http
    .patch(`/products/update/${id.value}`, {
      name: form.name,
      brand: form.brand,
      group: form.group,
      price: form.price,
      arrival_price: form.arrival_price,
      selling_price: form.selling_price,
      description: form.desc,
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
