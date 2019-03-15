import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import HeyUI from 'heyui'
import router from './router'
import VueLazyload from 'vue-lazyload'
require("heyui/themes/index.css");
Vue.use(HeyUI);
Vue.use(axios);
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: require('./assets/img/error.jpg'),
  loading: require('./assets/img/loading.gif')
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
