// Services are used to create or process data and pass
// it to various pieces of the application.
// Think: HTTP requests or any other major functional
// parts of the application

"use strict";
// defining the service
angular
  .module("App")
  .service("HomeService", function($http) { // $http must be injected to use HTTP requests
    const service = this;

// this method is for doing a GET request
service.getData = () => {
    return $http({
      method: "GET",
      url: "/students"
    });
}
  })