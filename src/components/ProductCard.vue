<template lang="pug">
  .product
    .product__image
      img(:src="image", :alt="name")
    .product__name
      div(v-text="brand")
      div(v-text="formattedName")
      .product__type(v-text="type")
    .product__details
      div
        .product__price(v-text="formattedPrice")
        .product__size(v-text="size")
      StarRating(:rating="rating")
</template>

<script>
import StarRating from './StarRating'

export default {
  name: 'ProductCard',
  components: {
    StarRating
  },
  props: {
    brand: {
      type: String,
      required: true,
      default: ''
    },
    id: {
      type: String,
      required: true,
      default: ''
    },
    image: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    size: {
      type: String,
      required: true,
      default: ''
    },
    slug: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    formattedName () {
      return this.name.replace(this.type, '').replace(this.brand, '').trim()
    },

    formattedPrice () {
      const options = {
        currency: 'EUR',
        style: 'currency'
      }
      const price = this.price / 100

      return price.toLocaleString('de-DE', options)
    }
  }
}
</script>

<style scoped lang="stylus">
.products
  display flex
  flex-flow row wrap
  overflow hidden

.product
  border-bottom 1px solid #efefef
  box-shadow 0
  cursor pointer
  margin 0 8px 4px
  transition all .25s
  width calc(25% - 16px)

  &:hover
    box-shadow 0px 0px 15px 5px #f1f1f1

  &__image
    img
      width 100%

  &__name
    font-size 1rem
    font-weight 700
    min-height 85px
    padding 0 16px
    text-align center

  &__type
    font-size .75rem
    font-weight 100
    text-align center

  &__details
    display flex
    flex-direction row
    justify-content space-between
    padding 8px 16px

  &__price
    font-weight 700

  &__size
    font-size .65rem
    text-transform lowercase
</style>
