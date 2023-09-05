<template app>
  <AppBar />
  <div>
    <v-card max-width="300px" max-height="1000px" class="mx-auto" color="rgba(113, 29, 216, 0.536)">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
        class="ma-16"
      >
      </v-img>
      <v-card-title> Entre com seu email de aluno! </v-card-title>
      <v-btn
      color="blue-lighten-1"
      rounded="6"
      block
      >Entrar
      </v-btn>
    </v-card>
  </div>
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
#app{
  background-color: rgb(16, 32, 61);
}
</style>
