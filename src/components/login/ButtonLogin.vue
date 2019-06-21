<template>
  <button class="button-login" @click="login">Acessar</button>
</template>

<style lang="scss" scoped>
  .button-login {
    background-color: #f67a20;
    border:           none;
    color:            #fff;
    font-size:        1em;
    font-weight:      600;
    height:           2.65em;
    width:            100%;
  }
</style>

<script>
export default {
  name: 'buttonLogin',
  methods: {
    login() {
      this.$emit('login');
    },
  },
};
</script>
