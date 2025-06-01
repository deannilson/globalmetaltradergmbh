<template>
  <div>
    <v-breadcrums title="About Us" />
    <section class="py-20 px-6">
      <div class="md:flex gap-20 container">
        <div class="flex-1">
          <h5 class="text-overline">Get to Know us</h5>
          <h2 class="text-3xl sm:text-5xl font-black text-primary mb-4">
            Welcome to <br />
            {{ $app.name }}
          </h2>
          <p class="mb-4 font-medium">
            {{ $app.name }} is a global leader in the trading and supply of
            ferrous and non- ferrous metals. With a commitment to quality and
            sustainability—we— source and deliver a wide range of metal products
            to meet the diverse needs of our clients. Our extensive network and
            industry expertise enable us to provide competitive pricing and
            reliable service.
          </p>
          <p class="font-medium">
            At {{ $app.name }}, , we prioritize strong partnerships and customer
            satisfaction. Our team of professionals is dedicated to ensuring
            that every transaction is seamless, from sourcing materials to
            delivery. We strive to innovate and adapt to the ever-changing
            market landscape while maintaining our core values of integrity and
            excellence. Whether you’re looking for raw materials or specific
            metal solutions, {{ $app.name }} is your trusted partner in the
            metals industry.
          </p>
        </div>
        <div
          class="flex-1 bg-zinc-300 bg-[url('/about-02.jpg')] bg-center bg-cover aspect-video"
        />
      </div>
    </section>
    <section class="py-20 bg-white px-6">
      <div class="md:flex md:flex-row-reverse gap-20 container">
        <div class="flex-1">
          <h5 class="text-overline">WHO WE ARE</h5>
          <h4 class="font-black text-xl">Our Mission</h4>
          <p class="mb-9">
            At {{ $app.name }}, we deliver high-quality metal products with a
            commitment to trust, sustainability, and innovation. We prioritize
            quality assurance, eco-friendly practices, customer-focused
            solutions, and ethical business standards to drive industry progress
            and contribute to a sustainable future
          </p>
          <h4 class="font-black text-xl">Our Vision</h4>
          <p>
            To be the most trusted and innovative leader in the global metals
            industry, empowering our clients with superior products and services
            while championing sustainable practices that contribute to a
            healthier planet. We envision a future where our commitment to
            excellence and integrity drives the growth and success of our
            partners and the communities we serve.
          </p>
        </div>
        <div
          class="flex-1 bg-zinc-300 bg-[url('/about-01.jpg')] bg-center bg-cover aspect-video"
        />
      </div>
    </section>
    <Services />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
