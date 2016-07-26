/*
* @Author: Alexandre-COUEDELO
* @Date:   2016-07-18 23:50:40
* @Last Modified by:   Alexandre-COUEDELO
* @Last Modified time: 2016-07-21 16:53:48
*/

'use strict';

  /****************************************************************************
  * Vue.js                                                                    *
  ****************************************************************************/

var data = {
  name: 'My Tree',
}

  /****************************************************************************
  * Vue.js Components definition                                              *
  ****************************************************************************/

Vue.filter('JSONStringify', function (value) {
  return JSON.stringify(value,null,2);
})

  /****************************************************************************
  * Vue.js Components definition                                              *
  ****************************************************************************/

//component registration
Vue.component('item',{
  // link to the design, ie. template tag of the html file
  template: '#item-template',
    /*************/
   /* Variables */
  /*************/
  // data shared with children
  props: {
    model: Object
  },
  // to avoid sharing the same data object in all component use a function to return a new variable
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
    /*************/
   /* functions */
  /*************/
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
})

  /****************************************************************************
  * Vue.js Instance                                                           *
  ****************************************************************************/

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
    treeData: data
  },
  computed: {
    // functions that return variables
    // #[reminder]
    // same usage as data, but variables are javascript function 
  },
    /*************/
   /* functions */
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