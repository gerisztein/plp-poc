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

// Reset
html
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  box-sizing border-box
  font-family sans-serif

*, *:before, *:after
  box-sizing inherit

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video
  border 0
  font inherit
  font-size 100%
  margin 0
  padding 0
  vertical-align baseline

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section
  display block

body
  line-height 1

ol ul
  list-style none

blockquote, q
  quotes none

  &:before
    content ''

table
  border-collapse collapse
  border-spacing 0

*, *:before, *:after
  box-sizing inherit

progress
  vertical-align baseline

template, [hidden]
  display none

a
  -webkit-text-decoration-skip objects
  background-color transparent

a:active, a:hover
  outline-width 0

abbr[title]
  border-bottom none
  text-decoration underline

b, strong
  font-weight 600

dfn
  font-style italic

img
  border-style none

svg:not(:root)
  overflow hidden

code, kbd, pre, samp
  font-family monospace, monospace
  font-size 1em

hr
  box-sizing content-box
  height 0
  overflow visible

//
// Forms
//
button, input, select, textarea
  font inherit
  margin 0
  &:focus, &:active
    outline 0

optgroup
  font-weight bold

button, [type='button']
  cursor pointer

button, input
  overflow visible

button, select
  text-transform none

button, html [type='button'], [type='reset'], [type='submit']
  -webkit-appearance button

button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner
  border-style none
  padding 0

button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring
  outline 1px dotted ButtonText

fieldset
  border 1px solid $color-gray
  margin 0 2px
  padding .35em .625em .75em

legend
  box-sizing border-box
  color inherit
  display table
  max-width 100%
  padding 0
  white-space normal

textarea
  overflow auto

input
  &[type='checkbox'], &[type='radio']
    box-sizing border-box
    padding 0

  &[type='search']
    -webkit-appearance textfield
    outline-offset -2px

  &::-webkit-file-upload-button
    -webkit-appearance button
    font inherit
</style>
