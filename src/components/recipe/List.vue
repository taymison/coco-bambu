<template>
  <div class="list">
    <div class="list__container">
      <h1 class="list__title">{{ title }}</h1>
      <item-list class="list__item"
        v-for="(item, key) in list"
        :key="key"
        :item="item"
        :use-key="useKey"
        :item-key="key"
        v-on:checked="checked"
        :checkable="checkable"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .list {
    margin:  0;

    &__container {
      padding: 2.5em 5.625em 3.875em 2.3125em;
    }

    &__title {
      color:     #343434;
      font-size: 1em;
      margin:    0 0 3em 0;
    }

    &__item:last-of-type {
      margin-bottom: 0;
    }
  }
</style>

<script>
import ItemList from '@/components/recipe/ItemList.vue';

export default {
  name: 'list',
  components: {
    ItemList,
  },
  props: ['title', 'list', 'useKey', 'checkable'],
  methods: {
    checked(checked) {
      this.$emit('checked', checked);
    },
  },
};
</script>
