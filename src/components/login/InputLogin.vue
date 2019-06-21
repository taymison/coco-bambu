<template>
  <div>
    <alert-login v-if="inputError" message="Campo obrigatório"></alert-login>
    <div class="input-login">
      <div :class="classes"></div>
      <input class="input-login__input"
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
        v-on:input="$emit('input', $event.target.value)"
        v-on:keyup.enter="login"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $border: solid 6px #fff;
  $height: 2.125em;
  $width:  $height;

  .input-login {
    display:         flex;
    justify-content: center;

    &__icon {
      background-color:  #fff;
      background-repeat:   no-repeat;
      background-position: center center;
      background-size:     contain;
      border:              $border;
      height:              $height - 5;
      width:               $width;

      &--login {
        background-image: url('../../assets/img/login/icon-login.png');
      }

      &--key {
        background-image: url('../../assets/img/login/icon-key.png');
      }
    }

    &__input {
      border:    $border;
      font-size: 1em;
      height:    $height;
      width:     100%;

      &::placeholder {
        font-style: italic;
      }
    }
  }
</style>

<script>
import AlertLogin from '@/components/login/AlertLogin.vue';

export default {
  name: 'inputLogin',
  components: {
    AlertLogin,
  },
  props: ['inputType', 'placeholder', 'icon', 'inputError', 'value'],
  computed: {
    classes() { return `input-login__icon input-login__icon--${this.icon}`; },
  },
  methods: {
    login() {
      this.$emit('login');
    },
  },
};
</script>
