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
              no-resize
              rows="7"
              label="Reporte o seu problema..."
              variant="outlined"
              class="mx-5 mt-5"
            >
            </v-textarea>
          </div>
        </v-card>
      </v-col>
    </v-col>
  </div>
  <SaveBtn style="position: fixed; bottom: 110px; right: 30px" />
  <FooterLayout />
</template>


<script>
import SaveBtn from "@/components/SaveBtn.vue";
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
export default {
  data: () => ({
    report: '',
  }),
  components: {
    AppBar,
    FooterLayout,
    SaveBtn,
  },
};
</script>

<style>
</style>