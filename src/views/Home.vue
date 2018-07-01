<template lang="pug">
  .main
    //- ProductFilter()
    ProductList()
</template>

<script>
import ProductFilter from '@/components/ProductFilter.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'home',
  components: {
    ProductFilter,
    ProductList
  }
}
</script>

<style scoped lang="stylus">
.main
  display flex
  margin 0 auto
  width 960px
</style>
