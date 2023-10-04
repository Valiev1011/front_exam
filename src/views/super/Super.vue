<template>
  <div class="sidebar">
    <div class="sidebar_left">
      <Sidebar :title="items" />
    </div>
    <div class="sidebar_right">
      <h1>SuperAdmin</h1>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Sidebar from "../../components/Sidebar.vue";

const items = ref([{ id: 1, title: "Users", path: "/users" }]);
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100vh;
  display: flex;
}
.sidebar_left {
  width: 300px;
  height: 100vh;
}

.sidebar_right {
  width: calc(100% - 300px);
  height: 100%;
  overflow: auto;
}
</style>
