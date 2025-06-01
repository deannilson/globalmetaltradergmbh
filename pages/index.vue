<template>
  <div>
    <!-- cta -->
    <section
      class="bg-secondary h-[600px] bg-cover bg-center"
      :style="`background-image:url('/slider-0${(index % 2) + 1}.jpg')`"
    >
      <div class="px-4 h-full bg-black/65 text-white">
        <div class="container h-full flex justify-center items-center">
          <div class="w-full max-w-[640px] text-center">
            <h2 class="text-xl sm:text-3xl mb-2">Welcome to NordAlu GmbH</h2>
            <h1 class="text-3xl sm:text-6xl font-black mb-4">
              The EU's biggest online metal supplier
            </h1>
            <p class="mb-4 font-medium sm:text-xl">
              We are specialists in metals, mild steel and aluminium and were
              the first online retailer of metals in the EU. We also provide a
              professional cutting service. Just tell us your requirements and
              leave the rest to us.
            </p>
            <view-products />
          </div>
        </div>
      </div>
    </section>
    <section class="py-9 sm:py-16">
      <div class="container">
        <h2 class="text-2xl sm:text-4xl font-black mb-3 text-center">
          Our Products
        </h2>
        <div
          class="grid gap-2 sm:gap-y-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        >
          <nuxt-link
            v-for="n in categories"
            :to="`/products/${n.slug}`"
            class="relative group p-2 sm:p-3 pb-1 sm:pb-1 bg-white rounded-xl"
          >
            <div
              class="flex items-center justify-center overflow-hidden rounded-lg"
            >
              <img
                class="aspect-[4/3] object-cover object-center w-full group-hover:scale-125 transition-all duration-500"
                :src="n.image"
                :alt="n.name"
              />
            </div>
            <div
              class="sm:text-xl text-center p-2 sm:p-3 font-bold group-hover:text-primary"
            >
              {{ n.name }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <Services />
  </div>
</template>

<script setup lang="ts">
import categories from "@/resources/categories.json";
useHead({ title: "Home" });
const index = ref(0);
onMounted(() => setInterval(() => index.value++, 6000));
</script>

<style scoped></style>
