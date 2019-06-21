<template>
  <button :class="classColor" @click="clicked">{{ text }}</button>
</template>

<style lang="scss" scoped>
  button {
    border:      none;
    font-weight: 600;
    height:      2.875em;
    padding:     0 2.08em;

    &:hover {
      cursor: pointer;
    }
  }

  .orange {
    background-color: #f77a20;
    color:            #f6fcfc;
  }

  .white {
    background-color: #66d701;
    color:            #f6fffe;
  }
</style>

<script>
export default {
  name: 'recipeButton',
  props: ['text', 'classColor', 'clickFunction'],
  methods: {
    clicked() {
      this.$emit('clicked');
    },
  },
};
</script>
