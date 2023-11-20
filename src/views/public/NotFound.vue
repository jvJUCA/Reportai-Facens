<template>
  <v-container fluid>
    <div class="not-found">
      <span class="text-h3 mt-14" style="color: white"
        >404 - Página não encontrada</span
      >
      <br />
      <img height="200" src="@/assets/duck.gif" />
      <br>
      <v-btn color="blue" to="/">Voltar para a Página Inicial</v-btn>
    </div>
  </v-container>
  <FooterLayout />
</template>

<script>
import FooterLayout from "@/components/Footer.vue";
export default {
  components: {
    FooterLayout,
  },
};
</script>

<style scoped>
.not-found {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 80px;
  color: #333;
}
</style>
