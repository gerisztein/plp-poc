<template lang="pug">
.filter
  .filter__category(v-for="(filter, index) in filterList", :key="index")
    .filter__category__title(v-text="filter.name")
    .filter__category__options(v-for="(option, key) in filter.items", :key="key")
      input(
        type="checkbox",
        :model="activeFilters[filter.type]",
        :value="option",
        @change='selectFilter({ option: option, type: filter.type })'
      )
      span(v-text="option")
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductFilter',
  computed: {
    ...mapGetters(['activeFilters', 'filterList'])
  },
  methods: {
    ...mapActions(['setFilter']),

    selectFilter (option, type) {
      this.setFilter(option, type)
    }
  }
}
</script>

<style scoped lang="stylus">
.filter
  display flex
  flex-flow column
  flex-grow 1
  height fit-content
  margin-right 16px
  min-width 160px
  padding 8px

  &__category
    margin-bottom 16px

    &__title
      font-size 1rem
      font-weight 700
      margin-bottom 8px

    &__options
      display flex
      font-size .75rem
      margin-bottom 4px

      input[type="checkbox"]
        margin-right 4px
</style>
