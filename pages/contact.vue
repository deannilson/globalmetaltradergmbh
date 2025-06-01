<template>
  <v-breadcrums title="Contact Us" />
  <div class="p-6 sm:p-12">
    <div class="container">
      <p class="text-sm sm:text-lg mb-4">
        Do you have a question about
        <nuxt-link class="underline" to="/about-us">who we are</nuxt-link> or
        <nuxt-link class="underline" to="/products">our products</nuxt-link>?
        Our customer service is available by
        <a class="underline" :href="`tel:${$app.phone}`">telephone</a> or
        <a class="underline" :href="`mailto:${$app.email}`">e-mail</a>, or fill
        in the contact form and let us inquire about the possibilities.
      </p>
      <div class="grid md:grid-cols-2">
        <div class="bg-primary p-8 sm:p-16 flex-1 text-white">
          <h5 class="text-overline" style="color: white">Reach Out Anytime</h5>
          <ListItem icon="location-dot" title="Address" :desc="$app.address" />
          <ListItem icon="envelope" title="Email address" :desc="$app.email" />
          <ListItem
            v-if="$app.phone"
            icon="phone-flip"
            title="Phone number"
            :desc="$app.phone"
          />
          <ListItem icon="clock" title="Business hours" :desc="$app.hours" />
        </div>
        <div class="bg-white p-8 sm:p-16 flex-1">
          <h5 class="text-overline">Make an online enquiry</h5>
          <form @submit.prevent="submit">
            <Alert v-model="error" />
            <div class="grid sm:grid-cols-2 sm:gap-2">
              <Textfield label="Full name" v-model="post.name" />
              <Select
                label="Location"
                :items="countries"
                v-model="post.location"
              />
            </div>
            <div class="grid sm:grid-cols-2 sm:gap-2">
              <Textfield
                label="Email address"
                type="email"
                v-model="post.email"
              />
              <Textfield label="Phone number" type="tel" v-model="post.phone" />
            </div>
            <Textfield label="Message" textarea v-model="post.message" />
            <Alert v-model="success" success />
            <Submit :loading="loading" title="Send message" />
          </form>
        </div>
      </div>
    </div>
  </div>
  <section class="md:lg max-md:md p-6 sm:p-8 md:p-12 mdflex hidden">
    <div class="flex-1 md:pr-12">
      <h5 class="text-overline">GET IN TOUCH</h5>
      <ListItem icon="location-dot" title="Address" :desc="$app.address" />
      <ListItem icon="envelope" title="Email address" :desc="$app.email" />
      <ListItem
        v-if="$app.phone"
        icon="phone-flip"
        title="Phone number"
        :desc="$app.phone"
      />
      <ListItem icon="clock" title="Business hours" :desc="$app.hours" />
    </div>
    <div class="flex-1 bg-white rounded-lg shadow-lg p-4 sm:p-12">
      <form @submit.prevent="submit">
        <Alert v-model="error" />
        <div class="grid sm:grid-cols-2 sm:gap-2">
          <Textfield label="Full name" v-model="post.name" />
          <Select label="Location" :items="countries" v-model="post.location" />
        </div>
        <div class="grid sm:grid-cols-2 sm:gap-2">
          <Textfield label="Email address" type="email" v-model="post.email" />
          <Textfield label="Phone number" type="tel" v-model="post.phone" />
        </div>
        <Textfield label="Message" textarea v-model="post.message" />
        <Alert v-model="success" success />
        <Submit :loading="loading" title="Send message" />
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import countries from "@/resources/countries.json";
const loading = ref(false);
const error = ref("");
const success = ref("");
const post = ref({
  to: $app.email,
  subject: "Contact us",
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
});
async function submit() {
  loading.value = true;
  try {
    await $fetch($app.api, { method: "POST", body: post.value });
    post.value.name = "";
    post.value.email = "";
    post.value.phone = "";
    post.value.location = "";
    post.value.message = "";
    success.value = "Your message has been sent successfully!";
  } catch (err) {
    error.value = "An error occurred. Please try again later!";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
