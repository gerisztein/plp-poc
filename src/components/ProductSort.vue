<template lang="pug">
.sorting
  .sorting__title.hidden-mobile Sort by:
  .sorting__options
    span.sorting__option.hidden-mobile(
      v-for="option in options",
      v-text="option.label",
      :class="{ active: option.value === sorting }",
      @click="sort(option.value)"
    )
  .sorting__mobile.hidden-desktop
    label(for="sort") Sort
    select(id="sort", v-model="model", @change="sort(model)")
      option(
        v-for="option in options",
        v-text="option.label",
        :value="option.value"
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
        }
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
      if (this.$router.currentRoute.query && this.$router.currentRoute.query.sort) {
        const sort = this.$router.currentRoute.query.sort
        this.setSorting(sort)

        return sort
      }

      return this.activeSorting
    }
  },

  methods: {
    ...mapActions(['getProducts', 'setFilter', 'setSorting']),

    sort (value) {
      console.log(value)
      this.$router.push({
        name: 'home',
        query: {
          sort: value
        }
      })

      this.setSorting(value)
    }
  }
}
</script>
