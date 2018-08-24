// Import Vue
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import Login from './Login'
import router from './router'
import VueNumeric from 'vue-numeric'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import VueCordovaDevice from 'vue-cordova-device'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueNumeric)
Vue.component(VueNumberInput.name, VueNumberInput);
let component = App

Vue.use(VueCordovaDevice)

console.log(Vue.cordova.device);

// Import App Custom Styles
//import AppStyles from './assets/sass/main.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // short for 'router: router'
  template: '<App/>',
  components: { 
    'App': component
  }
})
