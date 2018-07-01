import * as types from './mutation-types'

const mutations = {
  [types.SET_ACTIVE_FILTER] (state, { option, type }) {
    if (state.activeFilters[type].includes(option)) {
      const index = state.activeFilters[type].indexOf(option)

      state.activeFilters[type].splice(index, 1)
      return
    }
    state.activeFilters[type] = option
  },

  [types.SET_FILTER_LIST] (state, payload) {
    state.filterList = payload
  },

  [types.SET_PRODUCT_LIST] (state, payload) {
    state.productList = payload
  },

  [types.SET_SORT] (state, payload) {
    state.activeSorting = payload
  }
}

export default mutations
