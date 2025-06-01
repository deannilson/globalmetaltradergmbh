<template>
  <div class="flex flex-col min-h-screen">
    <v-header />
    <main class="flex-1 flex flex-col bg-secondary">
      <slot />
    </main>
    <v-footer />
  </div>
</template>
