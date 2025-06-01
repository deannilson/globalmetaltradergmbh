<template>
  <header class="bg-white">
    <div class="max-md:hidden">
      <section class="bg-primary text-white">
        <div class="h-10 container flex-start text-sm gap-2">
          <div class="flex flex-1 divide-x divide-white/20 gap-6">
            <div class="flex-start">
              <i class="fa-light fa-clock" />
              <span class="pl-2">{{ $app.hours }}</span>
            </div>
            <div class="flex-start pl-6">
              <i class="fa-light fa-phone" />
              <span class="pl-2">{{ $app.phone }}</span>
            </div>
            <div class="flex-start pl-6">
              <i class="fa-light fa-envelope" />
              <span class="pl-2">{{ $app.email }}</span>
            </div>
          </div>
          <i class="fa-brands fa-facebook-f icon-btn" />
          <i class="fa-brands fa-instagram icon-btn" />
          <i class="fa-brands fa-google-plus-g icon-btn" />
          <i class="fa-brands fa-twitter icon-btn" />
        </div>
      </section>
      <section class="px-8">
        <div class="container h-24 flex-start">
          <nuxt-link to="/" class="py-4 cursor-pointer">
            <img src="/logo.jpg" width="160" />
          </nuxt-link>
          <div class="flex-1 flex justify-end items-center gap-8">
            <nuxt-link
              v-for="n in links"
              :to="$nav({ name: n.name })"
              class="py-4 border-y-4 border-y-transparent"
              :class="
                route.name.startsWith(n.name)
                  ? 'border-b-primary text-primary font-bold'
                  : 'hover:border-b-primary hover:text-primary font-medium'
              "
            >
              {{ n.title }}
            </nuxt-link>
            <nuxt-link
              to="/contact"
              class="center h-12 px-4 bg-primary hover:bg-primary text-white font-bold"
            >
              Request Quote
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
    <div class="md:hidden">
      <section class="px-4 border-b-2 border-b-primary">
        <div class="h-20 flex-start justify-between">
          <nuxt-link to="/" class="py-4 cursor-pointer">
            <img src="/logo.jpg" width="140" />
          </nuxt-link>
          <button
            @click="dialog = !dialog"
            class="size-14 bg-primary place-center text-white text-2xl"
          >
            <i v-if="dialog" class="fa-light fa-times" />
            <i v-else class="fa-light fa-bars" />
          </button>
        </div>
      </section>
      <aside
        v-if="dialog"
        @click="dialog = false"
        class="border-b-2 border-b-primary"
      >
        <nuxt-link
          v-for="n in links"
          :to="$nav({ name: n.name })"
          class="flex p-4 border-b border-b-primary/20 text-base"
          :class="
            route.name.startsWith(n.name)
              ? 'bg-primary/15 text-primary font-bold'
              : 'font-medium'
          "
        >
          {{ n.title }}
        </nuxt-link>
      </aside>
    </div>
  </header>
</template>

<script setup lang="ts">
const dialog = ref(false);
const route: any = useRoute();
const links = [
  { title: "Home", name: "index" },
  { title: "About", name: "about" },
  { title: "Products", name: "products" },
  { title: "Terms & Policy", name: "terms" },
  { title: "Contact", name: "contact" },
];
</script>

<style scoped></style>
