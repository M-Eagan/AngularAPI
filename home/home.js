"use strict";

const home = {
 
  templateUrl: "home/home.html",

  controller: "weatherController"
};

angular.module("App").component("home", home);