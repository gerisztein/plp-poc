<template lang="pug">
  .products
    .products__header
      h1 Parfum
    .products__sort
      ProductFilter
      .products__filter
        template(v-for="(filter, name) in activeFilters")
          //- .products__filter__title(v-text="name", v-if="filter.length")
          span.products__filter__option(v-for="option in filter", @click="removeFilter({ option: option, type: name })")
            span.products__filter__option--close X
            span(v-text="option")
      Sorting(:selected="activeSorting")

    .products__list
      template(v-for="(product, index) in productList")
        ProductCard(
          :brand="product.brand",
          :id="product.id",
          :image="product.image",
          :key="product.id",
          :name="product.name",
          :price="product.price",
          :rating="product.rating",
          :size="product.size",
          :slug="product.slug",
          :type="product.type"
        )
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'
import Sorting from './Sorting'

export default {
  name: 'ProductList',
  components: {
    ProductCard,
    ProductFilter,
    Sorting
  },
  mounted () {
    this.getProducts()
  },
  computed: {
    ...mapGetters(['activeFilters', 'activeSorting', 'productList']),

    sorting () {
      return this.activeSorting
    }
  },
  methods: {
    ...mapActions(['getProducts', 'setFilter', 'setSorting']),

    removeFilter (option, type) {
      this.setFilter(option, type)
    },

    sort () {
      this.setSorting(this.activeSorting)
    }
  }
}
</script>
