import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
// @ts-ignore ts cannot find App.vue files.
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  template: '<app />',
  components: { App },
})
