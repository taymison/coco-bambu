<template>
  <div class="item-list">
    <div :class="classCheck" @click="checkItem"></div>
    <div class="item-list__text">
      <span v-if="useKey">
        <b>Passo {{ itemKey + 1 }}</b>
        <br>
      </span>
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss">
  .item-list {
    align-items:   center;
    display:       flex;
    margin-bottom: .75em;

    &__check {
      background-color:    #ffffff;
      background-image:    url('../../assets/img/recipe/icon-check.png');
      background-position: center center;
      background-repeat:   no-repeat;
      background-size:     contain;
      border:              2px solid #f1f1f1;
      border-radius:       50%;
      height:              2.375em;
      min-width:           2.375em;

      &:hover {
        cursor: pointer;
      }

      &--checked {
        background-color: #66d701;
      }
    }

    &__text {
      font-size:   .8em;
      margin-left: 2.185em;
    }
  }
</style>

<script>
export default {
  name: 'itemList',
  props: ['item', 'useKey', 'itemKey', 'checkable'],
  data() {
    return {
      isChecked: false,
    };
  },
  computed: {
    classCheck() {
      const cssClass = 'item-list__check';

      return this.isChecked ? `${cssClass} ${cssClass}--checked` : cssClass;
    },
  },
  methods: {
    checkItem() {
      if (this.checkable) {
        this.isChecked = !this.isChecked;

        this.$emit('checked', this.isChecked);
      }
    },
  },
};
</script>
