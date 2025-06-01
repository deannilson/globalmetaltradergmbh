<template>
  <div class="flex-start py-4">
    <i :class="`fa-light fa-${icon} text-4xl w-16 `" />
    <div class="flex-1">
      <h4 class="font-bold mb-1 text-sm">{{ title }}</h4>
      <div class="opacity-65 text-lg sm:text-xl" v-html="desc" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; icon: string; desc: string }>();
</script>

<style scoped></style>
