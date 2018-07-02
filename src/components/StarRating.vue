<template lang="pug">
  span(
    :class="classes",
    :title="title"
  ).
    ★★★★★
</template>

<script>
export default {
  name: 'StarRating',

  props: {
    rating: {
      type: Number,
      required: true,
      default: 0
    }
  },

  computed: {
    classes () {
      return [
        'stars-container',
        `stars-${this.starRating}`
      ]
    },

    starRating () {
      return Math.round(this.rating / 5) * 5
    },

    title () {
      return `Average rating: ${this.rating / 20} (${this.rating}%)`
    }

  },

  methods: {
    imageFallback () {
      console.log('image fallback')
    }
  }
}
</script>
