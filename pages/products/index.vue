<template>
  <v-breadcrums title="Products" />

  <Archive :items="products" />
</template>

<script setup lang="ts">
import products from "@/resources/products.json";
</script>

<style scoped></style>
