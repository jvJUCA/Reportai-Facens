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
          <span class="text-h5 mt-3" style="color: white">{{ user.name }}</span>
          <br />
          <span class="text-h6 mt-3" style="color: white">{{ user.RA }}</span>
          <v-select
            class="mt-1"
            v-model="curso"
            bg-color="white"
            :items="courseOptions"
            rounded="lg"
            variant="solo-filled"
          ></v-select>
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
            v-model="description"
            no-resize
            rows="3"
            label="QUEM SOU EU"
            variant="outlined"
            class="mx-5 mt-5"
            counter="150"
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
                        {{ Object.values(myReports)[0].reportDescription }}
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
                        {{ Object.values(mySuggests)[0].suggestDescription }}
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
  <SaveBtn
    v-if="description !== undefined && curso !== undefined"
    @click="submitChanges()"
    :disabled="description.length >= 151"
    style="position: fixed; bottom: 80px; right: 15px"
  />
  <FooterLayout />
</template>

<script>
import SaveBtn from "@/components/SaveBtn.vue";
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
export default {
  name: "ProfileView",
  components: {
    AppBar,
    FooterLayout,
    SaveBtn,
  },
  data: () => ({
    myReports: [],
    mySuggests: [],
    description: "",
    curso: "Nenhum curso selecionado!",
    dataLoaded: false,
    courseOptions: [
      "Medicina Veterinária",
      "Biomedicina",
      "Enfermagem",
      "Odontologia",
      "Psicologia",
      "Engenharia Agronômica",
      "Engenharia de Alimentos",
      "Engenharia Civil",
      "Engenharia de Computação",
      "Engenharia Elétrica",
      "Engenharia Mecânica",
      "Engenharia Mecatrônica",
      "Engenharia de Produção",
      "Engenharia Química",
      "Análise e Desenvolvimento de Sistemas",
      "Tecnologia em Banco de Dados",
      "Tecnologia em Gestão de T.I",
      "Tecnologia em Jogos Digitais",
      "Arquitetura e Urbanismo",
    ],
  }),
  async created() {
    this.loadData();
  },

  methods: {
    selectCourse(course) {
      this.curso = course;
    },
    async submitChanges() {
      try {
        let payload = {
          description: this.description,
          curso: this.curso,
        };
        await this.$store.dispatch("submitUserChanges", payload);
      } catch (error) {
        console.error("Erro ao despachar a ação submitReport:", error);
      }
    },
    async loadData() {
      try {
        this.myReports = this.user.myReports || [];
        this.mySuggests = this.user.mySuggests || [];
        this.curso = this.user.userCourse
        this.description = this.user.userDescription
        this.dataLoaded = true
      } catch (err) {
        console.error("Error loading user data", err);
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>
</style>