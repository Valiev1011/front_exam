<template>
  <div class="sidebar flex flex-col justify-between">
    <router-link
      :to="item.path"
      class="sidebar_link"
      v-for="(item, index) in props.title"
      :key="index"
      active-class="active_link"
      >{{ item.title }}</router-link
    >
    <button @click="logout" class="logout-button">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  title: Array,
});
const logout = () => {
  localStorage.clear("token");
  router.push({ name: "auth" });
};
</script>

<style lang="scss" scoped>
$color1: #000016;
$color2: #fff;

.logout-button {
  padding: 10px 20px;
  background-color: #ff4c4c; /* Red color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #ff3333; /* Darker red color on hover */
}
.sidebar {
  width: 100%;
  height: 100%;

  background-color: $color1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .sidebar_link {
    width: 100%;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 5px;
    background-color: $color2;
    color: $color1;
  }
  .active_link {
    color: #fff;
    background-color: #000016;
    border: 1px solid white;
  }
}
</style>
