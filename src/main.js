import Vue from 'vue'
import App from './App.vue'
import PmButton from '@pokemon-ui/button'
import '@pokemon-ui/button/dist/es/index.css'

Vue.use(PmButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
