<template app>
  <AppBar />
  <v-row align="center">
    <v-col cols="6" class="ml-auto">
      <v-card
        color="transparent"
        class="ml-auto pt-6 pl-6 mt-5"
        max-width="344"
        elevation="0"
      >
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            style="
              color: rgb(135, 190, 208);
              background-color: rgba(218, 255, 251, 0);
            "
            v-model="name"
            :readonly="loading"
            class="mb-2 centered-input"
            :rules="[rules.requiredName]"
            clearable
            label="Nome"
            placeholder="Insira seu nome completo"
            variant="solo-filled"
            bg-color="rgb(218,255,251)"
          ></v-text-field>

          <v-text-field
            style="color: rgb(135, 190, 208); background-color: #00000000"
            v-model="RA"
            class="centered-input2"
            :readonly="loading"
            :rules="[rules.requiredRA, rules.sizeRA]"
            type="number"
            name="input-10-1"
            clearable
            label="RA"
            variant="solo-filled"
            placeholder="Insira seu RA"
            @click:append="show1 = !show1"
            bg-color="rgb(218,255,251)"
          ></v-text-field>
        </v-form>
      </v-card>
    </v-col>
    <!-- //////////////////////////////////////////////// -->
    <v-col cols="6" class="mr-auto">
      <v-card
        color="transparent"
        class="pt-6 pr-6 mt-5"
        max-width="344"
        elevation="0"
      >
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            style="
              color: rgb(135, 190, 208);
              background-color: rgba(218, 255, 251, 0);
            "
            v-model="email"
            :readonly="loading"
            :rules="[rules.requiredEmail, rules.email]"
            class="mb-2 centered-input"
            clearable
            label="Email"
            placeholder="Insira seu E-mail"
            variant="solo-filled"
            bg-color="rgb(218,255,251)"
          ></v-text-field>

          <v-text-field
            style="color: rgb(135, 190, 208); background-color: #00000000"
            v-model="password"
            class="centered-input2"
            :readonly="loading"
            :rules="[rules.requiredPassword, rules.sizePassword]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            clearable
            label="Senha"
            variant="solo-filled"
            placeholder="Insira sua senha"
            @click:append="show1 = !show1"
            bg-color="rgb(218,255,251)"
          ></v-text-field>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-btn
        :disabled="!form"
        :loading="loading"
        color="success"
        size="x-large"
        type="submit"
        variant="elevated"
        @click="onSignUp()"
      >
        Cadastrar
      </v-btn>
    </v-col>
  </v-row>

  <FooterLayout />
</template>
<script>
// import { collection, addDoc } from "firebase/firestore";
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
// import { db } from '@/firebase';
export default {
  name: "SignUpView",
  data: () => ({
    form: false,
    loading: false,
    show1: false,
    show2: true,
    name: "",
    password: "",
    email: "",
    RA: "",
    rules: {
      requiredName: (value) => !!value || "Nome não informado!",
      requiredEmail: (value) => !!value || "Email não informado!",
      requiredPassword: (value) => !!value || "Senha não informada!",
      counter: (value) => value.length <= 20 || "Máximo de 20 caracteres!",
      requiredRA: (value) => !!value || "RA não informado!",
      sizePassword: (value) =>
        (value.length >= 6 && value.length <= 25) || "Mínimo de 6 caracteres!",
      sizeRA: (value) => value.length == 6 || "RA inválido!",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail invalido!";
      },
    },
  }),

  methods: {
    async onSignUp() {
      await this.$store.dispatch("signup", {
        email: this.email,
        password: this.password,
        name: this.name,
        RA: this.RA
      });
      this.$router.push('/login');
    },
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Este campo é necessário";
    },
  },
  components: {
    AppBar,
    FooterLayout,
  },
  // Outras configurações da visualização
};
</script>

<style>
#app {
  background-color: rgb(16, 32, 61);
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.v-text-field.centered-input .v-label {
  left: 38% !important;
  transform: translateX(-50%);
}
.v-text-field.centered-input2 .v-label {
  left: 38% !important;
  transform: translateX(-50%);
}
</style>
