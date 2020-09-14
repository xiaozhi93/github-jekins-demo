import Vue from 'vue'
import App from './App.vue'
import PmButton from '@pokemon-ui/button'
import '@pokemon-ui/button/dist/es/index.css'
import PmTablePro from '@pokemon-ui/table-pro'
import elementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(PmButton)
Vue.use(PmTablePro)
Vue.use(elementUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
