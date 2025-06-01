<template>
  <button
    class="center h-16 bg-primary hover:bg-primary text-white rounded-lg w-full font-bold transition-all"
  >
    <Loader v-if="loading" />
    <span v-else-if="title" v-text="title" /> <slot v-else />
  </button>
</template>

<script setup lang="ts">
defineProps<{ title: string; loading?: boolean }>();
</script>

<style scoped></style>
