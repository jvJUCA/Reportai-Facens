<template app>
  <AppBar />

  <v-text-field rounded="6" label="Insira seu RA"></v-text-field>

  <FooterLayout />
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
export default {
  name: "LoginView",
  components: {
    AppBar,
    FooterLayout,
  },
  // Outras configurações da visualização
};
</script>

<style>
#app {
  background-color: rgb(16, 32, 61);
}
</style>
