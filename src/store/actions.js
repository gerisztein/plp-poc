import products from '@/mock'
import * as types from './mutation-types'

const actions = {
  getProducts ({ commit }) {
    commit(types.SET_PRODUCT_LIST, products)
  }
}

export default actions
