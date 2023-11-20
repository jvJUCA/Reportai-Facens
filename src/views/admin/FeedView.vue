<template>
  <app-bar></app-bar>
  <div>
    <v-carousel
      v-if="complaints.length > 0 && dataLoaded"
      height="350"
      v-model="model"
      show-arrows="hover"
      cycle
      hide-delimiters
      interval="10000"
    >
      <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <v-container fill-height>
          <v-row>
            <v-col
              v-for="complaint in complaintsByItem(index)"
              :key="complaint.id"
            >
              <v-card max-width="400" color="rgb(218,255,251)">
                <v-card-title>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar
                      style="cursor: pointer;"
                      @click="complaint.type == 'report' ? $router.push(`/profile/${complaint.reportAuthorId}`) : $router.push(`/profile/${complaint.suggestAuthorId}`)"
                        color="grey-darken-3"
                        :image="
                          complaint.type == 'report'
                            ? complaint.reportAuthorAvatar
                            : complaint.suggestAuthorAvatar
                        "
                      ></v-avatar>
                    </template>
                    <v-list-item-content style="text-align: left !important">
                      <v-list-item-subtitle>{{
                        getTypeName(complaint.type)
                      }}</v-list-item-subtitle>
                      <v-list-item-title class="font-weight-bold">
                        {{
                          complaint.type == "report"
                            ? complaint.reportAuthorName
                            : complaint.suggestAuthorName
                        }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-title>
                <div class="d-flex align-center justify-center">
                  <v-sheet
                    min-height="200"
                    class="rounded ml-7 mr-7 mb-14"
                    :color="
                      complaint.type == 'report'
                        ? 'rgb(204,169,100)'
                        : '#66CFC4'
                    "
                  >
                    <v-card-text style="color: white">
                      <div>
                        {{
                          complaint.type == "report"
                            ? complaint.reportDescription
                            : complaint.suggestDescription
                        }}
                      </div>
                    </v-card-text>
                  </v-sheet>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <div v-if="complaints.length == 0 && dataLoaded" class="d-flex align-center justify-center" style="min-height: 50vh">
      <v-col cols="12">
        <span class="text-h4" style="color: #f2f2f2"
          >Águas calmas por aqui!
        </span>
        <br />
        <span class="text-h6" style="color: #cccccc"
          >Nenhum problema reportado até agora.
          <br />
          <img height="125" src="@/assets/duck.gif" />
        </span>
      </v-col>
    </div>
  </div>
  <FooterLayout />
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
import ReportController from "@/controllers/ReportsController";
import SuggestController from "@/controllers/SuggestsController";

export default {
  name: "FeedView",
  components: {
    AppBar,
    FooterLayout,
  },
  data: () => ({
    model: 0,
    cardsPerItem: 3,
    complaints: [],
    dataLoaded: false
  }),
  async created() {
    var dbReports = await new ReportController().readAll();
    var dbSuggests = await new SuggestController().readAll();
    this.complaints = dbReports.concat(dbSuggests);
    this.dataLoaded = true
  },

  computed: {
    carouselItems() {
      return Array.from(
        { length: Math.ceil(this.totalCards / this.cardsPerItem) },
        (_, index) => index
      );
    },
    totalCards() {
      return this.complaints.length;
    },
  },
  methods: {
    complaintsByItem(itemIndex) {
      const start = itemIndex * this.cardsPerItem;
      const end = start + this.cardsPerItem;
      return this.complaints.slice(start, end);
    },
    getTypeName(type) {
      if (type === "report") {
        return "Reportado por";
      } else if (type === "suggest") {
        return "Sugerido por";
      }
      // Adicione mais condições conforme necessário
      return "";
    },
  },
};
</script>

<style>
#app {
  background-color: rgb(16, 32, 61);
  min-height: 100vh; /* Garante que o conteúdo ocupe pelo menos a altura da janela */
}
.content {
  flex: 1; /* Faz o conteúdo se estender automaticamente */
}
</style>
