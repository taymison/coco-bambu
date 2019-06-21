<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      <img src="../../assets/img/orders/logo-coco-bambu-mini.png" alt="Logo Coco Bambu">
    </div>
    <div class="nav-bar__search">
      <search-bar v-model="searchString"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-bar {
    background-color: #393939;
    display:          flex;
    width:            100%;

    &__logo {
      padding: 1em;
      width:   22%;

      img {
        margin:    0 auto;
        max-width: 155px;
      }
    }

    &__search {
      align-items:     center;
      display:         flex;
      justify-content: center;
      width:           56%;
    }
  }
</style>


<script>
import SearchBar from '@/components/orders/SearchBar.vue';

export default {
  name: 'navBar',
  components: {
    SearchBar,
  },
  data() {
    return {
      searchString: '',
    };
  },
  watch: {
    searchString(value) {
      this.$emit('search', value);
    },
  },
};
</script>
