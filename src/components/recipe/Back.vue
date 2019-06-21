<template>
  <div class="back" @click="back">
    <div class="back__icon">
      <img src="../../assets/img/recipe/icon-back.png" alt="Back">
    </div>
    <p class="back__text">Voltar</p>
  </div>
</template>

<style lang="scss" scoped>
  .back {
    align-items: flex-start;
    display:     flex;

    &:hover {
      cursor: pointer;
    }

    &__text {
      color:  #fdfff1;
      margin: 10px 0 0 10px;
    }
  }
</style>


<script>
export default {
  name: 'back',
  methods: {
    back() {
      this.$router.push('../orders');
    },
  },
};
</script>
