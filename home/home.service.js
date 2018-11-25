

"use strict";


angular
  .module("App")
  .service("weatherService", function($http) { 
    const service = this;
    service.getData = (wfo, x, y) => {
        return $http.get("https://api.weather.gov/gridpoints/" + wfo + "/" + x + "," + y)
        .then(function(response){
            console.log(response)
            
        })
    }
  });
