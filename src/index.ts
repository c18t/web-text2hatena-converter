import Vue from 'vue'
// @ts-ignore ts cannot find App.vue files.
import App from './App.vue'

new Vue({
  el: '#app',
  template: '<app />',
  components: { App },
});
