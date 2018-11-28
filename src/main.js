import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueSweetalert2)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCqHvIsrKR9xcCiMhLvw_jJX2dS0vsTkb8',
      authDomain: 'mevn1-ba3c9.firebaseapp.com',
      databaseURL: 'https://mevn1-ba3c9.firebaseio.com',
      projectId: 'mevn1-ba3c9',
      storageBucket: 'mevn1-ba3c9.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
