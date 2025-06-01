<template>
  <div>
    <label class="flex font-semibold opacity-75 mb-1 text-sm">
      {{ label }}
    </label>
    <input
      required
      v-if="!textarea"
      v-model="model"
      :type="type"
      :placeholder="label"
      class="textfield"
    />
    <textarea
      v-else
      rows="3"
      required
      v-model="model"
      :placeholder="label"
      class="textfield h-auto"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  textarea?: boolean;
  type?: string;
  label?: string;
}>();
const model: any = defineModel();
</script>

<style scoped></style>
