<template>
  <section class="px-4 py-6">
    <div class="container">
      <div class="pb-3">
        Showing <span class="font-bold">{{ items.length }}</span> results
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4"
      >
        <nuxt-link
          v-for="n in items"
          :key="n.slug"
          :to="`/products/${n.cat}/${n.slug}`"
          class="border rounded-lg p-3 bg-white hover:shadow-lg flex flex-col gap-3"
        >
          <div class="flex-1">
            <img
              :src="n.image"
              :alt="n.name"
              class="aspect-square bg-cover bg-center"
            />
            <h2 class="text-lg sm:text-xl font-bold hover:underline pt-2">
              {{ n.name }}
            </h2>
          </div>
          <div class="sm:text-lg font-medium">
            <button
              class="flex-start bg-secondary text-primary h-9 rounded transition-all mb-2 group w-full block"
            >
              <i class="fa-solid fa-circle-plus mr-2 text-black/40" />
              <span class="group-hover:underline">View Details</span>
            </button>
            <button
              @click.prevent="$router.push({ name: 'contact' })"
              class="flex-start bg-primary text-white h-9 rounded border-2 border-primary hover:bg-white hover:text-primary transition-all w-full block"
            >
              <i class="fa-solid fa-envelope mr-2" /> Get Quote
            </button>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>();
</script>

<style scoped></style>
