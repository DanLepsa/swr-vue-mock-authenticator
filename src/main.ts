import Vue from 'vue'
import "vue-tsx-support/enable-check"
import {App} from './App';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
