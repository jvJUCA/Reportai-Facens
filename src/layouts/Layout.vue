<template>
  <v-app>
    <AppBar/>
      <slot></slot>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
  name: "LayoutView",
  components: {
    AppBar,
  },
  // Outras configurações do componente
};
</script>
