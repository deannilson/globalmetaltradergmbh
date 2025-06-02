<template>
  <section class="bg-secondary h-24" />
  <footer class="bg-black text-white">
    <section class="lg">
      <div
        class="bg-white text-black shadow-xl rounded-xl py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 -mt-16 md:divide-x divide-primary/50 border"
      >
        <section v-for="n in sevices" class="px-8 flex-start gap-4">
          <i :class="`fa-light fa-${n.icon} text-primary text-3xl`" />
          <div class="flex-1">
            <h4 class="font-bold">{{ n.title }}</h4>
            <p class="opacity-65">{{ n.desc }}</p>
          </div>
        </section>
      </div>
    </section>
    <section class="px-6 py-12">
      <div
        class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        <section>
          <h4 class="text-xl font-bold pb-6">Company</h4>
          <div class="pr-2 flex-col gap-2">
            <p class="mb-2">
              {{ $app.name }} is a limited liability company (GmbH) with its
              registered office in {{ $app.address.replaceAll('<br />',', ') }}.
              It is registered in the Commercial Register (Handelsregister) at
              the Stuttgart Local Court (Amtsgericht Stuttgart) under number
              {{ $app.reg }}. The Managing Director is Mr. {{ $app.contact }}.
              Identification Number according to § 27a UStG: {{ $app.vat }}.
            </p>
          </div>
        </section>
        <section :key="key" v-for="[key, vals] in Object.entries(links)">
          <h4 class="text-xl font-bold pb-6">{{ key }}</h4>
          <div>
            <nuxt-link
              :to="link.path"
              v-for="link in vals"
              class="flex items-center pb-2 group"
            >
              <i class="fa-solid fa-circle-check text-white/45 mr-2 mt-px" />

              <span class="group-hover:underline">{{ link.title }}</span>
            </nuxt-link>
          </div>
        </section>

        <section>
          <h4 class="text-xl font-bold pb-6">Newslatter</h4>
          <div>
            <p class="mb-3">
              Stay updated with {{ $app.name }}. Get the latest in metal
              sourcing, recycling, and industry insights directly to your inbox!
            </p>
            <form class="flex border rounded-full p-1">
              <input
                required
                type="email"
                class="h-14 px-4 flex-1 bg-transparent outline-none placeholder:text-white"
                placeholder="Email Address"
              />
              <button class="size-14 rounded-full bg-white hover:bg-white/80">
                <i class="fa-solid fa-envelope text-primary" />
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
    <section
      class="container py-8 border-t border-t-white/20 text-sm text-center"
    >
      &copy {{ new Date().getFullYear() }} {{ $app.name }}. All Right Reserved
    </section>
  </footer>
</template>

<script setup lang="ts">
const email = ref("");
const links = {
  "Quick Links": [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "Contact us", path: "/contact" },
    { title: "Products", path: "/products" },
    { title: "Testimonials", path: "/#testimonials" },
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms & Conditions", path: "/terms-and-conditions" },
  ],
  Products: [
    { title: "Aluminium Scrap", path: "/products/aluminium" },
    { title: "Copper Scrap", path: "/products/copper" },
    { title: "Lead Scrap", path: "/products/lead" },
    { title: "Zinc Scrap", path: "/products/zinc" },
    { title: "Plastic Scrap", path: "/products/plastic" },
    { title: "Ferrous Products", path: "/products/ferrous-metal" },
    { title: "Other Scraps", path: "/products/others" },
  ],
};
const sevices = [
  { title: "Customer Support", desc: "24/7 Customer support", icon: "headset" },
  {
    title: "Worldwide shipping",
    desc: "Fast local and international",
    icon: "shipping-fast",
  },
  {
    title: "Return policy",
    desc: "Money back guarantee",
    icon: "hand-holding-usd",
  },
  {
    title: "Secure payment",
    desc: "Your money is 100% secure",
    icon: "cash-register",
  },
];
</script>

<style scoped></style>
