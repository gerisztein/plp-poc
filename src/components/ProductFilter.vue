<template lang="pug">
.filter
  .filter__category(v-for="(filter, index) in filterList", :key="index")
    .filter__category__title(
      v-text="filter.name",
      :class="{ active: active[filter.name.toLowerCase()] }",
      @click="toggleFilter(filter.name)"
    )
    .filter__category__container(v-if="active[filter.name.toLowerCase()]")
      .filter__category__options

        template(v-for="(option, key) in filter.items")
          label(:for="`${filter.name}_${key}`")
            input(
              type="checkbox",
              :id="`${filter.name}_${key}`",
              v-model="model[filter.type]",
              :value="option"
            )
            span(v-text="option")
      .filter__category__action
        button(@click='selectFilter(filter.type)') Apply
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductFilter',
  data () {
    return {
      active: {
        brands: false,
        sizes: false,
        types: false
      },
      model: {
        brand: [],
        size: [],
        type: []
      }
    }
  },
  computed: {
    ...mapGetters(['activeFilters', 'filterList'])
  },
  methods: {
    ...mapActions(['setFilter']),

    selectFilter (type) {
      const option = this.model[type]

      this.setFilter({ option, type })
      this.toggleFilter(type)
    },

    toggleFilter (name) {
      const filter = name.toLowerCase()
      const previousState = this.active[filter]

      for (let active in this.active) {
        this.active[active] = false
      }

      this.active[filter] = !previousState
    }
  }
}
</script>

<style scoped lang="stylus">
.filter
  display flex
  flex-flow row
  flex-grow 1
  height fit-content
  justify-content flex-end
  min-width 160px
  padding 8px 0

  &__category
    margin 0 0 0 16px
    min-width 150px
    position relative

    &__title
      border-bottom 1px solid #efefef
      cursor pointer
      font-size 1rem
      font-weight 700
      height 23px
      margin-bottom 8px
      position relative

      &.active
        &:after
          transform rotate(139deg) skew(7deg)

      &:after
        border 1px solid #000
        border-right 0
        border-top 0
        content ' '
        display block
        height 6px
        position absolute
        right 16px
        top 6px
        transform rotate(-41deg) skew(7deg)
        transition all .15s
        width 6px

    &__container
      background #fff
      border 1px solid #efefef
      overflow hidden
      position absolute
      top 22px
      width 100%

    &__action
      padding 4px

      button
        background #fff
        border 1px solid #efefef
        font-weight 700
        line-height 1rem
        min-height 2rem
        padding 8px
        transition all .25s
        width 100%

        &:hover
          background #f1f1f1

    &__options
      display flex
      flex-flow column
      font-size .75rem
      max-height 200px
      overflow auto
      padding 16px 8px 0

      label
        cursor pointer
        margin-bottom 8px

      input[type="checkbox"]
        cursor pointer
        margin 0 4px 8px
</style>
