import Vue from 'vue'
import App from './App.vue'
import PmButton from '@pokemon-ui/button'
import '@pokemon-ui/button/dist/es/index.css'
// import PmTablePro from '@pokemon-ui/table-pro'
const PmTablePro = require('@pokemon-ui/table-pro')
console.log(PmTablePro.default)
import elementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
// import TestModule from '@pokemon-ui/test-module'
const TestModule = require('@pokemon-ui/test-module')
console.log(TestModule, 'test')

Vue.use(PmButton)
Vue.use(PmTablePro.default)
Vue.use(elementUi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
