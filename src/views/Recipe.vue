<template>
  <div>
    <thumb :recipe="recipe"/>
    <div v-if="recipe" class="ingredients">
      <list title="Ingredientes"
        :list="recipe.ingredients"
        v-on:checked="ingredientChecked"
        :checkable="ingredientsCheckable"
      />
    </div>
    <separator-line class="separator-line"/>
    <div v-if="recipe" class="steps">
      <list title="Modo de preparo"
        :list="recipe.steps"
        use-key="true"
        v-on:checked="stepChecked"
        :checkable="stepsCheckable"
      />
    </div>
    <div v-if="recipe">
      <bottom-bar
        :progress="progress"
        :time="timeInMinutes"
        v-on:startCooking="startCooking"
        v-on:finishCooking="finishCooking"
        :show-start-button="showStartButton"
        :show-finish-button="showFinishButton"
      />
    </div>
    <recipe-modal v-if="showModalIngredients"
      text="
        Para iniciar a preparação, certifique-se de que você tem todos os ingredientes selecionados!
      "
      text-button="Entendi"
      v-on:clicked="showModalIngredients = false"
    />
    <recipe-modal v-if="showModalSteps"
      text="
        Para finalizar a preparação, certifique-se de que você tem todos os passos selecionados!
      "
      text-button="Entendi"
      v-on:clicked="showModalSteps = false"
    />
    <recipe-modal v-if="showModalStopCooking"
      title="Obrigado"
      :text="textModalStopCooking"
      text-button="OK"
      v-on:clicked="backToOrders"
    />
  </div>
</template>

<style lang="scss" scoped>
  .ingredients {
    background-color: #fafafa;
  }

  .separator-line {
    margin: 0;
  }
</style>


<script>
import api from '../api';
import moment from 'moment';
import Thumb from '@/components/recipe/Thumb.vue';
import List from '@/components/recipe/List.vue';
import SeparatorLine from '@/components/orders/SeparatorLine.vue';
import BottomBar from '@/components/recipe/BottomBar.vue';
import RecipeModal from '@/components/recipe/RecipeModal.vue';

export default {
  name: 'recipe',
  components: {
    Thumb,
    List,
    SeparatorLine,
    BottomBar,
    RecipeModal,
  },
  props: ['id'],
  data() {
    return {
      recipe: null,
      ingredientsChecked: 0,
      stepsChecked: 0,
      progress: 0,
      timeStart: 0,
      timeFinish: 0,
      timeSpent: moment(0),
      showModalIngredients: false,
      showModalSteps: false,
      showModalStopCooking: false,
      ingredientsCheckable: true,
      stepsCheckable: false,
      showStartButton: true,
      showFinishButton: false,
    };
  },
  computed: {
    textModalStopCooking() {
      const minutes = this.timeSpent.minutes();
      const seconds = this.timeSpent.seconds();

      return `Prato finalizado com sucesso em ${minutes} minutos e ${seconds} segundos!`;
    },
    timeInMinutes() {
      return this.timeSpent.minutes();
    },
  },
  mounted() {
    api.getRecipe(this.id).then((response) => {
      this.recipe = response.data;
    });
  },
  methods: {
    startCooking() {
      if (this.verifyIngredientsChecked()) {
        this.ingredientsCheckable = false;
        this.stepsCheckable = true;
        this.showStartButton = false;
        this.showFinishButton = true;
        this.timeStart = moment();
      } else {
        this.showModalIngredients = true;
      }
    },
    finishCooking() {
      if (this.verifyStepsChecked()) {
        this.calculateTime();
        this.stepsCheckable = false;
        this.showModalStopCooking = true;
      } else {
        this.showModalSteps = true;
      }
    },
    verifyIngredientsChecked() {
      return this.ingredientsChecked === this.recipe.ingredients.length;
    },
    verifyStepsChecked() {
      return this.stepsChecked === this.recipe.steps.length;
    },
    backToOrders() {
      this.$router.push('../orders');
    },
    ingredientChecked(checked) {
      if (checked) {
        this.ingredientsChecked += 1;
      } else {
        this.ingredientsChecked -= 1;
      }
    },
    stepChecked(checked) {
      if (checked) {
        this.stepsChecked += 1;
      } else {
        this.stepsChecked -= 1;
      }

      this.calculateProgress();
      this.calculateTime();
    },
    calculateProgress() {
      this.progress = parseInt(this.stepsChecked * 100 / this.recipe.steps.length, 10);
    },
    calculateTime() {
      this.timeFinish = moment();
      this.timeSpent = moment(this.timeFinish - this.timeStart);
    },
  },
};
</script>
