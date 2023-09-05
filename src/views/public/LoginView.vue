<template>
  <AppBar/>
  <div class="mb-10 mt-10"></div>
  <FooterLayout/>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue"
export default {
  name: "LoginView",
  components: {
    AppBar,
    FooterLayout
  },
  // Outras configurações da visualização
};
</script>
