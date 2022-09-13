import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/lang'
import ElementUI from 'element-ui'
import { AppModule } from '@/store/modules/app'
import SvgIcon from 'vue-svgicon'

import '@/permission'
import 'normalize.css'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'

require('@/styles/_variables.scss')

Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false
// test git
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
