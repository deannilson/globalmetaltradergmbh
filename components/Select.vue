<template>
  <div class="relative">
    <label class="flex font-semibold opacity-75 mb-1 text-sm">
      {{ label }}
    </label>
    <i
      class="fa-solid fa-caret-down absolute z-10 right-4 bottom-10 pointer-events-none"
    />
    <select required v-model="model" class="textfield">
      <option v-if="label" value="">{{ label }}</option>
      <option :key="n" v-for="n in items" :value="n">{{ n }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: any[];
  label?: string;
}>();
const error = defineModel("error");
const focus = defineModel("focus");
const model = defineModel();
const input: any = ref(null);
</script>

<style scoped></style>
