<template>
  <div class="form-login">
    <alert-login v-if="loginError" message="Nome de usuário/senha incorreto(s)"></alert-login>
    <input-login input-type="text"
      icon="login"
      placeholder="Nome do usuário"
      :input-error="inputErrorText"
      v-model="name"
      v-on:login="login"
    />
    <br>
    <input-login input-type="password"
      icon="key"
      placeholder="Senha"
      :input-error="inputErrorPass"
      v-model="password"
      v-on:login="login"
    />
    <br>
    <button-login v-on:login="login"/>
  </div>
</template>

<style lang="scss" scoped>
  .form-login {
    margin: 0 auto 5em auto;
    width:  40%;

    @media screen and (min-width: 1024px) {
      width: 30%;
    }
  }
</style>


<script>
import InputLogin from '@/components/login/InputLogin.vue';
import ButtonLogin from '@/components/login/ButtonLogin.vue';
import AlertLogin from '@/components/login/AlertLogin.vue';

export default {
  name: 'formLogin',
  components: {
    InputLogin,
    ButtonLogin,
    AlertLogin,
  },
  data() {
    return {
      loginError: false,
      inputErrorText: false,
      inputErrorPass: false,
      name: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.emptyErrorMessages();

      if (this.validateLogin() && this.checkLogin(this.name, this.password)) {
        return this.$router.push('orders');
      }

      return false;
    },
    validateLogin() {
      if (this.name === '') {
        this.inputErrorText = true;

        return false;
      }

      if (this.password === '') {
        this.inputErrorPass = true;

        return false;
      }

      return true;
    },
    checkLogin(name, password) {
      if (name === 'testeusername' && password === 'testesenha') return true;

      this.loginError = true;

      return false;
    },
    emptyErrorMessages() {
      this.loginError = false;
      this.inputErrorText = false;
      this.inputErrorPass = false;
    },
  },
};
</script>
