<template>
  <div v-if="item">
    <v-breadcrums
      :title="item.name"
      :links="[
        { title: 'Products', path: '/products' },
        { title: $locales[item.cat], path: `/products/${item.cat}` },
      ]"
    />
    <section class="sm:p-8">
      <div class="container">
        <section
          class="grid md:grid-cols-2 gap-12 bg-white border p-4 sm:p-12 sm:mb-6"
        >
          <div>
            <img
              :src="item.image"
              :alt="item.name"
              class="aspect-square bg-cover bg-center"
            />
          </div>
          <div>
            <h1 class="text-2xl sm:text-4xl font-black mb-4">
              {{ item.name }}
            </h1>

            <div v-html="item.specs" class="border-y py-4 text-lg" />
            <div class="py-2">
              <nuxt-link
                :href="`mailto:${$app.email}`"
                class="flex items-center gap-3 py-2 text-lg font-medium"
              >
                <i class="fa-solid fa-envelope -mb-1" /> {{ $app.email }}
              </nuxt-link>
              <nuxt-link
                :href="`tel:${$app.phone}`"
                class="flex items-center gap-3 py-2 text-lg font-medium"
              >
                <i class="fa-solid fa-phone -mb-1" /> {{ $app.phone }}
              </nuxt-link>
            </div>
            <contact-us />
          </div>
        </section>
        <section class="bg-white border p-4 sm:p-12">
          <h2 class="text-2xl font-bold mb-3">Description</h2>
          <div v-html="item.desc" class="text-lg" />
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import products from "@/resources/products.json";
const route = useRoute();
const item = computed(() => products.find((el) => el.slug == route.params.id));
</script>

<style scoped></style>
