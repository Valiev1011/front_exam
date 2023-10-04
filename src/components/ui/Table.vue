<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <td v-for="(item, index) in headers" :key="index">
            {{ item.title }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in body" :key="index">
          <td v-for="(headerItem, headerIndex) in headers" :key="headerIndex">
            <slot :name="`body_${headerItem.value}`" :item="item">
              {{ item[headerItem.value] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
  },
  body: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>
