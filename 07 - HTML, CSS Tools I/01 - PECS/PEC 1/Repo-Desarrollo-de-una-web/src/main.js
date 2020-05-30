import 'babel-polyfill';
import Vue from 'vue'
import Bulma from 'bulma';
import FontAwesome from '@fortawesome/fontawesome-free/css/all.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  Bulma,
  FontAwesome,
  render: h => h(App)
}).$mount('#app')