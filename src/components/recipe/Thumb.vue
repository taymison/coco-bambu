<template>
  <div v-if="recipe" class="thumb" :style="backgroundImage">
    <div class="thumb__header">
      <back/>
      <time-box :time="recipe.time"/>
    </div>
    <div class="thumb__text">
      <h1>{{ recipe.name }}</h1>
      <p>{{ recipe.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .thumb {
    background-position: center bottom;
    background-repeat:   no-repeat;
    background-size:     cover;
    display:             flex;
    flex-direction:      column;
    justify-content:     space-between;
    min-height:          500px;
    width:               100%;

    &__header {
      display:         flex;
      justify-content: space-between;
      padding:         15px;
    }

    &__text {
      padding-left: 2.25em;

      h1 {
        color:       #fbf9fa;
        font-size:   1.6em;
        margin:      0 0 1em 0;
        text-shadow: 1px 1px #726f5c;
      }
      p {
        color:       #f4f2f3;
        margin:      0 0 2em 0;
        font-size:   .85em;
        line-height: 1.3em;
        width:       80%;
        text-shadow: 1px 1px #33302b;
      }
    }
  }
</style>

<script>
import TimeBox from '@/components/recipe/TimeBox.vue';
import Back from '@/components/recipe/Back.vue';

export default {
  name: 'thumb',
  components: {
    TimeBox,
    Back,
  },
  props: ['recipe'],
  computed: {
    backgroundImage() {
      return this.recipe ? `background-image: url(${this.recipe.photos[1]})` : '';
    },
  },
};
</script>
