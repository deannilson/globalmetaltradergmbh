<template>
  <header class="bg-white">
    <div class="max-md:hidden">
      <section class="bg-primary text-white px-6">
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
      <section class="px-6">
        <div class="container h-24 flex-start">
          <nuxt-link to="/" class="py-4 cursor-pointer">
            <img src="/logo.jpg" width="160" />
          </nuxt-link>
          <div class="flex-1 flex justify-end items-center gap-8">
            <div
              v-for="(n, i) in links"
              class="relative group h-24 inline-flex items-center"
            >
              <nuxt-link
                :to="$nav({ name: n.name })"
                class="py-4 border-y-4 border-y-transparent"
                :class="
                  route.name.startsWith(n.name)
                    ? 'border-b-primary text-primary font-bold'
                    : 'hover:border-b-primary hover:text-primary font-medium'
                "
              >
                <span class="whitespace-nowrap">{{ n.title }}</span>
                <i v-if="i == 2" class="fa-solid fa-angle-down ml-1" />
              </nuxt-link>
              <div
                v-if="i == 2"
                class="hidden group-hover:block absolute right-0 top-full border py-2 text-xs bg-white shadow w-56"
              >
                <nuxt-link
                  :to="`/products/${n.slug}`"
                  v-for="n in categories"
                  :class="
                    $route.params.cat == n.slug
                      ? 'text-primary font-bold'
                      : 'hover:bg-secondary'
                  "
                  class="px-4 py-2 text-sm flex uppercase font-medium"
                >
                  {{ n.name }}
                </nuxt-link>
              </div>
            </div>
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
      <aside v-if="dialog" class="border-b-2 border-b-primary">
        <div v-for="(n, i) in links" class="relative group">
          <nuxt-link
            v-if="i != 2"
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
          <div
            v-else
            @click="open = !open"
            class="flex p-4 border-b border-b-primary/20 text-base"
            :class="
              route.name.startsWith(n.name) || open
                ? 'bg-primary/15 text-primary font-bold'
                : 'font-medium'
            "
          >
            <span class="whitespace-nowrap flex-1">{{ n.title }}</span>
            <i
              v-if="i == 2"
              :class="`fa-solid fa-${open ? 'minus' : 'plus'} ml-1`"
            />
          </div>
          <div
            v-if="i == 2 && (open || categories.map(el=>el.slug).includes($route.params.cat as string) )"
            class="py-1 text-xs border-b"
          >
            <nuxt-link
              :to="`/products/${n.slug}`"
              v-for="n in categories"
              :class="
                $route.params.cat == n.slug
                  ? 'text-primary font-bold'
                  : 'hover:bg-secondary'
              "
              class="px-8 py-3 text-sm flex uppercase"
            >
              {{ n.name }}
            </nuxt-link>
          </div>
        </div>
      </aside>
    </div>
  </header>
</template>

<script setup lang="ts">
import categories from "@/resources/categories.json";
const open = ref(false);
const dialog = ref(false);
const route: any = useRoute();
const links = [
  { title: "Home", name: "index" },
  { title: "About", name: "about" },
  { title: "Products", name: "products" },
  { title: "Terms & Policy", name: "terms" },
  { title: "Contact", name: "contact" },
];
watch(useRoute(), () => ((dialog.value = false), (open.value = false)));
</script>

<style scoped></style>
