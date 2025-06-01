<template>
  <section>
    <div :key="i" v-for="(n, i) in items" class="border-slate-500 border-b">
      <div @click="index = i" class="flex items-center py-4 cursor-pointer">
        <div class="w-8">
          <i
            class="text-xl text-primary"
            :class="
              index == i
                ? 'fa-solid fa-circle-chevron-up'
                : 'fa-light fa-circle-chevron-down'
            "
          />
        </div>
        <div class="flex-1 text-xl font-bold">{{ n.title }}</div>
      </div>
      <div v-if="index == i" class="pl-8 pb-4">
        {{ n.desc }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>();
const index = defineModel<number | null>();
</script>

<style scoped></style>
