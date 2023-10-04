<template>
  <!-- <div class="about">
    <h1>Admin Products</h1>
  </div> -->

  <div class="">
    <createProductModal ref="createProduct" />
    <button @click="create" class="create-button">Create Product</button>

    <div class="flex flex-wrap">
      <div class="card1 w-1/3" v-for="(items, index) in product" :key="index">
        <div class="card w-full" @click="oneProduct(items._id)">
          <div class="card-header">
            <h2>{{ items.name }}</h2>
            <p>Brand: {{ items.brand }}</p>
            <p>Group: {{ items.group }}</p>
          </div>
          <div class="card-content">
            <p>Price: ${{ items.price }}</p>
            <p>Arrival Price: ${{ items.arrival_price }}</p>
            <p>Selling Price: ${{ items.selling_price }}</p>
            <p>Description: {{ items.description }}</p>
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
import createProductModal from "@/components/pages/createProduct.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const createProduct = ref();

const product = ref([]);
const ONeProduct = ref([]);

const create = () => {
  createProduct.value.openModal();
};

const editProduct = (item) => {
  createProduct.value.openModal(item);
};

const deleteProduct = (index) => {
  console.log(index);
  http
    .delete(`/products/${index}`)
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
    .get("/products")
    .then((res) => {
      console.log(res);
      product.value = res.data.products;
    })
    .catch((err) => {
      console.log(err);
    });
});
const oneProduct = (id) => {
  router.push({ name: "singleProduct", params: { id: id } });
};
</script>

<style lang="scss" scoped>
.card1 {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
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
