<template lang="pug">
  .main
    ProductList()
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'home',

  components: {
    ProductList
  },

  props: {
    sort: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
