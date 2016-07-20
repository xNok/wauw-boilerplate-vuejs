/*
* @Author: Alexandre-COUEDELO
* @Date:   2016-07-18 23:50:40
* @Last Modified by:   Alexandre-COUEDELO
* @Last Modified time: 2016-07-19 00:35:47
*/

'use strict';

var vm = new Vue({
  el: '#l-app', //binding to the DOM
  /* Variables */
  data: {
    // variables definition
    // #[reminder]
    // Display into your html with mustache {{ varableName }} OR {{{ raw_html }}}
    // Two-way binding with v-model for inputs OR v-bind:attributeName for attributes
  },
  computed: {
    // functions that return variables
    // #[reminder]
    // same usage as data, but variables are javascript function 
  },
  /* Function */
  methods: {
    // methods library
    // #[reminder]
    // use those functions with v-on:click,v-on:keyup.*
  },
  mixins: [
    //external function bundle. They are merge with the vue instance
  ],
  /* Events */
  created: function() {
    // instance ready callback
  },
  beforeCcompiled: function() {
    // instance ready callback
  },
  compiled: function() {
    // instance ready callback
  },
  ready: function() {
    // instance ready callback
  },
  destroyed: function() {
    // instance ready callback
  },
});