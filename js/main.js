$(window).load(function() {


  (function() {
'use strict';

/*Set options for Datedropper*/
var options = {

  format: "y-m-d",
  placeholder: "Press here",
  minYear: "2000",
  maxYear: "2020",
  dropPrimaryColor: "#E36E40",
  dropTextColor: "#8EF2FF",
  dropBackgroundColor: "#161819",
  dropBorder: "2px solid #161819",
  dropShadow: "0 0 10px 0 rgba(22, 24, 25, 0.45)"

  /* Other options with defaults:
---FEATURE---
  animate: "true" (When set to true (default) the dropdown will run an initial
                  state animation when the user clicks the control for the first
                  time and all user changes are animated. )
  init_animation: "fadeIn" (Animation Style to use when init datedropper. There
                  are three available animation values: fadeIn(default), bounce,
                  dropDown. )
  format: "m-d-Y" (Check on website, many different.)
  lang: "eng"     (Check on website, many different.)
  lock: "false"   Set the initial value to current date or lock the control
                  value to current date: false(default), from, to.
  yearsRange: "10"

  ---STYLE---
  dropBorderRadius: "8"
  dropWidth: "124"
  dropTextWeight: "bold"
  */


};
$('#tryhard').dateDropper();
$('#fade').dateDropper($.extend({}, options, { animation: "fadeIn" }));
$('#bounce').dateDropper($.extend({}, options, { init_animation: "bounce" }));
} ());
});


  /*----COLORS - #E36E40 - ORANGE | BLUE - #8EF2FF | GREY - #161819----*/
