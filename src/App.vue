<template lang="pug">
  #app
    #nav
      img(src="https://cdn.flaconi.de/themes/flaconi/assets/20180615150324/images/svg/logo-flaconi.svg", width="150")
      //- router-link(to="/").
        Home
      //- span |
      //- router-link(to="/about").
        About
    router-view
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  max-width 960px
  margin 0 auto

#nav
  border-bottom 1px solid #efefef
  margin-bottom 16px
  padding 30px 0

  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
