<template>
  <div class="bottom-bar">
    <status :progress="progress" :time="time"/>
    <recipe-button v-if="showStartButton"
      text="Iniciar preparação"
      class-color="orange"
      v-on:clicked="startCooking"
    />
    <recipe-button v-if="showFinishButton"
      text="Finalizar"
      class-color="white"
      v-on:clicked="finishCooking"
    />
  </div>
</template>

<style lang="scss" scoped>
  .bottom-bar {
    align-items:      center;
    background-color: #f2f0f1;
    display:          flex;
    height:           3.6875em;
    justify-content:  space-between;
    padding:          .5em .875em .5em 2.3125em;
  }
</style>

<script>
import Status from '@/components/recipe/Status.vue';
import RecipeButton from '@/components/recipe/RecipeButton.vue';

export default {
  name: 'bottomBar',
  components: {
    Status,
    RecipeButton,
  },
  props: ['progress', 'time', 'showStartButton', 'showFinishButton'],
  methods: {
    startCooking() {
      this.$emit('startCooking');
    },
    finishCooking() {
      this.$emit('finishCooking');
    },
  },
};
</script>
