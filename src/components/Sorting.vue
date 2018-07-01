<template lang="pug">
.products__sorting
  .products__sorting__title Sort by:
  span.products__sorting__option(
    v-for="option in options",
    v-text="option.label",
    :class="{ active: option.value === sorting }",
    @click="sort(option.value)"
  )
  //- select(v-model="model", @change='sort')
    option(
      v-for="option in options",
      :value="option.value",
      v-text="option.label"
    )
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Sorting',
  props: {
    options: {
      type: Array,
      required: false,
      default: () => [
        {
          label: 'Price (Low to High)',
          value: 'price-asc'
        },
        {
          label: 'Price (High to Low)',
          value: 'price-desc'
        },
        {
          label: 'Rating',
          value: 'rating'
        },
        {
          label: 'Name (A-Z)',
          value: 'name-asc'
        },
        {
          label: 'Name (Z-A)',
          value: 'name-desc'
        },
      ]
    },
    selected: {
      type: String,
      required: true,
      default: ''
    }
  },

  data () {
    return {
      model: this.selected
    }
  },
  computed: {
    ...mapGetters(['activeFilters', 'activeSorting', 'productList']),

    sorting () {
      return this.activeSorting
    }
  },
  methods: {
    ...mapActions(['getProducts', 'setFilter', 'setSorting']),

    sort (value) {
      console.log('value', value)
      this.setSorting(value)
    }
  }
}
</script>

<style scoped lang="stylus">
.products__sorting
  margin-bottom 16px
  text-align right

  &__title
    display inline-block
    font-weight 700
    margin-right 8px

  &__option
    cursor pointer
    font-size .85rem

    &.active
      font-weight 700

    &:not(:last-child):after
      color #ccc
      content "|"
      font-weight 100
      margin 0 8px
</style>
