// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    a: 1
  },
  template: '<App/>',
  components: { App },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})
