'use strict';

/**
 * @ngdoc service
 * @name travelApp.travelwf
 * @description
 * # travelwf
 * Factory in the travelApp.
 */
angular.module('travelApp')
  .factory('travelwf', function ($http) {
    // Service logic
    // ...

   

    // Public API here
    return {

      GetCountries: function() {
				return $http.get('/../../resources/countries.json');
			},
      SetCountry: function (code){
        sessionStorage.setItem('country',code);
        
      },
      GetCurrentCountry: function(){
        var option = "empty";
        var currentOption = sessionStorage.getItem('country');
        if(currentOption !== null){
           option = currentOption;
        }
        return option;
      },
      ClearCurrentOption: function(){
        sessionStorage.removeItem('country');
      }
      
    };
  });
