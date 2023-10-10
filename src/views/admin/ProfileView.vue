<template>
  <AppBar />
  <div>
    <v-card rounded="6" max-width="1100" min-height="450r" color="blue-lighten-2 mt-3 ml-auto mr-auto">
      <v-col cols="12">
        <v-avatar
          image="https://i0.wp.com/iowa-icon.com/wp-content/uploads/sites/2/2022/12/coming-soon.png?fit=275%2C275&ssl=1"
          size="200"
        ></v-avatar>
        <v-col cols="12">
          <span class="text-h2" style="color: white">João</span>
        </v-col>
      </v-col>
    </v-card>
  </div>
  <FooterLayout />
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
export default {
  name: "ProfileView",
  components: {
    AppBar,
    FooterLayout,
  },
};
</script>

<style></style>
