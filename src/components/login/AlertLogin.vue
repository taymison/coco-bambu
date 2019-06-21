<template>
  <p class="alert-login">{{ message }}</p>
</template>

<style lang="scss" scoped>
  .alert-login {
    color:      red;
    font-style: italic;
    margin:     0 0 5px 0;
    text-align: center;
  }
</style>

<script>
export default {
  name: 'alertLogin',
  props: ['message'],
};
</script>
