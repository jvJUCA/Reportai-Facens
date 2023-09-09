<template>
  <AppBar />
  <div>
    <v-carousel
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
            <v-col v-for="cardIndex in this.cardsPerItem" :key="cardIndex">
              <v-card max-width="400" color="rgb(218,255,251)">
                <v-card-title>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar
                        color="grey-darken-3"
                        image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-avatar>
                    </template>
                    <v-list-item-content style="text-align: left !important">
                      <v-list-item-subtitle>Reportado por</v-list-item-subtitle>
                      <v-list-item-title class="font-weight-bold">
                        João Vitor Amaral -
                        {{ item * this.cardsPerItem + cardIndex }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-title>
                <!-- <v-img
                class="white--text align-end"
                cover
                src="https://imFFgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2017/11/30/644650/20171130192757388735u.jpg"
              >
              </v-img> -->
                <div class="d-flex align-center justify-center">
                  <v-sheet
                    min-height="200"
                    class="rounded ml-7 mr-7"
                    color="rgb(204,169,100)"
                  >
                    <v-card-text style="color: white">
                      <div>
                        Rapaziada os banheiros não têm acessibilidade para as
                        pessoas que mais precisam, dito isso vamos reclamar com
                        o pessoal do design
                      </div>
                    </v-card-text>
                  </v-sheet>
                </div>

                <v-card-actions>
                  <v-btn color="green" icon
                    ><v-icon color="green">mdi-arrow-up</v-icon>
                  </v-btn>

                  <v-btn color="red" icon
                    ><v-icon color="red">mdi-arrow-down</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
  <footer-layout />
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";

export default {
  name: "LoginView",
  components: {
    AppBar,
    FooterLayout,
  },
  data: () => ({
    model: 0,
    cardsPerItem: 3,
  }),
  computed: {
    carouselItems() {
      return Array.from(
        { length: Math.ceil(this.totalCards / this.cardsPerItem) },
        (_, index) => index
      );
    },
    totalCards() {
      return 13;
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
