<template lang="pug">
  .product
    .product__image
      img(:src="image", :alt="name")
    .product__name
      div(v-text="brand")
      div(v-text="formattedName")
      .product__type(v-text="type")
    .product__details
      .product__price
        .product__price__value(v-text="formattedPrice")
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
