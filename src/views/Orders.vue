<template>
  <div>
    <nav-bar v-on:search="search"></nav-bar>
    <div class="container">
      <h1 class="title">Últimos pedidos</h1>
      <separator-line/>
      <span v-if="ordersFiltred.length > 0">
        <order v-for="order in ordersFiltred"
          :key="order.id"
          :id="order.id"
          :image="order.photos[0]"
          :name="order.name"
          :description="order.description"
        />
      </span>
      <h1 v-else class="title">Nenhuma receita encontrada</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 26px 16px;

    .title {
      color: #383838;
      font-size: 1em;
    }
  }
</style>

<script>
import api from '../api';
import NavBar from '@/components/orders/NavBar.vue';
import SeparatorLine from '@/components/orders/SeparatorLine.vue';
import Order from '@/components/orders/Order.vue';

export default {
  name: 'orders',
  components: {
    NavBar,
    SeparatorLine,
    Order,
  },
  data() {
    return {
      orders: [],
      ordersFiltred: [],
    };
  },
  mounted() {
    api.getRecipes().then((response) => {
      this.orders = response.data;
      this.ordersFiltred = this.orders;
    });
  },
  methods: {
    search(searchString) {
      if (searchString === '') {
        this.ordersFiltred = this.orders;
      } else {
        this.ordersFiltred = this.orders.filter(order => this.filterOrder(order, searchString));
      }
    },
    filterOrder(order, string) {
      return order.name.toLowerCase().search(string) >= 0;
    },
  },
};
</script>
