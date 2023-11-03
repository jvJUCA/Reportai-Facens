<template>
  <v-layout>
    <v-app-bar
      elevation="0"
      class="app-bar"
      color="rgb(16, 32, 61)"
      density="prominent"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          size="x-large"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="ml-0 mr-16">
        <h1 class="pt-3">Reportaí</h1>
        <img src="@/assets/logo-f.png" alt="" height="50"
      /></v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      elevation="5"
      v-model="drawer"
      temporary
      color="rgb(16, 32, 81)"
    >
      <v-list-item
        prepend-avatar="https://i0.wp.com/iowa-icon.com/wp-content/uploads/sites/2/2022/12/coming-soon.png?fit=275%2C275&ssl=1"
        title="Guest"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-if="this.$route.path != '/'"
          @click="this.$router.push('/')"
          prepend-icon="mdi-application"
          title="Return to Feed"
          value="Feed"
        ></v-list-item>
        <v-list-item
          @click="this.$router.push('/profile')"
          prepend-icon="mdi-account"
          title="Profile"
          value="Home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-help-circle"
          title="Help & FAQ"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-sheet width="100%" height="100" color="#176B87">
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="3" class="mt-4">
            <v-btn
              size="x-large"
              color="rgb(16, 32, 61)"
              @click="this.$router.push('/')"
              >Início</v-btn
            >
          </v-col>
          <v-col cols="4" class="mt-4">
            <v-btn
              size="x-large"
              color="rgb(16, 32, 61)"
              @click="this.$router.push('/report')"
              >Reportar</v-btn
            >
          </v-col>
          <v-col cols="3" class="mt-4">
            <v-btn
              size="x-large"
              color="rgb(16, 32, 61)"
              @click="this.$router.push('/suggest')"
              >Sugestão</v-btn
            >
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-sheet>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style></style>
