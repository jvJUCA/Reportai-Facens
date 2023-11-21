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
          v-if="$route.path !== '/login' && $route.path !== '/signup'"
          :class="this.$route.path == '/' ? 'mr-10' : 'mr-0 '"
          @click="drawer = !drawer"
          size="x-large"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title
        :style="this.$route.path == '/' ? 'margin-left: 20vh' : 'margin-right: 86px'"
      >
        <h1 class="pt-3">Reportaí</h1>
        <img src="@/assets/logo-f.png" alt="" height="50" />
      </v-app-bar-title>
      <template v-slot:append v-if="$route.path === '/'">
        <v-card
          class="mr-3"
          @click="$router.push('/profile')"
          style="cursor: pointer"
          color="#176B87"
        >
          <v-row align="center">
            <v-col cols="12" class="text-center">
              <div class="d-flex align-center justify-center">
                <div
                  class="text-subtitle mr-5 ml-2 font-weight-medium"
                  style="color: white"
                >
                  {{ user.name }}
                  <br />
                  <span class="text-subtitle">{{ user.RA }}</span>
                </div>
                <v-avatar
                  v-if="user.userAvatar"
                  color="grey-darken-3"
                  size="60"
                  :image="user.userAvatar"
                ></v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      elevation="5"
      v-model="drawer"
      temporary
      color="rgb(16, 32, 61)"
    >
      <v-list dense nav>
        <v-list-item
          @click="$router.push('/profile')"
          prepend-icon="mdi-account"
          title="Profile"
          value="Home"
        ></v-list-item>
        <v-list-item
          v-if="$route.path !== '/login' && $route.path !== '/signup'"
          prepend-icon="mdi-logout"
          title="Logout"
          value="Logout"
          @click="logout"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-sheet width="100%" height="100" color="#176B87">
        <v-row>
          <v-col cols="12" md="4" class="mt-4">
            <v-btn
              size="x-large"
              color="rgb(16, 32, 61)"
              @click="$router.push('/')"
              >Início</v-btn
            >
          </v-col>
          <v-col cols="12" md="4" class="mt-4">
            <v-btn
              size="x-large"
              color="rgb(16, 32, 61)"
              @click="$router.push('/report')"
              >Reportar</v-btn
            >
          </v-col>
          <v-col cols="12" md="4" class="mt-4">
            <v-btn
              size="x-large"
              color="rgb(16, 32, 61)"
              @click="$router.push('/suggest')"
              >Sugestão</v-btn
            >
          </v-col>
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
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch {
        console.log("logout error");
      }
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
