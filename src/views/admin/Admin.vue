<template>
  <section class="sidebar">
    <div class="sidebar_left">
      <Sidebar :title="pages" />
    </div>
    <div class="sidebar_right">
      <h1>Admin</h1>
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../../components/Sidebar.vue";
const pages = ref([{ id: 1, title: "Products", path: "/products" }]);
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100vh;
  display: flex;
}
.sidebar_left {
  width: 300px;
  // height: 100%;
  flex-direction: column;
}

.sidebar_right {
  width: calc(100% - 300px);
  height: 100%;
  overflow: auto;
}
</style>
