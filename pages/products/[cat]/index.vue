<template>
  <v-breadcrums
    :title="$locales[route.params.cat]"
    :links="[{ title: 'Products', path: '/products' }]"
  />
  <Archive :items="items" />
</template>

<script setup lang="ts">
import products from "@/resources/products.json";
const route = useRoute();
const items = computed(() =>
  products.filter((el) => el.cat == route.params.cat)
);
</script>

<style scoped></style>
