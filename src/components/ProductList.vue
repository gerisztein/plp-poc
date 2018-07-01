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

<style scoped lang="stylus">
.products
  display flex
  flex-flow row wrap
  overflow hidden
  width 100%

  &__header
    flex-basis 40%

  h1
    font-size 3rem
    font-weight 700
    margin 0

  &__filter
    display flex
    flex-flow row wrap
    margin-bottom 8px
    overflow hidden

    &__title
      align-self center
      font-size .75rem
      font-weight 700
      margin-right 16px

    &__option
      background #f1f1f1
      cursor pointer
      font-size .85rem
      margin 0 8px 10px 0
      padding 4px 8px
      text-transform capitalize
      transition all .25s

      &:hover
        background #ccc
        color #fff

      &--close
        color #bbb
        line-height .65rem
        margin-right 4px
        transition all .25s

        ^[-1]:hover &
          color #fff

  &__list
    display flex
    flex-flow row wrap
    overflow hidden
    padding 16px 0
    width 100%
</style>
