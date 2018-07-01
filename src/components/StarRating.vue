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

<style lang="stylus" scoped>
.stars-container
  position relative
  display inline-block
  color transparent
  font-size 14px

  &::before
    position absolute
    top 0
    left 0
    content '★★★★★'
    color #efefef

  &::after
    position absolute
    top 0
    left 0
    content '★★★★★'
    color gold
    overflow hidden

$stars = 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 100

for $star in $stars
  .stars-{$star}:after
    width $star * 1%
</style>
