/*
* @Author: Alexandre-COUEDELO
* @Date:   2016-07-18 23:50:40
* @Last Modified by:   Alexandre-COUEDELO
* @Last Modified time: 2016-07-21 10:08:35
*/

'use strict';

var vm = new Vue({
  el: '#l-app', //binding to the DOM
    /*************/
   /* Variables */
  /*************/
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
    /*************/
   /* Variables */
  /*************/
  methods: {
    // methods library
    // #[reminder]
    // use those functions with v-on:click,v-on:keyup.*
  },
  mixins: [
    //external function bundle. They are merge with the vue instance
  ],
    /*************/
   /* Events    */
  /*************/
  watch: {
    // attach callback to expressions of the Vue instance
    // such as data and computed
    // #[reminder]
    // use those watch attributes to interact after that a value changes
    // #[trick]
    // very use fall to pull other framworks (jQuery, motionUI, etc.)
  },
  created: function() {
    // instance created callback after-> observe data, init Events
  },
  beforeCcompiled: function() {
    // instance ready callback   after-> mount el
  },
  compiled: function() {
    // instance ready callback   after-> compile el and templates
  },
  ready: function() {
    // instance ready callback   after-> insert into document for the first time
  },
  destroyed: function() {
    // instance ready callback
  },
});