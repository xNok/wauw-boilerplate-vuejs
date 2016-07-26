/*
* @Author: Alexandre-COUEDELO
* @Date:   2016-07-18 23:50:40
* @Last Modified by:   Alexandre-COUEDELO
* @Last Modified time: 2016-07-26 17:03:07
*/

'use strict';

var emptyItem =  {
      input1: '',
      input2: '',
      editing: false,
      completed: false
}

function clone(obj){
  return JSON.parse(JSON.stringify(obj));
}

var vm = new Vue({
  el: '#l-app', //binding to the DOM
/*************\
|* Variables *|
\*************/
  data: {
    // variables definition
    newItem: clone(emptyItem),
    editedItem: null,
    items: []
  },
  computed: {
    // functions that return variables
    // #[reminder]
    // same usage as data, but variables are javascript function 
  },
/*************\
|* Functions *|
\*************/
  methods: {
    // methods library
    add: function () {
      //push a clone inside
      this.items.push(clone(this.newItem));
      //clear new pending new item
      this.newItem = clone(emptyItem);
        /*********************/
       /* TODO - API/Create */
      /*********************/
    },
    edit: function (item) {
      this.editedItem = item;
    },
    remove: function (item) {
      this.items.$remove(item);
        /*********************/
       /* TODO - API/delete */
      /*********************/
    },
    clearAll: function() {
      this.items = [];
        /************************/
       /* TODO - API/deleteAll */
      /************************/
    },
    /* custom event callback*/
    doneEdit: function(item){
      /* save edited */
      this.editedItem = null;
        /*******************/
       /* TODO - API/edit */
      /*******************/
    }
  },
  mixins: [
    //external function bundle. They are merge with the vue instance
  ],
/*************\
|*   Events  *|
\*************/
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