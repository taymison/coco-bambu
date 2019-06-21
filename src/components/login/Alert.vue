<template>
  <div class="alert">
    <div class="alert__content">
      <div class="alert__content__title">
        <p class="alert__content__title__number">1</p>
        <p class="alert__content__title__label">Novo pedido</p>
      </div>
      <div class="alert__content__text">
        <p>
          Por favor, faça o login para ver o pedido e ter acesso a receita com o modo de preparo
        </p>
      </div>
    </div>
    <div class="alert__triangle"></div>
  </div>
</template>

<style lang="scss" scoped>
  $background-color: #f8f8f8;

  .alert {
    background-color: transparent;
    font-family:      sans-serif;

    &__content {
      align-items:      center;
      background-color: $background-color;
      border-radius:    10px;
      display:          flex;
      margin:           0 auto;
      max-width:        50%;
      padding:          28px 32px;

      @media screen and (min-width: 1024px) {
        max-width: 40%;
      }

      &__title {
        display:        flex;
        flex-direction: column;
        text-align:     center;
        width:          40%;

        &__number {
          color:         #fa7a1f;
          font-size:     4em;
          font-weight:   600;
          margin-bottom: 0;
          margin-top:    0;
        }

        &__label {
          color:       #fa812e;
          font-size:  1.125em;
          font-weight: 300;
          margin-top:  0;
        }
      }

      &__text {
        padding-left: 55px;
        width:        60%;

        p {
          color:    #4b4b4b;
          font-style: italic;
          text-align: left;
        }
      }
    }

    &__triangle {
      border-left:  20px solid transparent;
      border-right: 20px solid transparent;
      border-top:   20px solid $background-color;
      height:       0;
      margin:       0 auto;
      width:        0;
    }
  }
</style>

<script>
export default {
  name: 'alert',
};
</script>
