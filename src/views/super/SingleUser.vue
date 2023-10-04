<template>
  <div>
    <div class="card w-1/3">
      <div class="card-header">
        <h2>{{ ONeProduct.name }}</h2>
        <p>Brand: {{ ONeProduct.surname }}</p>
        <p>Group: {{ ONeProduct.age }}</p>
      </div>
      <div class="card-content">
        <p v-if="ONeProduct.is_diploma">Oliy ma'lumotli</p>
        <p v-else>O'rta ma'lumotli</p>
        <p>Arrival Price: ${{ ONeProduct.address }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import http from "../../components/plugins/api";
import createProductModal from "@/components/pages/createProduct.vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const createProduct = ref();

const product = ref([]);
const ONeProduct = ref({});

const id = route.params.id;
const oneProduct = (id) => {
  http
    .get(`/users/${id}`)
    .then((res) => {
      console.log(res.data);
      router.push({ name: "singleUser", params: { id: id } });
      ONeProduct.value = res.data.user;
    })
    .catch((err) => {
      console.log(err);
    });
};
oneProduct(id);
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  max-width: 300px;
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
