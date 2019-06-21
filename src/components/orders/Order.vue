<template>
  <div>
    <div class="order">
      <img :src="image" :alt="name" class="order__image">
      <div class="order__text">
        <h1>{{ name }}</h1>
        <p>{{ description }}</p>
      </div>
      <div class="order__actions">
        <div @click="viewRecipe" class="order__actions__see-recipe">
          Ver<br>receita
        </div>
      </div>
    </div>
    <separator-line/>
  </div>
</template>

<style lang="scss" scoped>
  .order {
    align-items: center;
    display:    flex;
    max-height: 160px;

    &__image {
      max-width: 20%;
    }

    &__text {
      padding-left: 15px;
      width:        40%;

      h1 {
        color:     #323232;
        font-size: 1em;
      }

      p {
        color:     #4d4d4d;
        font-size: .65em;
        line-height: 1.5em;
      }
    }

    &__actions {
      display:         flex;
      justify-content: flex-end;
      width:           40%;

      &__see-recipe {
        background-color: #f67a20;
        border-radius:    50%;
        color:            #fbffff;
        font-size:        1em;
        font-weight:      600;
        padding:          20px 15px;
        text-align:       center;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>

<script>
import SeparatorLine from '@/components/orders/SeparatorLine.vue';

export default {
  name: 'order',
  components: {
    SeparatorLine,
  },
  props: ['id', 'image', 'name', 'description'],
  methods: {
    viewRecipe() {
      return this.$router.push(`recipes/${this.id}`);
    },
  },
};
</script>
