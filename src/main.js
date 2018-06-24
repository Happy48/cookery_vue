// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from 'vue-stores'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(stores)
Vue.use(Share)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>',
  data: {
    state: {
      // token: '',
      token: '8797723cc026626cb9b2a45e5d258d46',
      ip: '192.168.43.15'
    }
  }
})
