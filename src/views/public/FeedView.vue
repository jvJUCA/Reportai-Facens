<template>
  <AppBar />
  <v-container>
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            cover
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>

          <v-card-text class="text--primary">
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos omnis voluptates maxime</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="green" icon><v-icon color="green">mdi-arrow-up</v-icon> </v-btn>

            <v-btn color="red" icon><v-icon color="red">mdi-arrow-down</v-icon> </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
