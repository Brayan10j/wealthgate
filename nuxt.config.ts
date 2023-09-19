// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/globals.scss"],
  modules: ["nuxt-vuetify", "@nuxtjs/supabase"],
  vuetify: {
    theme: {
      defaultTheme: "dark",
    },
  },
  supabase: {
    redirect: false
  }

  //#d1a828
});
