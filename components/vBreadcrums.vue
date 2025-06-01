<template>
  <Title>{{ title }}</Title>
  <section>
    <section class="bg-cover bg-bottom bg-[url('/slider.jpg')] text-white">
      <div class="h-56 sm:h-64 place-center bg-black/50 p-6">
        <h1 class="text-5xl font-black">{{ title }}</h1>
      </div>
    </section>
  </section>
  <section class="p-4 bg-white border-b shadow-sm">
    <div class="container">
      <div class="flex items-center font-medium">
        <nuxt-link to="/" class="text-primary hover:underline">Home</nuxt-link>
        <nuxt-link
          v-for="n in links"
          :key="n.path"
          :to="n.path"
          class="flex items-center"
        >
          <Caret />
          <span class="text-primary hover:underline">{{ n.title }}</span>
        </nuxt-link>
        <Caret />
        <span class="inline-flex items-center">
          {{ title }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; links?: any[] }>();
</script>

<style scoped></style>
