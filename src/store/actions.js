import products from '@/mock'
import * as types from './mutation-types'

const actions = {
  filterProducts ({ commit, dispatch, state }) {
    const hasFilters = Object
      .keys(state.activeFilters)
      .map(type => !!state.activeFilters[type].length)
      .reduce((a, b) => a || b, false)

    if (hasFilters) {
      const filtered = Object.keys(state.activeFilters).map((filter, key) => {
        return state.productList.filter(item => {
          return state.activeFilters[filter].includes(item[filter])
        }).filter(Boolean)
      }).filter(Boolean)

      commit(types.SET_PRODUCT_LIST, filtered)
    }

    if (!hasFilters) {
      dispatch('getProducts')
    }
  },

  getFilterList ({ commit }, data) {
    const productBrands = {
      name: 'Brands',
      items: [...new Set([...data.map(item => item.brand).sort()])],
      type: 'brand'
    }

    const productSizes = {
      name: 'Sizes',
      items: [...new Set([...data.map(item => item.size).sort()])],
      type: 'size'
    }

    const productTypes = {
      name: 'Types',
      items: [...new Set([...data.map(item => item.type).sort()])],
      type: 'type'
    }

    const filters = [productBrands, productSizes, productTypes]

    commit(types.SET_FILTER_LIST, filters)
  },

  getProducts ({ commit, dispatch }) {
    commit(types.SET_PRODUCT_LIST, products)
    dispatch('getFilterList', products)
  },

  setFilter ({ commit, dispatch }, data) {
    commit(types.SET_ACTIVE_FILTER, data)
    dispatch('filterProducts')
  },

  setSorting ({ commit, state }, data) {
    const split = data.split('-')
    const type = split[0]
    const order = split[split.length - 1]

    let sorted = state.productList.sort((a, b) => {
      if (type === 'price' || type === 'rating') {
        return a[type] - b[type]
      }

      return a[type].localeCompare(b[type])
    })

    if (order === 'desc') {
      sorted = sorted.reverse()
    }

    commit(types.SET_PRODUCT_LIST, sorted)
    commit(types.SET_SORT, data)
  }
}

export default actions
