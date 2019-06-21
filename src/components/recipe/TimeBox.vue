<template>
  <div class="time">
    <div class="time__icon">
      <img src="../../assets/img/recipe/icon-time.png" alt="Times's icon">
    </div>
    <div class="time__text">
      <p class="time__text__sub">Tempo de preparo</p>
      <p class="time__text__main">{{ timeInMinutes }} minutos</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .time {
    align-items:      center;
    background-color: #fff;
    display:          flex;
    padding:          .5em 0;
    min-width:        190px;

    &__icon {
      text-align: center;
      width:      35%;

      img {
        height: 100%;
        margin: 0 auto;
      }
    }

    &__text {
      width: 65%;

      p {
        margin: .5em 0;
      }

      &__sub {
        color:     #2a2a2a;
        font-size: .75em;
      }

      &__main {
        color:       #080607;
        font-size:   1em;
        font-weight: 600;
      }
    }
  }
</style>

<script>
export default {
  name: 'timeBox',
  props: ['time'],
  computed: {
    timeInMinutes() {
      return this.time / 60000;
    },
  },
};
</script>
