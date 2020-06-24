import Vue from 'vue'
import Vuex from 'vuex'

import order from './order/order'
import global from './global/global'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    order,
    global
  }
})
