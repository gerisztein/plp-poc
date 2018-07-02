import products from '@/mock'
import * as types from './mutation-types'

const actions = {
  filterProducts ({ commit, dispatch, state }) {
    const filters = {}

    for (let filter in state.activeFilters) {
      if (state.activeFilters[filter].length) {
        filters[filter] = state.activeFilters[filter]
      }
    }

    const filterKeys = Object.keys(filters)
    const hasFilters = filterKeys
      .map(type => !!filters[type].length)
      .reduce((a, b) => a || b, false)

    if (hasFilters) {
      const filtered = products.filter((item) => {
        return filterKeys.every(key => !!~filters[key].indexOf(item[key]))
      })

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

  getProducts ({ commit, dispatch, state }) {
    commit(types.SET_PRODUCT_LIST, products)
    dispatch('setSorting', state.activeSorting)
    dispatch('getFilterList', products)
  },

  setFilter ({ commit, dispatch }, option, type) {
    if (option) {
      commit(types.SET_ACTIVE_FILTER, option, type)
      dispatch('filterProducts')
    }

    if (!option) {
      commit(types.SET_ACTIVE_FILTER, {})
      dispatch('getProducts')
    }
  },

  setSorting ({ commit, state }, data) {
    const split = data.split('-')
    const type = split[0]
    const order = split[split.length - 1]

    let sorted = state.productList.sort((a, b) => {
      if (type === 'price' || type === 'rating') {
        return b[type] - a[type]
      }

      return b[type].localeCompare(a[type])
    })

    if (order === 'asc') {
      sorted = sorted.reverse()
    }

    commit(types.SET_PRODUCT_LIST, sorted)
    commit(types.SET_SORT, data)
  }
}

export default actions
