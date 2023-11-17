<template>
  <AppBar />
  <div>
    <v-col class="d-flex justify-center align-center pb-0">
      <v-col cols="6" class="pb-0">
        <v-card class="rounded-lg" color="rgb(218,255,251)">
          <div class="my-3">
            <span class="text-h6" style="color: #1b3849"
              >QUAL PROBLEMA VOCÊ QUER REPORTAR?</span
            >
          </div>
        </v-card>
      </v-col>
    </v-col>
    <v-col class="d-flex justify-center align-center">
      <v-col cols="8">
        <v-card class="rounded-lg pb-0" color="rgb(218,255,251)">
          <div class="ma-3">
            <v-textarea
              v-model="report"
              bg-color="rgb(218,255,251)"
              :rules="[rules.reportMax, rules.reportMin]"
              no-resize
              rows="7"
              label="Reporte o seu problema..."
              variant="outlined"
              class="mx-5 mt-5"
              counter="200"
            >
            </v-textarea>
          </div>
        </v-card>
      </v-col>
    </v-col>
  </div>
  <SaveBtn
    @click="submitReport()"
    :disabled="report.length >= 201 || report.length <= 29"
    style="position: fixed; bottom: 110px; right: 30px"
  />
  <FooterLayout />
</template>


<script>
import SaveBtn from "@/components/SaveBtn.vue";
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
export default {
  data: () => ({
    report: "",
    rules: {
      reportMin: (value) => value.length >= 30 || "Mínimo 30 characters",
      reportMax: (value) => value.length <= 200 || "Máximo de 200 caracteres",
    },
  }),
  components: {
    AppBar,
    FooterLayout,
    SaveBtn,
  },
  methods: {
    async submitReport() {
       try {
        await this.$store.dispatch('submitReport', { reportDescription: this.report });
        this.$router.push('/');
      } catch (error) {
        console.error('Erro ao despachar a ação submitReport:', error);
      }
    }
  }
};
</script>

<style>
</style>