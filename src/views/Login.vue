<template>
  <div class="login">
    <alert class="alert"/>
    <logo class="logo"/>
    <form-login/>
  </div>
</template>

<style lang="scss" scoped>
  $margin-bottom: 54px;

  .login {
    background-attachment: fixed;
    background-image:      url("../assets/img/login/img-bg-login.jpg");
    background-position:   center center;
    background-repeat:     no-repeat;
    background-size:       cover;
    min-height:            100vh;
    padding-top:           136px;
    position:              absolute;
    width:                 100%;

    .alert, .logo {
      margin-bottom: $margin-bottom;
    }
  }
</style>

<script>
import Alert from '@/components/login/Alert.vue';
import Logo from '@/components/login/Logo.vue';
import FormLogin from '@/components/login/FormLogin.vue';

export default {
  name: 'login',
  components: {
    Alert,
    Logo,
    FormLogin,
  },
};
</script>
