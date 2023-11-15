<template>
  <AppBar />
  <div>
    <v-col class="d-flex justify-center align-center pb-0">
      <v-col cols="6" class="pb-0">
        <v-card class="rounded-lg" color="rgb(218,255,251)">
          <div class="my-3">
            <span class="text-h6" style="color: #1b3849"
              >QUAL SOLUÇÃO VOCÊ QUER SUGERIR?</span
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
              v-model="suggest"
              bg-color="rgb(218,255,251)"
              :rules="[rules.suggestMax, rules.suggestMin]"
              no-resize
              rows="7"
              label="Sugira uma melhoria..."
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
    @click="submitSuggest"
    :disabled="suggest.length >= 201 || suggest.length <= 29"
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
    suggest: "", // Mudança aqui para usar "suggest" em vez de "report"
    rules: {
      suggestMin: (value) => value.length >= 30 || "Mínimo 30 characters",
      suggestMax: (value) => value.length <= 200 || "Máximo de 200 caracteres",
    },
  }),
  components: {
    AppBar,
    FooterLayout,
    SaveBtn,
  },
  methods: {
    async submitSuggest() {
      try {
        await this.$store.dispatch("submitSuggest", {
          suggestDescription: this.suggest,
        });
      } catch (error) {
        console.error("Erro ao despachar a ação submitSuggest:", error);
      }
    },
  },
};
</script>

<style>
</style>