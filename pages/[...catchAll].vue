<template>
  <v-breadcrums title="Page Not Found" />

  <div class="p-8 sm:p-12">
    <div class="md flex flex-col items-center">
      <div class="flex w-full max-w-xl gap-1 mb-8 text-white">
        <div
          v-for="n in [4, 0, 4]"
          :class="n == 0 ? 'bg-black' : 'bg-primary'"
          class="flex-1 aspect-[3/4] center font-medium text-[120px] sm:text-[150px]"
        >
          {{ n }}
        </div>
      </div>
      <p class="text-center text-lg sm:text-2xl">
        The page you are looking for appears to have moved, been renamed or no
        longer exists.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
