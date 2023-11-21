<template>
  <AppBar />
  <div>
    <v-row>
      <v-col cols="3" class="ml-5">
        <v-avatar
          v-if="user && user.userAvatar"
          :image="user.userAvatar"
          size="200"
          class="mt-5"
        ></v-avatar>
        <v-col>
          <span v-if="user" class="text-h5 mt-3" style="color: white">{{
            user.name
          }}</span>
          <br />
          <span v-if="user" class="text-h6 mt-3" style="color: white">{{
            user.RA
          }}</span>
          <v-card class="ml-4 mr-4 mt-1">
            <span
              v-if="user"
              class="text-subtitle-1 mx-3 my-3"
              style="color: rgb(0, 28, 48)"
              >{{ user.userCourse }}</span
            >
          </v-card>
        </v-col>
      </v-col>
      <v-col cols="8">
        <v-card
          rounded="6"
          max-width="1100"
          min-height="450r"
          color="white"
          class="mt-5 mb-5 ml-auto mr-auto"
        >
          <v-sheet
            min-height="100"
            class="mx-5 my-5 rounded"
            color="grey-lighten-2"
          >
            <v-card-text class="text-h6">
              <div v-if="user">
                {{
                  user.userDescription == ""
                    ? "Oops! Parece que o usuario esqueceu de se descrever."
                    : user.userDescription
                }}
              </div>
            </v-card-text>
          </v-sheet>
          <v-row>
            <v-col cols="6">
              <v-card
                class="mx-5 mb-4"
                variant="outlined"
                color="grey-darken-1"
              >
                <v-col cols="12">
                  <span
                    class="text-center font-weight-thin text-body-2"
                    style="color: rgb(0, 28, 48)"
                    >ULTIMA RECLAMAÇÃO</span
                  >
                </v-col>
                <div class="d-flex align-center justify-center">
                  <v-sheet
                    min-height="100"
                    class="rounded ml-4 mr-4 mb-4"
                    color="rgb(204,169,100)"
                  >
                    <v-card-text v-if="user" style="color: white">
                      <div
                        v-if="
                          user &&
                          user.myReports &&
                          Object.keys(user.myReports).length > 0
                        "
                      >
                        {{ Object.values(user.myReports)[0].reportDescription }}
                      </div>
                      <div v-else>Usuario sem reclamações!</div>
                    </v-card-text>
                  </v-sheet>
                </div>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                class="mx-5 mb-4"
                variant="outlined"
                color="grey-darken-1"
              >
                <v-col cols="12">
                  <span
                    class="text-center font-weight-thin text-body-2"
                    style="color: rgb(0, 28, 48)"
                    >ULTIMA SUGESTÃO</span
                  >
                </v-col>
                <div class="d-flex align-center justify-center">
                  <v-sheet
                    min-height="100"
                    class="rounded ml-4 mr-4 mb-4"
                    color="rgb(100,204,197)"
                  >
                    <v-card-text style="color: white" v-if="user">
                      <div
                        v-if="
                          user &&
                          user.mySuggests &&
                          Object.keys(user.mySuggests).length > 0
                        "
                      >
                        {{
                          Object.values(user.mySuggests)[0].suggestDescription
                        }}
                      </div>
                      <div v-else>Usuario sem sugestões.</div>
                    </v-card-text>
                  </v-sheet>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <FooterLayout />
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
import UserController from "@/controllers/UserController";

export default {
  name: "UserProfile",
  components: {
    AppBar,
    FooterLayout,
  },
  data: () => ({
    profileData: null,
    dataLoaded: false,
    user: null,
  }),
  async created() {
    this.loadProfileData();
  },
  methods: {
    async loadProfileData() {
      try {
        const userId = this.$route.params.userId;
        this.user = await new UserController().getById(userId);

        this.dataLoaded = true;
      } catch (err) {
        console.error("Error loading user data", err);
        // Trate o erro conforme necessário
      }
    },
  },
};
</script>
<style scoped>
</style>