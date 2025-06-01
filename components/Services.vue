<template>
  <div>
    <section class="py-20 px-6 bg-black text-white">
      <div class="grid md:grid-cols-3 gap-10 container">
        <div class="flex flex-col py-4">
          <div class="pb-8 flex-1">
            <h5 class="text-overline">OUR SERVICES</h5>
            <h4 class="font-semibold text-3xl mb-6">What We Offer</h4>
            <p class="mb-6">
              We provide a comprehensive range of high-quality ferrous and
              non-ferrous scrap materials. Our products are sourced to meet
              industry demands while promoting sustainability and resource
              efficiency.
            </p>
          </div>
          <div>
            <contact-us />
          </div>
        </div>
        <div
          class="bg-white aspect-square bg-cover bg-[url('/ferrous-scrap.jpg')] border"
        >
          <div
            class="bg-gradient-to-b from-transparent via-black/70 to-black/80 flex flex-col justify-end p-4 h-full"
          >
            <div>
              <h2 class="text-2xl font-bold text-primary pb-2 mb-2 border-b-2">
                Ferrous Metal Scrap
              </h2>
              <p>
                Ferrous scrap materials, primarily iron and steel, are crucial
                for recycling and manufacturing. Our premium-quality ferrous
                scrap helps conserve resources, reduce energy use, and ensure
                cost-effective, sustainable production.
              </p>
            </div>
          </div>
        </div>
        <div
          class="bg-white aspect-square relative bg-cover bg-[url('/non-ferrous-scrap.jpg')] border"
        >
          <div
            class="bg-gradient-to-b from-transparent via-black/70 to-black/80 flex flex-col justify-end p-4 h-full"
          >
            <div>
              <h2 class="text-2xl font-bold text-primary pb-2 mb-2 border-b-2">
                Non-Ferrous Metal Scrap
              </h2>
              <p>
                Non-ferrous scrap, including aluminum, copper, and brass, is
                essential for industrial use due to its unique properties. Our
                premium selection helps preserve resources, reduce energy
                consumption, and minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 px-6">
      <div class="md:flex gap-10 container">
        <div class="md:w-1/3">
          <h5 class="text-overline">WHY CHOOSE US</h5>
          <h4 class="font-black text-4xl sm:text-4xl mb-6">
            Committed to <br />
            <span class="text-primary">Excellence</span> and <br />
            <span class="text-primary">Sustainability</span>
          </h4>
        </div>
        <div class="md:w-2/3">
          <Accordion v-model="index" :items="items" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const index = ref(0);
const items = [
  {
    title: "Top-Quality Metals",
    desc: "We provide high-grade ferrous and non-ferrous metals, ensuring optimal performance for your projects.",
  },
  {
    title: "Global Sourcing Expertise",
    desc: "Our extensive network guarantees a consistent supply of premium materials, no matter where you are",
  },
  {
    title: "Timely Deliveries",
    desc: "Our efficient distribution system ensures that you receive your materials on time, every time.",
  },
  {
    title: "Trust and Transparency",
    desc: "With a focus on risk management and compliance, we foster secure trading relationships that you can rely on.",
  },
  {
    title: "Research and Development",
    desc: "Nord Alu invests in R&D to improve recycling processes and promote sustainable metal recovery.",
  },
  {
    title: "Corporate Social Responsibility",
    desc: "We engage in CSR initiatives that support communities and promote environmental sustainability for a healthier planet.",
  },
];
</script>

<style scoped></style>
