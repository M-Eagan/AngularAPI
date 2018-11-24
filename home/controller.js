"use strict";

angular
  .module("App")
  .controller("HomeController", function(HomeService) {
    const $ctrl = this;
    
    function changes(response) {
      $ctrl.students = response.data;
    }

    HomeService.getData().then(changes);

  });