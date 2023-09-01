<template>
  <v-layout>
    <v-app-bar
      elevation="0"
      class="app-bar"
      color="rgb(16, 32, 61)"
      density="prominent"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon size="x-large"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="ml-0 mr-16">
        <h1>Reportaí</h1>
        <img src="@/assets/logo-f.png" alt="" height="50"
      /></v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-row dense>
        <v-col cols="12">
          <v-sheet width="100%" height="100" color="blue-darken-3">
            <v-container class="pt-6">
              <h1>Entrar</h1>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style>
</style>