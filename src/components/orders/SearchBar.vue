<template>
  <div class="search-bar">
    <input class="search-bar__input"
      type="text"
      placeholder="Buscar receita..."
      v-on:input="$emit('input', $event.target.value)"
    />
    <div class="search-bar__icon"></div>
  </div>
</template>

<style lang="scss" scoped>
  .search-bar {
    display: flex;
    width:   90%;

    &__input {
      border-style: none;
      font-size:    .8125em;
      padding:      .46875em .75em;
      width: 70%;

      &::placeholder {
        color:      #474747;
        font-style: italic;
      }
    }

    &__icon {
      background-color: #fff;
      background-image: url('../../assets/img/orders/icon-busca.png');
      background-repeat: no-repeat;
      background-size: 75%;
      background-position: center center;
      width: 2.75em;
      height: 2.75em;
    }
  }
</style>


<script>
export default {
  name: 'searchBar',
  props: ['value'],
};
</script>
