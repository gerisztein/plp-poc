<template lang="pug">
.filter
  button.filter__cta(@click='toggleContainer()') Filter
  .filter__container(:class="{ active: showContainer }")
    .filter__header
      .filter__header__title Filters
      .filter__header__close(@click='toggleContainer()') X
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
    .filter__category__action.hidden-tablet.hidden-desktop
      button(@click='selectFilter()') Clear all filters
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
      showContainer: false,
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

    clearModel () {
      for (let type in this.model) {
        this.model[type] = []
      }
    },

    selectFilter (type) {
      if (type) {
        const option = this.model[type]

        this.setFilter({ option, type })
        this.toggleFilter(type)
      }

      if (!type) {
        this.setFilter()
        this.clearModel()
      }

      this.toggleContainer()
    },

    toggleContainer () {
      this.showContainer = !this.showContainer
      this.$emit('active', this.showContainer)
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
