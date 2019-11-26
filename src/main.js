import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import AppCars from './components/AppCars'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {name:'Cars', path:'/cars', component:AppCars}
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "link-active",
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
