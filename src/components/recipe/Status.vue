<template>
  <div class="status">
    <p>Status <b>{{ progress }}%</b> pronto e {{ time }} minuto(s) utilizado(s)</p>
    <div class="status__progress">
      <div class="status__progress__fill" :style="progressInWidth"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .status {
    p {
      color: #4b494a;
      font-size: .85em;
      margin: 0 0 10px 0;
    }

    &__progress {
      background-color: #fefcfd;
      height:           4px;
      width:            180px;

      &__fill {
        background-color: #f67a24;
        height:           100%;
      }
    }
  }
</style>

<script>
export default {
  name: 'status',
  props: ['progress', 'time'],
  computed: {
    progressInWidth() {
      return `width: ${this.progress}%`;
    },
  },
};
</script>
