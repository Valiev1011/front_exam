<template>
  <div class="">
    <createProductModal ref="createProduct" />
    <button @click="create" class="create-button">Create Product</button>

    <div class="flex flex-wrap">
      <div class="card1 w-1/3" v-for="(items, index) in users" :key="index">
        <div class="card w-full" @click="oneProduct(items._id)">
          <div class="card-header">
            <h2>{{ items.name }}</h2>
            <p>Brand: {{ items.surname }}</p>
            <p>Group: {{ items.age }}</p>
          </div>
          <div class="card-content">
            <p v-if="items.is_diploma">Oliy ma'lumotli</p>
            <p v-else>O'rta ma'lumotli</p>
            <p>Arrival Price: ${{ items.address }}</p>
          </div>
        </div>
        <div class="card-actions w-full">
          <button @click="editProduct(items)">Edit</button>
          <button @click="deleteProduct(items?._id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import http from "../../components/plugins/api";
import createProductModal from "@/components/pages/createUser.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const createProduct = ref();

const users = ref([]);

const create = () => {
  createProduct.value.openModal();
};

const editProduct = (item) => {
  createProduct.value.openModal(item);
};

const deleteProduct = (index) => {
  console.log(index);
  http
    .delete(`/users/${index}`)
    .then((res) => {
      console.log(res);
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  http
    .get("/users")
    .then((res) => {
      console.log(res);
      users.value = res.data.users;
    })
    .catch((err) => {
      console.log(err);
    });
});
const oneProduct = (id) => {
  router.push({ name: "singleUser", params: { id: id } });
};
</script>

<style lang="scss" scoped>
.card1 {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 15px;
  max-width: 300px;
}
.card {
  cursor: pointer;
}

.card-header {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-content {
  padding: 10px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
}

p {
  margin: 0.5rem 0;
}

.create-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.create-button:hover {
  background-color: #218838;
}

/* Add more CSS styles as needed to customize the card's appearance */
</style>
