<template>
  <AppBar />
  <div>
    <v-row>
      <v-col cols="3" class="ml-5">
        <v-avatar
          image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          size="200"
          class="mt-5"
        ></v-avatar>
        <v-col>
          <span class="text-h5 mt-3" style="color: white"
            >{{user.name}}</span
          >
          <br />
          <span class="text-h6 mt-3" style="color: white">{{user.RA}}</span>
          <v-card class="ml-4 mr-4 mt-1">
            <span
              class="text-subtitle-1 ml-1 mr-1"
              style="color: rgb(0, 28, 48)"
              >Análise e Desenvolvimento de sistemas</span
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
          <v-textarea
            clearable=""
            bg-color="grey-lighten-4"
            no-resize
            rows="3"
            label="QUEM SOU EU"
            variant="outlined"
            class="mx-5 mt-5"
          >
          </v-textarea>
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
                    <v-card-text style="color: white">
                      <div>
                        Rapaziada os banheiros não têm acessibilidade para as
                        pessoas que mais precisam...
                      </div>
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
                    <v-card-text style="color: white">
                      <div>
                        Rapaziada os banheiros não têm acessibilidade para as
                        pessoas que mais precisam...
                      </div>
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
export default {
  name: "ProfileView",
  components: {
    AppBar,
    FooterLayout,
  },
    computed: {
    user() {
      return this.$store.getters.user
    }
  },
};
</script>

<style scoped>
</style>