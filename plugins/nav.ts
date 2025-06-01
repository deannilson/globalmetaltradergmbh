export default defineNuxtPlugin(() => ({
  provide: {
    nav: (value?: any) => useRouter().resolve(value).fullPath,
  },
}));
