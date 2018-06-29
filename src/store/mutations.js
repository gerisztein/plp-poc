import * as types from './mutation-types'

const mutations = {
  [types.SET_PRODUCT_LIST] (state, payload) {
    state.productList = payload
  }
}

export default mutations
