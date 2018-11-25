"use strict";

angular
  .module("App")
  .controller("weatherController", function(weatherService) {
    const $ctrl = this;
    
    $ctrl.wfo = "DTX";
    $ctrl.x = 43;
    $ctrl.y = 80;

    $ctrl.result = weatherService.getData($ctrl.wfo, $ctrl.x, $ctrl.y);

  });