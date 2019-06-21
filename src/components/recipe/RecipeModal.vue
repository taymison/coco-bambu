<template>
  <div class="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__container__close">
            <img src="../../assets/img/recipe/icon-close.png" alt="Close modal" @click="clicked">
          </div>
          <div class="modal__container__body">
            <h1 v-if="title">{{ title }}</h1>
            <p>{{ text }}</p>
            <button @click="clicked">{{ textButton }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal {
    &__mask {
      background-color: rgba(0, 0, 0, .75);
      display:          table;
      height:           100%;
      left:             0;
      position:         fixed;
      top:              0;
      width:            100%;
      z-index:          9998;
    }

    &__wrapper {
      display:        table-cell;
      vertical-align: middle;
    }

    &__container {
      margin: 0 auto;
      width:  26em;

      &__close {
        display:         flex;
        justify-content: flex-end;
        margin-bottom:   .5em;

        img {
          height: 100%;
          max-width: 100%;

          &:hover {
            cursor: pointer;
          }
        }
      }

      &__body {
        background-color: #fff;
        padding:          3.375em 2.4375em;

        h1 {
          color:          #141414;
          font-size:      1.2em;
          margin-bottom:  1.875em;
          text-align:     center;
          text-transform: uppercase;
        }

        p {
          color:       #181818;
          font-size:   1em;
          font-weight: 300;
          margin:      0 0 3.375em 0;
          text-align:  center;
        }

        button {
          background-color: #fff;
          border:           solid 3px #000;
          color:            #1a1a1a;
          display:          block;
          font-size:        .8125em;
          font-weight:      600;
          height:           3.5em;
          margin:           0 auto 1.5em auto;
          padding:          0 3.625em;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'recipeModal',
  props: ['title', 'text', 'textButton'],
  methods: {
    clicked() {
      this.$emit('clicked');
    },
  },
};
</script>
