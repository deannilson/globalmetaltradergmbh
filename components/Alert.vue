<template>
  <div
    v-if="model"
    v-text="model"
    class="mb-2 px-3 py-2 text-sm border-l-8"
    :class="
      success
        ? ' text-green-600 border-green-600 bg-green-600/20'
        : ' text-red-600 border-red-600 bg-red-600/20'
    "
  />
</template>

<script setup lang="ts">
const model = defineModel();
defineProps<{ success?: boolean }>();

watch(model, (val) => {
  if (val) setTimeout(() => (model.value = ""), 6000);
});
</script>

<style scoped></style>
