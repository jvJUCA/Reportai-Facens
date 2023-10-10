<template app>
  <AppBar />
  <v-card
    color="transparent"
    class="mx-auto px-6 py-8 mt-13"
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
        placeholder="Insira seu RA"
        variant="solo-filled"
        bg-color="rgb(218,255,251)"
      ></v-text-field>

      <v-text-field
        style="color: rgb(135, 190, 208); background-color: #00000000"
        v-model="password"
        class="centered-input2"
        :readonly="loading"
        :rules="[rules.requiredPassword]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        clearable
        label="Senha"
        variant="solo-filled"
        placeholder="Insira sua senha"
        @click:append="show1 = !show1"
        bg-color="rgb(218,255,251)"
      ></v-text-field>

      <v-btn
        :disabled="!form"
        :loading="loading"
        block
        color="success"
        size="large"
        type="submit"
        variant="elevated"
        class="mt-2"
      >
        Entrar
      </v-btn>
    </v-form>
  </v-card>

  <!-- <v-col cols="5" class="ml-auto mr-auto">
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-text-field
        v-model="email"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="RA"
      ></v-text-field>
    </v-form>
  </v-col>

  <v-col>
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-text-field
        v-model="password"
        :readonly="loading"
        :rules="[required]"
        clearable
        label="Senha"
        placeholder="Enter your password"
      ></v-text-field>
    </v-form>
  </v-col>

  <v-col cols="12">
    <v-btn
      :disabled="!form"
      :loading="loading"
      block
      color="success"
      size="large"
      type="submit"
      variant="elevated"
    >
      Sign In
    </v-btn>
  </v-col> -->

  <FooterLayout />
</template>
<script>
import AppBar from "@/components/AppBar.vue";
import FooterLayout from "@/components/Footer.vue";
export default {
  name: "LoginView",
  data: () => ({
    form: false,
    loading: false,
    show1: false,
    show2: true,
    password: null,
    email: "",
    rules: {
      requiredEmail: (value) => !!value || "Email não informado!",
      requiredPassword: (value) => !!value || "Senha não informada!",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail invalido!";
      },
    },
  }),

  methods: {
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
.v-text-field.centered-input .v-label {
  left: 36% !important;
  transform: translateX(-50%);
}
.v-text-field.centered-input2 .v-label {
  left: 35% !important;
  transform: translateX(-50%);
}
</style>

