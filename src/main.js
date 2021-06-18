import Vue from 'vue'
import App from './App.vue'
import VueSimpleAlert from 'vue-simple-alert'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import VueCookies from 'vue-cookies'


Vue.use(VXETable)
Vue.use(VueSimpleAlert)
Vue.use(VueCookies)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
