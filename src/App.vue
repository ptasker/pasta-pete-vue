<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
    <header class="top">
      <h1>Pete's Pasta
        <span role="img" aria-label="Pasta">🍝</span>
      </h1>
      <h3 class="tagline">
        <span>The best sauce in the Ottawa Valley!</span>
      </h3>
    </header>
    <ul>
      <pasta-item v-for="(item, key) in samplePasta" :item="item" :key="key" @order="handleOrder(key)"></pasta-item>
    </ul>
  </div>
</template>

<script>
import pastaItem from '@/components/PastaItem.vue'
import samplePasta from './sample-pasta'

export default {
  name: 'app',
  data() {
    return {
      samplePasta: samplePasta,
      orders: {}
    }
  },
  components: {
    pastaItem
  },
  methods: {
    handleOrder: function (key) {

      if (!this.orders.hasOwnProperty(key)) {
        this.$set(this.orders, key, { count: 0 });
      }

      this.orders[key].count += 1;
    }
  }
}
</script>
