window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

import './index.scss'
import './js/sidebar'
import './js/scrollspy'
import './js/smoothScroll'

console.log("world!")

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
